/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/23
**/
package task

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/model/task"
	"goskeleton/app/utils/response"
)

func (t *Task) TaskUserAdd(c *gin.Context) {
	if err := task.CreatTaskUserFactory("").Add(c); err == nil {
		response.Success(c, consts.CurdStatusOkMsg, "")
	} else {
		response.Fail(c, consts.CurdCreatFailCode, consts.CurdCreatFailMsg, "")
	}
}

func (t *Task) TaskUserHave(c *gin.Context) {
	user_name := c.GetString(consts.ValidatorPrefix + "userName")
	task_id := c.GetString(consts.ValidatorPrefix + "taskId")
	if taskUser := task.CreatTaskUserFactory("").Have(user_name, task_id); taskUser != nil {
		response.Success(c, consts.CurdStatusOkMsg, gin.H{"data": taskUser})
	} else {
		response.Fail(c, consts.CurdSelectFailCode, consts.CurdSelectFailMsg, "")
	}
}
