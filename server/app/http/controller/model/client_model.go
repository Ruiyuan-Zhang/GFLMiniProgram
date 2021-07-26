/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/26
**/
package model

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/service/model/curd"
	"goskeleton/app/utils/response"
)

type ClientModel struct {
}

func (cm *ClientModel) Add(c *gin.Context) {
	if err := (&curd.ClientModelCurd{}).InsertData(c); err == nil {
		response.Success(c, consts.CurdStatusOkMsg, "")
	} else {
		response.Fail(c, consts.CurdCreatFailCode, consts.CurdCreatFailMsg, "")
	}
}
