/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/19
**/
package task

import (
	"errors"
	"github.com/gin-gonic/gin"
	"github.com/qifengzhang007/sql_res_to_tree"
	"go.uber.org/zap"
	"goskeleton/app/global/variable"
	"goskeleton/app/model"
	"goskeleton/app/utils/data_bind"
	"strconv"
)

func CreatTaskFactory(sqlType string) *TaskModel {
	return &TaskModel{BaseModel: model.BaseModel{DB: model.UseDbConn(sqlType)}}
}

// 我在这里犯了一个错误，在struct中的属性，严格区分首字母大小写，大写为公有属性，外面可以访问到，小写为私有，外面访问不到。
type TaskModel struct {
	model.BaseModel
	Id                string `json:"id"`
	CategoryId        string `json:"categoryId"`
	Name              string `json:"name"`
	Description       string `json:"description"`
	File              string `json:"file"`
	InitModelFile     string `json:"initModelFile"`
	SuperParams       string `json:"superParams"`
	MaxTimesPerClient int32  `json:"maxTimesPerClient"`
}

// 表名
func (c *TaskModel) TableName() string {
	return "tb_task"
}

// 新增一项任务
func (t *TaskModel) InsertData(c *gin.Context) *TaskModel {
	var tmp TaskModel
	if err := data_bind.ShouldBindFormDataToModel(c, &tmp); err == nil {
		tmp.Id = strconv.FormatInt(variable.SnowFlake.GetId(), 10) // 后面的10表示10进制
		if res := t.Create(&tmp); res.Error == nil {
			return &tmp
		} else {
			variable.ZapLog.Error("TaskModel 数据新增出错", zap.Error(res.Error))
			return nil
		}
	} else {
		variable.ZapLog.Error("TaskModel 数据绑定出错", zap.Error(err))
		return nil
	}

}

// 查询任务列表
func (c *TaskModel) List(limitStart, limit int) (list []TaskModelView) {
	sql := `
		SELECT  c.name as category_name, t.*
		FROM tb_task as t, tb_category as c where t.category_id =c.id LIMIT ?, ?;
	`
	if res := c.Raw(sql, limitStart, limit).Find(&list); res.Error != nil {
		variable.ZapLog.Error("TaskModel 查询出错", zap.Error(res.Error))
	}
	return
}

// 任务详情信息查询
func (t *TaskModel) Detail(id string) (tv TaskModelView, err error) {
	sql := `
		SELECT  c.name as category_name, t.*
		FROM tb_task as t, tb_category as c where t.category_id =c.id and t.id = ?;
	`
	if res := t.Raw(sql, id).Take(&tv); res.Error != nil {
		variable.ZapLog.Error("TaskModel 查询出错", zap.Error(res.Error))
		err = errors.New("")
	}
	return
}

// 任务详情信息查询 包含format信息
func (t *TaskModel) DetailWithFormat(id string) (TaskModelViewWithDataFormat, error) {
	sql := `
		SELECT  c.name as category_name, t.*, 
		d.id as data_format_id, d.type as data_format_type, d.name as data_format_name, 
		d.size as data_format_size, d.task_id as data_format_task_id,
		d.english_name as data_format_english_name,
		d.tips as data_format_tips
		FROM tb_task as t, tb_category as c,tb_data_format as d 
		where t.category_id =c.id and t.id=d.task_id and t.id = ?;
	`
	var tvdl []TaskModelViewWithDataFormatList
	if res := t.Raw(sql, id).Find(&tvdl); res.Error == nil {
		var tvd = make([]TaskModelViewWithDataFormat, 0)
		if err := sql_res_to_tree.CreateSqlResFormatFactory().ScanToTreeData(tvdl, &tvd); err == nil {
			for i := 0; i < len(tvd); i++ {
				tvd[i].IdStr = strconv.FormatInt(tvd[i].Id, 10)
				for j := 0; j < len(tvd[i].Children); j++ {
					tvd[i].Children[j].DataFormatIdStr = strconv.FormatInt(tvd[i].Children[j].DataFormatId, 10)
				}
			}
			return tvd[0], nil
		} else {
			variable.ZapLog.Error("TaskModel 属性化出错" + err.Error())
			return TaskModelViewWithDataFormat{}, errors.New("未查询到该任务")
		}

	} else {
		variable.ZapLog.Error("DetailWithFormat 查询出错", zap.Error(res.Error))
		return TaskModelViewWithDataFormat{}, errors.New("")
	}
}
