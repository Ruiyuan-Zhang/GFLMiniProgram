/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/26
**/
package curd

import (
	"github.com/gin-gonic/gin"
	model2 "goskeleton/app/model/model"
	"goskeleton/app/model/task"
)

type TaskCurd struct {
}

func (t *TaskCurd) Add(c *gin.Context) *task.TaskModel {
	// 1. 插入任务对象
	if tmp := task.CreatTaskFactory("").InsertData(c); tmp != nil {
		// 2. 插入全局模型对象 首次插入时，上一个globalModel编号为taskId
		if e := model2.CreatCategoryFactory("").Add(tmp.Id, tmp.Id, tmp.File); e == nil {
			return tmp
		} else {
			return nil
		}
	} else {
		return nil
	}
}
