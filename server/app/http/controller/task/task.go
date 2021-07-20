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

	//Name string `json:"name"`
	//Description string `json:"description"`
	//File string `json:"file"`
	//iniModelFile string `json:"iniModelFile"`
	//superParams string `json:"superParams"`
	//maxTimesPerClient int64 `json:"maxTimesPerClient"`
	d,tmp :=task.CreatTaskFactory("").InsertData(context)
	if d {
		//json,_ := json.Marshal(tmp)string(json)
		response.Success(context, consts.CurdStatusOkMsg,tmp )
	}else{
		response.Fail(context, consts.CurdCreatFailCode, consts.CurdCreatFailMsg, tmp)
	}
}

// 获取任务列表 (未完成)
func (t * Task) List(context *gin.Context){
	response.Success(context, consts.CurdStatusOkMsg, "")
}
