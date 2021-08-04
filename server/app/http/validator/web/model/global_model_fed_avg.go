/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/8/3
**/
package model

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/http/controller/model"
	"goskeleton/app/http/validator/core/data_transfer"
	"goskeleton/app/utils/response"
)

type FedAvg struct {
	TestData    string `json:"testData" form:"testData" binding:"required"`
	GlobalModel string `json:"globalModel" form:"globalModel" binding:"required"`
	Clients     string `json:"clients" form:"clients" binding:"required"`
}

func (f FedAvg) CheckParams(c *gin.Context) {
	if err := c.ShouldBind(&f); err != nil {
		errs := gin.H{
			"tips": "FedAvg 参数校验失败",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}
	if ec := data_transfer.DataAddContext(f, consts.ValidatorPrefix, c); ec == nil {
		response.ErrorSystem(c, "FedAvg 表单验证器json化失败", "")
		return
	} else {
		(&model.GlobalModel{}).FedAvg(ec)
	}
}
