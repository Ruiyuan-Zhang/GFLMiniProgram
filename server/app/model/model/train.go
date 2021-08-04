/**
 * @note: 训练 file,acc,testData = 传入客户端模型地址列表，获取新的全局模型地址
 * @author: zhangruiyuan
 * @date:2021/8/3
**/
package model

import (
	"bytes"
	"goskeleton/app/global/consts"
	"goskeleton/app/utils/rand"
	"log"
	"os"
	"os/exec"
	"path"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
)

type Train struct {
}

func (t *Train) FedAvg(globalModel GlobalModel, clients []ClientModel, testData string) (newTestData, newGlobalModel, acc string, fedErr error) {
	// 1. 将node模型转换成python模型
	cmd := exec.Command("pwd")
	stdout := &bytes.Buffer{}
	stderr := &bytes.Buffer{}
	tmpPath := consts.FileServerDir + "/tmp"
	log.Println("1. 将node模型转换成python模型")
	for i := 0; i < len(clients); i++ {
		tmpDir := tmpPath + "/" + filepath.Base(filepath.Dir(clients[i].File))
		cmd := exec.Command("tensorflowjs_converter",
			"--input_format", "tfjs_layers_model",
			"--output_format", "keras",
			consts.FileServerDir+clients[i].File,
			tmpDir)
		stdout := &bytes.Buffer{}
		stderr := &bytes.Buffer{}
		cmd.Stdout = stdout
		cmd.Stderr = stderr
		if err := cmd.Run(); err == nil {
			log.Println("1." + strconv.Itoa(i) + " 将node模型转换成python模型")
		} else {
			log.Println(stdout.String(), stderr.String())
			fedErr = err
			return
		}
	}

	// 2. 对模型进行聚合
	fedavgArgs := ""
	for i := 0; i < len(clients); i++ {
		lastDir := tmpPath + "/" + filepath.Base(filepath.Dir(clients[i].File))
		fedavgArgs += " " + lastDir
	}
	globalModelDir := tmpPath + "/" + rand.String(20) // python版本的全局模型，所以存放在临时路径
	cmd = exec.Command("python3", consts.FileServerDir+"/api/fedavg.py", fedavgArgs, globalModelDir)
	stdout = &bytes.Buffer{}
	stderr = &bytes.Buffer{}
	cmd.Stdout = stdout
	cmd.Stderr = stderr
	if err := cmd.Run(); err == nil {
		log.Println("2. 对模型进行聚合")
	} else {
		log.Println(stdout.String())
		log.Println(stderr.String())
		fedErr = err
		return
	}

	//	3. 将python模型转换成node模型
	newGlobalModel = "/models/globalModelSameDir/" + filepath.Base(globalModelDir) + "/model.json"
	globalModelPath := consts.FileServerDir + "/models/globalModelSameDir/" + filepath.Base(globalModelDir)
	cmd = exec.Command("tensorflowjs_converter",
		"--input_format", "keras",
		"--output_format", "tfjs_layers_model",
		globalModelDir+"/model.h5",
		globalModelPath)
	stdout = &bytes.Buffer{}
	stderr = &bytes.Buffer{}
	cmd.Stdout = stdout
	cmd.Stderr = stderr
	if err := cmd.Run(); err == nil {
		log.Println("3. 将python模型转换成node模型")
	} else {
		log.Println(stdout.String(), stderr.String())
		fedErr = err
		return
	}

	// 4. 计算模型准确率
	// 传入测试集数据表留证地址
	newTestData = "/tests/" + globalModel.TaskId + "_" + rand.String(20) + ".json"
	testData = consts.FileServerDir + "/tests/" + path.Base(testData)
	cmd = exec.Command("node", consts.FileServerDir+"/api/predict.js", globalModelPath+"/model.json", testData, consts.FileServerDir+newTestData, consts.FileServerDir)
	stdout = &bytes.Buffer{}
	stderr = &bytes.Buffer{}
	cmd.Stdout = stdout
	cmd.Stderr = stderr
	if err := cmd.Run(); err == nil {
		ans := stdout
		reg, _ := regexp.Compile("准确率为:([0-9\\.])*\n")
		res := string(reg.Find(ans.Bytes()))
		res = strings.Replace(res, "准确率为:", "", -1)
		res = strings.Replace(res, "\n", "", -1)
		acc = res
		log.Println("4. 计算模型准确率为：", res)
		log.Println(stdout.String(), stderr.String())

	} else {
		log.Println(stdout.String(), stderr.String())
		fedErr = err
		return
	}

	// 5. 清理临时文件夹
	log.Println("5. 清理临时文件")
	for i := 0; i < len(clients); i++ {
		lastDir := tmpPath + "/" + filepath.Base(filepath.Dir(clients[i].File))
		if err := os.RemoveAll(lastDir); err == nil {
			log.Println("5." + strconv.Itoa(i) + " 清理临时文件")
		} else {
			fedErr = err
			return
		}
	}
	if err := os.RemoveAll(globalModelDir); err == nil {
		log.Println("5." + strconv.Itoa(len(clients)) + " 清理临时文件")
	} else {
		fedErr = err
		return
	}
	return
}
