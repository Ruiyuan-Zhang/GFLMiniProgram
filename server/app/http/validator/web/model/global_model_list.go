/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/28
**/
package model

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/http/controller/model"
	"goskeleton/app/http/validator/core/data_transfer"
	"goskeleton/app/http/validator/web/auth/common_data_type"
	"goskeleton/app/utils/response"
)

type GlobalModelList struct {
	TaskId string `json:"taskId" form:"taskId"`
	common_data_type.Page
}

func (g GlobalModelList) CheckParams(c *gin.Context) {
	if err := c.ShouldBind(&g); err != nil {
		errs := gin.H{
			"tips": "GlobalModelList 参数校验失败",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}
	if ec := data_transfer.DataAddContext(g, consts.ValidatorPrefix, c); ec == nil {
		response.ErrorSystem(c, "GlobalModelList 表单验证器json化失败", "")
		return
	} else {
		(&model.GlobalModel{}).List(ec)
	}
}
