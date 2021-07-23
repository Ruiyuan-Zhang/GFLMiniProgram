/**
 * @note: 任务详情查询验证器
 * @author: zhangruiyuan
 * @date:2021/7/22
**/
package task

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	controller "goskeleton/app/http/controller/task"
	"goskeleton/app/http/validator/core/data_transfer"
	"goskeleton/app/utils/response"
)

type Detail struct {
	Id  string  `json:"id" form:"id" binding:"required"`
}

func (t Detail) CheckParams (c * gin.Context){
	//1.先按照验证器提供的基本语法，基本可以校验90%以上的不合格参数
	if err := c.ShouldBind(&t); err != nil {
		errs := gin.H{
			"tips": "TaskDetail参数校验失败，参数不符合规定, 必须上传id",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}
	extraAddBindDataContext := data_transfer.DataAddContext(t, consts.ValidatorPrefix, c)
	if extraAddBindDataContext == nil {
		response.ErrorSystem(c, "TaskDetail 表单验证器json化失败", "")
	} else {
		(&controller.Task{}).Detail(extraAddBindDataContext)
	}
}
