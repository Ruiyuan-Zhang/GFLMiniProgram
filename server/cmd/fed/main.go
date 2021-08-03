/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/30
**/
package main

import (
	"bytes"
	"goskeleton/app/utils/rand"
	"log"
	"os/exec"
	"path/filepath"
	"strconv"
)

func main() {
	// 测试一下调用js代码
	cmd := exec.Command("node", "cmd/fed/test.js")
	stdout := &bytes.Buffer{}
	stderr := &bytes.Buffer{}
	cmd.Stdout = stdout
	cmd.Stderr = stderr
	if err := cmd.Run(); err == nil {
		log.Println(stdout.String(), stderr.String())
	}

	// 1. 将node模型转换成python模型
	clientModels := [2]string{"/Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/models/clientModel/2LeG7TJBo3R3nbhJ6in2", "/Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/models/clientModel/6vpmNkXeF8IfT149pef5"}
	tmpPath := "/Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/models/tmp"
	for i := 0; i < len(clientModels); i++ {
		lastDir := tmpPath + "/" + filepath.Base(clientModels[i])
		cmd := exec.Command("tensorflowjs_converter",
			"--input_format", "tfjs_layers_model",
			"--output_format", "keras",
			clientModels[i]+"/model.json",
			lastDir)
		stdout := &bytes.Buffer{}
		stderr := &bytes.Buffer{}
		cmd.Stdout = stdout
		cmd.Stderr = stderr
		if err := cmd.Run(); err == nil {
			log.Println("1." + strconv.Itoa(i) + " 将node模型转换成python模型")
		} else {
			log.Println(stdout.String(), stderr.String())
		}
	}

	// 2. 对模型进行聚合
	//dir, _ := filepath.Abs(filepath.Dir(os.Args[0]))
	fedavgArgs := ""
	for i := 0; i < len(clientModels); i++ {
		lastDir := tmpPath + "/" + filepath.Base(clientModels[i])
		fedavgArgs += " " + lastDir
	}
	globalModelDir := tmpPath + "/" + rand.String(20) // python版本的全局模型，所以存放在临时路径
	cmd = exec.Command("python3", "/Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/api/fedavg.py", fedavgArgs, globalModelDir)
	stdout = &bytes.Buffer{}
	stderr = &bytes.Buffer{}
	cmd.Stdout = stdout
	cmd.Stderr = stderr
	if err := cmd.Run(); err == nil {
		log.Println("2. 对模型进行聚合")
	} else {
		log.Println(stdout.String())
		log.Println(stderr.String())
	}

	//	3. 将python模型转换成node模型
	globalModelPath := "/Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/models/globalModelSameDir"
	globalModelPath += "/" + filepath.Base(globalModelDir)
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
	}

	// 4. 计算模型准确率
	cmd = exec.Command("node", "/Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/api/predict.js")
	stdout = &bytes.Buffer{}
	stderr = &bytes.Buffer{}
	cmd.Stdout = stdout
	cmd.Stderr = stderr
	if err := cmd.Run(); err == nil {
		log.Println("4. 计算模型准确率")
		log.Println(stdout.String(), stderr.String())
	} else {
		log.Println(stdout.String(), stderr.String())
	}
}
