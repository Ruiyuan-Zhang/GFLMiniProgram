/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/23
**/
package task

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	controller "goskeleton/app/http/controller/task"
	"goskeleton/app/http/validator/core/data_transfer"
	"goskeleton/app/utils/response"
)

type TaskUserAdd struct {
	TaskId   string `json:"taskId" form:"taskId" binding:"required"`
	TaskName string `json:"taskName" form:"taskName" binding:"required"`
	UserId   string `json:"userId" form:"userId" binding:"required"`
	UserName string `json:"userName" form:"userName" binding:"required"`
}

func (t TaskUserAdd) CheckParams(c *gin.Context) {
	if err := c.ShouldBind(&t); err != nil {
		errs := gin.H{
			"tips": "TaskUserAdd 参数校验失败，参数不符合规定, 必须上传taskId taskName userId userName",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}
	extraAddBindDataContext := data_transfer.DataAddContext(t, consts.ValidatorPrefix, c)
	if extraAddBindDataContext == nil {
		response.ErrorSystem(c, "TaskUserAdd 表单验证器json化失败", "")
	} else {
		(&controller.Task{}).TaskUserAdd(extraAddBindDataContext)
	}
}
