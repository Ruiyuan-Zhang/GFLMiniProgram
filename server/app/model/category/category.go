/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/18
**/
package model

import (
"go.uber.org/zap"
"goskeleton/app/global/variable"
)

func CreatCategoryFactory(sqlType string) * CategoryModel {
	return &CategoryModel{BaseModel:BaseModel{DB:UseDbConn(sqlType)}}
}

type CategoryModel struct {
	BaseModel
	Id  uint `json:"id"`
	Name string `json:"name"`
	Description string `json:"description"`
	File string `json:"file"`
}

// 表名
func (c * CategoryModel) TableName() string {
	return "tb_category"
}


// 查询列表
func (c * CategoryModel) List(limitStart,limit int) (list []CategoryView) {

	sql := `
		select * from tb_category limit ? , ?;
	`
	if res := c.Raw(sql, limitStart, limit).Find(&list); res.Error != nil{
		variable.ZapLog.Error("CategoryModel 查询出错", zap.Error(res.Error))
	}
	return
}
