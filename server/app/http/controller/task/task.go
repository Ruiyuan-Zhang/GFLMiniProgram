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

	//"goskeleton/app/model/task"
	"goskeleton/app/utils/response"
)

type Task struct {

}

// 添加一个任务
func (t * Task) Add(context *gin.Context){

	d,tmp :=task.CreatTaskFactory("").InsertData(context)
	if d {
		//json,_ := json.Marshal(tmp)string(json)
		response.Success(context, consts.CurdStatusOkMsg,tmp )
	}else{
		response.Fail(context, consts.CurdCreatFailCode, consts.CurdCreatFailMsg, tmp)
	}
}

// 获取任务列表
func (t * Task) List(context *gin.Context){
	var limit = context.GetFloat64(consts.ValidatorPrefix + "limit")
	var limitStart = (context.GetFloat64(consts.ValidatorPrefix+"page") - 1) * limit
	list := task.CreatTaskFactory("").List(int(limitStart),int(limit))
	if list != nil{
		response.Success(context,consts.CurdStatusOkMsg,gin.H{
			"list":list,
		})
	}else {
		response.Fail(context,consts.CurdSelectFailCode, consts.CurdSelectFailMsg,"")
	}
}