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

type TaskUserHave struct {
	TaskId   string `json:"taskId" form:"taskId" binding:"required"`
	UserName string `json:"userName" form:"userName" binding:"required"`
}

func (t TaskUserHave) CheckParams(c *gin.Context) {
	if err := c.ShouldBind(&t); err != nil {
		errs := gin.H{
			"tips": "TaskUserHave 参数校验失败，参数不符合规定, 必须上传taskId userName",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}
	extraAddBindDataContext := data_transfer.DataAddContext(t, consts.ValidatorPrefix, c)
	if extraAddBindDataContext == nil {
		response.ErrorSystem(c, "TaskUserHave 表单验证器json化失败", "")
	} else {
		(&controller.Task{}).TaskUserHave(extraAddBindDataContext)
	}
}
