/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/25
**/
package model

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"goskeleton/app/global/variable"
	"goskeleton/app/model"
	"goskeleton/app/utils/data_bind"
	"strconv"
)

func CreatClientModelFactory(sqlType string) *ClientModel {
	return &ClientModel{BaseModel: model.BaseModel{DB: model.UseDbConn(sqlType)}}
}

type ClientModel struct {
	model.BaseModel
	Id            string `json:"id"`
	GlobalModelId string `json:"globalModelId" gorm:"column:global_model_id"`
	TaskId        string `json:"taskId" gorm:"column:task_id"`
	File          string `json:"file" gorm:"file"`
}

func (c *ClientModel) TableName() string {
	return "tb_client_model"
}

func (cm *ClientModel) InsertData(c *gin.Context) *ClientModel {
	var tmp ClientModel
	if err := data_bind.ShouldBindFormDataToModel(c, &tmp); err == nil {
		tmp.Id = strconv.FormatInt(variable.SnowFlake.GetId(), 10)
		if res := cm.Create(&tmp); res.Error == nil {
			return &tmp
		} else {
			variable.ZapLog.Error("ClientModel 数据库创建失败", zap.Error(res.Error))
			return nil
		}
	} else {
		variable.ZapLog.Error("ClientModel 数据绑定失败", zap.Error(err))
		return nil
	}
}
