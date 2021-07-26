/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/20
**/
package data_format

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	controller "goskeleton/app/http/controller/data_format"
	"goskeleton/app/http/validator/core/data_transfer"
	"goskeleton/app/utils/response"
)

type Add struct {
	BaseField
}

func (a Add) CheckParams(c *gin.Context) {
	var as []Add
	if err := c.ShouldBind(&as); err != nil {
		errs := gin.H{
			"tips": "DataFormatAdd参数校验失败，参数不符合规定",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}

	var extraAddBindDataContext *gin.Context
	for i := 0; i < len(as); i++ {
		extraAddBindDataContext = data_transfer.DataArrayAddContext(i, as[i], consts.ValidatorPrefix, c)
		if extraAddBindDataContext == nil {
			response.ErrorSystem(c, "TaskAdd表单验证器json化失败", as[i])
		}
	}

	(&controller.DataFormat{}).Add(len(as), extraAddBindDataContext)
}
