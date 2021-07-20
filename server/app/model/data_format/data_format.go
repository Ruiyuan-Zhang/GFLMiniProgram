/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/20
**/
package data_format

import (
	"errors"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"goskeleton/app/global/variable"
	"goskeleton/app/model"
	"goskeleton/app/utils/data_bind"
	"strconv"
)

func CreatCategoryFactory(sqlType string) *DataFormatModel  {
	return &DataFormatModel{BaseModel:model.BaseModel{DB:model.UseDbConn(sqlType)}}
}

type DataFormatModel struct {
	model.BaseModel
	Id string `json:"id"`
	TaskId string `json:"task_id"`
	Type string `json:"type"`
	Name string `json:"name"`
	Size string `json:"size"`
}

func (d *DataFormatModel)TableName() string {
	return "tb_data_format"
}

func (d* DataFormatModel)Add(l int,c *gin.Context) error {
	ds := make([]DataFormatModel, l, 2*l)
	for i:=0;i<l;i++{
		if err := data_bind.ShouldBindFormDataArrayToModel(i, c, &ds[i]); err == nil{
			ds[i].Id = strconv.FormatInt(variable.SnowFlake.GetId(),10)
		}else{
			variable.ZapLog.Error("DataFormatModel 数据绑定出错", zap.Error(err))
			return errors.New("数据绑定错误")
		}
	}

	if res:= d.CreateInBatches(&ds,len(ds));res.Error == nil{
		return nil
	}else{
		variable.ZapLog.Error("DataForatModel 数据新增出错", zap.Error(res.Error))
		return errors.New("DataForatModel 数据新增出错")
	}
}