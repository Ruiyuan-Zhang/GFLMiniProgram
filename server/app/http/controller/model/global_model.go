/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/28
**/
package model

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/model/model"
	"goskeleton/app/utils/response"
)

type GlobalModel struct {
}

func (g *GlobalModel) List(c *gin.Context) {
	var taskId = c.GetString(consts.ValidatorPrefix + "taskId")
	var limit = c.GetFloat64(consts.ValidatorPrefix + "limit")
	var limitStart = (c.GetFloat64(consts.ValidatorPrefix+"page") - 1) * limit
	if list := model.CreatGlobalFactory("").List(taskId, int(limitStart), int(limit)); list != nil {
		response.Success(c, consts.CurdStatusOkMsg, gin.H{
			"list": list,
		})
	} else {
		response.Fail(c, consts.CurdSelectFailCode, consts.CurdSelectFailMsg, "")
	}
}
