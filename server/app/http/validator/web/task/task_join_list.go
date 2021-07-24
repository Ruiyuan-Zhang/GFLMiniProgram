/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/24
**/
package task

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/http/controller/task"
	common_data_type "goskeleton/app/http/validator/common/data_type"
	"goskeleton/app/http/validator/core/data_transfer"
	"goskeleton/app/utils/response"
)

type TaskJoinList struct {
	common_data_type.Page
	UserName string `json:"userName" form:"userName" binding:"required"`
}

func (t TaskJoinList) CheckParams(c *gin.Context) {
	if err := c.ShouldBind(&t); err != nil {
		errs := gin.H{
			"tips": "TaskJoinList 参数校验失败，参数不符合规定，page的值(>0)、limit的值(>0)、userName必传",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}
	if ec := data_transfer.DataAddContext(t, consts.ValidatorPrefix, c); ec == nil {
		response.ErrorSystem(c, "task list 表单验证器json化失败", "")
	} else {
		(&task.Task{}).TaskJoinList(ec)
	}
}
