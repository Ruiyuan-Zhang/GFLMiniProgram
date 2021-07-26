/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/25
**/
package model

import (
	"errors"
	"github.com/qifengzhang007/sql_res_to_tree"
	"go.uber.org/zap"
	"goskeleton/app/global/variable"
	"goskeleton/app/model"
	"strconv"
)

func CreatCategoryFactory(sqlType string) *GlobalModel {
	return &GlobalModel{BaseModel: model.BaseModel{DB: model.UseDbConn(sqlType)}}
}

type GlobalModel struct {
	model.BaseModel
	// 这个id已经相当于globalModelId了
	Id              string `json:"id"`
	LastGlobalModel string `json:"lastGlobalModel" gorm:"column:last_global_model"`
	TaskId          string `json:"taskId" gorm:"column:task_id"`
	File            string `json:"file" gorm:"file"`
	ClientModelIds  string `json:"clientModelIds" gorm:"column:client_model_ids"`
}

func (g *GlobalModel) TableName() string {
	return "tb_global_model"
}

func (g *GlobalModel) Add(lastGlobalModel, taskId, file string) error {
	sql := `insert into tb_global_model (id,last_global_model,task_id,file) values (?,?,?,?)`
	id := strconv.FormatInt(variable.SnowFlake.GetId(), 10)
	if res := g.Exec(sql, id, lastGlobalModel, taskId, file); res.Error == nil {
		return nil
	} else {
		variable.ZapLog.Error("GlobalModel 数据插入出错", zap.Error(res.Error))
		return errors.New("GlobalModel 数据插入出错")
	}
}

func (g *GlobalModel) DetailWithClient(taskId string) (*GlobalModelView, error) {
	sql := `
		select g.*, c.global_model_id as c_global_model_id, c.id as c_id, c.task_id as c_task_id,  c.user_id as c_user_id, c.file as c_file, c.created_at as c_created_at 
		from tb_global_model as g, tb_client_model as c
		where g.id = c.global_model_id and g.task_id = ? 
 	`
	var gcs []GlobalClient
	if res := g.Raw(sql, taskId).Find(&gcs); res.Error == nil {
		var gs = make([]GlobalModelView, 0)
		if err := sql_res_to_tree.CreateSqlResFormatFactory().ScanToTreeData(gcs, &gs); err == nil {
			return &gs[0], nil
		} else {
			variable.ZapLog.Error("DetailWithClient 属性化出错" + err.Error())
			return nil, err
		}

	} else {
		variable.ZapLog.Error("DetailWithClient 查询出错", zap.Error(res.Error))
		return nil, errors.New("DetailWithClient 查询出错")
	}
}
