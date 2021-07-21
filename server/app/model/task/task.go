/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/19
**/
package task

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"goskeleton/app/global/variable"
	"goskeleton/app/model"
	"goskeleton/app/utils/data_bind"
	"strconv"
)

func CreatTaskFactory(sqlType string) * TaskModel{
	return &TaskModel{BaseModel: model.BaseModel{DB: model.UseDbConn(sqlType)}}
}

// 我在这里犯了一个错误，在struct中的属性，严格区分首字母大小写，大写为公有属性，外面可以访问到，小写为私有，外面访问不到。
type TaskModel struct {
	model.BaseModel
	Id string `json:"id"`
	CategoryId  string `json:"categoryId"`
	Name string `json:"name"`
	Description string `json:"description"`
	File string `json:"file"`
	InitModelFile string `json:"initModelFile"`
	SuperParams string `json:"superParams"`
	MaxTimesPerClient int32 `json:"maxTimesPerClient"`
}

// 表名
func (c *TaskModel) TableName() string {
	return "tb_task"
}

// 新增一项任务
func (t *TaskModel) InsertData(c *gin.Context) (bool, TaskModel) {
	var tmp TaskModel
	if err := data_bind.ShouldBindFormDataToModel(c, &tmp); err == nil {
		tmp.Id = strconv.FormatInt(variable.SnowFlake.GetId(),10)  // 后面的10表示10进制
		if res := t.Create(&tmp); res.Error == nil {
			return true, tmp
		} else {
			variable.ZapLog.Error("TaskModel 数据新增出错", zap.Error(res.Error))
		}

	} else {
		variable.ZapLog.Error("TaskModel 数据绑定出错", zap.Error(err))
	}
	return false,tmp
}

// 查询任务列表
func (c *TaskModel) List(limitStart,limit int) (list []TaskModelView) {
	sql := `
		SELECT  c.name as category_name, t.*
		FROM tb_task as t, tb_category as c where t.category_id =c.id LIMIT ?, ?;
	`
	if res := c.Raw(sql, limitStart, limit).Find(&list); res.Error != nil{
		variable.ZapLog.Error("TaskModel 查询出错", zap.Error(res.Error))
	}
	return
}
