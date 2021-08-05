/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/8/5
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

type Select struct {
	common_data_type.Page
	Kind       string `json:"kind" form:"kind"`
	CategoryId string `json:"categoryId" form:"categoryId"`
	Keyword    string `json:"keyword" form:"keyword"`
}

func (s Select) CheckParams(c *gin.Context) {
	if err := c.ShouldBind(&s); err != nil {
		errs := gin.H{
			"tips": "task Select 参数校验失败，参数不符合规定",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}
	if ec := data_transfer.DataAddContext(s, consts.ValidatorPrefix, c); ec == nil {
		response.ErrorSystem(c, "task Select 表单验证器json化失败", "")
	} else {
		(&task.Task{}).Select(ec)
	}
}
