/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/19
**/
package task

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/model/task"
	"goskeleton/app/service/task/curd"

	//"goskeleton/app/model/task"
	"goskeleton/app/utils/response"
)

type Task struct {
}

// 添加一个任务
func (t *Task) Add(context *gin.Context) {
	if tmp := (&curd.TaskCurd{}).Add(context); tmp != nil {
		response.Success(context, consts.CurdStatusOkMsg, tmp)
	} else {
		response.Fail(context, consts.CurdCreatFailCode, consts.CurdCreatFailMsg, tmp)
	}
}

// 获取任务列表
func (t *Task) List(context *gin.Context) {
	var limit = context.GetFloat64(consts.ValidatorPrefix + "limit")
	var limitStart = (context.GetFloat64(consts.ValidatorPrefix+"page") - 1) * limit
	list := task.CreatTaskFactory("").List(int(limitStart), int(limit))
	if list != nil {
		response.Success(context, consts.CurdStatusOkMsg, gin.H{
			"list": list,
		})
	} else {
		response.Fail(context, consts.CurdSelectFailCode, consts.CurdSelectFailMsg, "")
	}
}

// 查询任务
func (t *Task) Select(context *gin.Context) {
	var limit = context.GetFloat64(consts.ValidatorPrefix + "limit")
	var limitStart = (context.GetFloat64(consts.ValidatorPrefix+"page") - 1) * limit
	var kind = context.GetString(consts.ValidatorPrefix + "kind")
	var categoryId = context.GetString(consts.ValidatorPrefix + "categoryId")
	var keyword = context.GetString(consts.ValidatorPrefix + "keyword")
	list := task.CreatTaskFactory("").Select(int(limitStart), int(limit), kind, categoryId, keyword)
	if list != nil {
		response.Success(context, consts.CurdStatusOkMsg, gin.H{
			"list": list,
		})
	} else {
		response.Fail(context, consts.CurdSelectFailCode, consts.CurdSelectFailMsg, "")
	}
}

// 获取任务详情信息
func (t *Task) Detail(context *gin.Context) {
	var id = context.GetString(consts.ValidatorPrefix + "id")
	if d, err := task.CreatTaskFactory("").Detail(id); err == nil {
		response.Success(context, consts.CurdStatusOkMsg, gin.H{"data": d})
	} else {
		response.Fail(context, consts.CurdSelectFailCode, consts.CurdSelectFailMsg, "查询不到该任务")
	}
}

// 获取任务详情信息 包含数据格式
func (t *Task) DetailWithFormat(context *gin.Context) {
	var id = context.GetString(consts.ValidatorPrefix + "id")
	if d, err := task.CreatTaskFactory("").DetailWithFormat(id); err == nil {
		response.Success(context, consts.CurdStatusOkMsg, gin.H{"data": d})
	} else {
		response.Fail(context, consts.CurdSelectFailCode, consts.CurdSelectFailMsg, "查询不到该任务")
	}
}
