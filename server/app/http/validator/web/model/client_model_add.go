/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/26
**/
package model

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/http/validator/core/data_transfer"
	"goskeleton/app/utils/response"
)

type ClientModelAdd struct {
	ClientModelBaseField
}

func (cm ClientModelAdd) CheckParams(c *gin.Context) {
	if err := c.ShouldBind(&cm); err != nil {
		errs := gin.H{
			"tips": "ClientModelAdd 参数校验失败",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}

	if ec := data_transfer.DataAddContext(cm, consts.ValidatorPrefix, c); ec == nil {
		response.ErrorSystem(c, "ClientModelAdd 表单验证器json化失败", "")
		return
	}
}
