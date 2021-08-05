/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/25
**/
package model

import (
	"encoding/json"
	"errors"
	"github.com/gin-gonic/gin"
	"github.com/qifengzhang007/sql_res_to_tree"
	"go.uber.org/zap"
	"goskeleton/app/global/consts"
	"goskeleton/app/global/variable"
	"goskeleton/app/model"
	"strconv"
	"time"
)

func CreatGlobalFactory(sqlType string) *GlobalModel {
	return &GlobalModel{BaseModel: model.BaseModel{DB: model.UseDbConn(sqlType)}}
}

type GlobalModel struct {
	model.BaseModel
	// 这个id已经相当于globalModelId了
	Id                string `json:"id"`
	LastGlobalModel   string `json:"lastGlobalModel" gorm:"column:last_global_model"`
	TaskId            string `json:"taskId" gorm:"column:task_id"`
	File              string `json:"file" gorm:"file"`
	Time              string `json:"time" gorm:"column:time"`
	Acc               string `json:"acc" gorm:"column:acc"`
	TestData          string `json:"testData" gorm:"column:test_data"`
	ClientModelIds    string `json:"clientModelIds" gorm:"column:client_model_ids"`
	FedAvgWithClients string `json:"fedAvgWithClients" gorm:"column:fed_avg_with_clients"`
}

func (g *GlobalModel) TableName() string {
	return "tb_global_model"
}

/**
第一次插入数据时，last_global_model等于task_id的值，可以用这个特性找到第一个全局模型
*/
func (g *GlobalModel) Add(lastGlobalModel, taskId, file, testData, acc, time, fedClients string) error {
	sql := `insert into tb_global_model (id,last_global_model,task_id,file,test_data,acc,time,fed_avg_with_clients) values (?,?,?,?,?,?,?,?)`
	id := strconv.FormatInt(variable.SnowFlake.GetId(), 10)
	if res := g.Exec(sql, id, lastGlobalModel, taskId, file, testData, acc, time, fedClients); res.Error == nil {
		return nil
	} else {
		variable.ZapLog.Error("GlobalModel 数据插入出错", zap.Error(res.Error))
		return errors.New("GlobalModel 数据插入出错")
	}
}

/**
获取一个GlobalModel信息
*/
func (g *GlobalModel) GetOne(id string) *GlobalModel {
	sql := `select * from tb_global_model where id = ?`
	var gm GlobalModel
	if res := g.Exec(sql, id).First(&gm); res.Error == nil {
		return &gm
	} else {
		variable.ZapLog.Error("GetOne 查询失败 没有找到该GlobalModel", zap.Error(res.Error))
		return nil
	}
}

/**
更新clientModels
*/
func (g *GlobalModel) UpdateClientModels(id, clientModelIds string) error {
	sql := `update tb_global_model set client_model_ids = ? where id = ?`
	if res := g.Exec(sql, clientModelIds, id); res.RowsAffected > 0 {
		return nil
	} else {
		variable.ZapLog.Error("UpdateClientModels 更新失败 没有任何globalModel受到影响")
		return errors.New("")
	}
}

/**
添加一个全局模型
*/
func (g *GlobalModel) insertData(c *gin.Context) error {
	return nil
}

/**
获取某个任务下的所有GlobalModelList已经他们的clientModel，
这里是一个必须要使用左连接的案例
*/
func (g *GlobalModel) ListWithClient(taskId string, limitStart, limit int) *[]GlobalModelView {
	sql := `
		select 
			g.*, g.id as id_str,
			c.global_model_id as c_global_model_id, 
			c.id as c_id, c.id as c_id_str,
			c.user_name as c_user_name, 
			c.task_id as c_task_id, 
			c.file as c_file, c.time as c_time,
			c.created_at as c_created_at 
		from 
			tb_global_model as g left outer join tb_client_model as c on (g.id = c.global_model_id)
		where 
			g.task_id = ?  
		limit ?, ?
 	`
	var gcs []GlobalModelWithClientsList
	if res := g.Raw(sql, taskId, limitStart, limit).Find(&gcs); res.Error == nil {
		var gs = make([]GlobalModelView, 0)
		if err := sql_res_to_tree.CreateSqlResFormatFactory().ScanToTreeData(gcs, &gs); err == nil {
			println(len(gs))
			return &gs
		} else {
			variable.ZapLog.Error("DetailWithClient 属性化出错" + err.Error())
			return nil
		}

	} else {
		variable.ZapLog.Error("DetailWithClient 查询出错", zap.Error(res.Error))
		return nil
	}
}

func (g *GlobalModel) List(taskId string, limitStart, limit int) []GlobalModelView {
	sql := `select *, g.id as id_str from tb_global_model as g where task_id = ? limit ?, ?`
	var gms []GlobalModelView
	if res := g.Raw(sql, taskId, limitStart, limit).Find(&gms); res.Error == nil {
		return gms
	} else {
		variable.ZapLog.Error("GlobalModel List 查询出错", zap.Error(res.Error))
		return nil
	}
}

/**
使用FedAvg算法进行聚合。

需要传递的参数是：
testData: '/testD',
globalModel:{
	id: '898989878',file:'/models/globalModelSameDir/h3L59ZGldUa745RyOLwx/model.json'
},
clients:[
	{id:'47987946876',file:'/models/clientModel/PAp6X0dTeF1jfHtzoNiK/model.json'},
	{id:'47987946876',file:'/models/clientModel/PAp6X0dTeF1jfHtzoNiK/model.json'},
	{id:'47987946876',file:'/models/clientModel/PAp6X0dTeF1jfHtzoNiK/model.json'},
]

处理逻辑：
	file,acc,testData = 传入客户端模型地址列表，获取新的全局模型地址
    id = snow生成
	lastGlobalModelId = globalModel.id

	在数据库添加一条该数据
*/

func (g *GlobalModel) FedAvg(c *gin.Context) error {
	// 1. 读取数据
	testData := c.GetString(consts.ValidatorPrefix + "testData")

	globalModelStr := c.GetString(consts.ValidatorPrefix + "globalModel")
	var globalModel GlobalModel
	if err := json.Unmarshal([]byte(globalModelStr), &globalModel); err != nil {
		variable.ZapLog.Error("FedAvg globalModel json解析出错", zap.Error(err))
		return err
	}

	clientModelsStr := c.GetString(consts.ValidatorPrefix + "clients")
	clientModels := []ClientModel{}
	if err := json.Unmarshal([]byte(clientModelsStr), &clientModels); err != nil {
		variable.ZapLog.Error("FedAvg clientModels json解析出错", zap.Error(err))
		return err
	}

	// 2. 处理聚合

	startTime := time.Now().UnixNano() / 1e6
	if newTestData, newGlobalModel, acc, err := (&Train{}).FedAvg(globalModel, clientModels, testData); err == nil {
		endTime := time.Now().UnixNano() / 1e6
		// 3. 新globalModel创建
		fedClients := "" // 参与聚合的模型的编号
		for i := 0; i < len(clientModels); i++ {
			fedClients += clientModels[i].Id + " "
		}
		if err := g.Add(globalModel.Id, globalModel.TaskId, newGlobalModel, newTestData, acc, strconv.FormatInt(endTime-startTime, 10), fedClients); err == nil {
			return nil
		} else {
			variable.ZapLog.Error("FedAvg globalModel 数据库添加出错", zap.Error(err))
			return err
		}
	} else {
		variable.ZapLog.Error("FedAvg globalModel 模型聚合出错", zap.Error(err))
		return err
	}
}
