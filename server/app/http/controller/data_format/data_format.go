/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/20
**/
package data_format

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/model/data_format"
	"goskeleton/app/utils/response"
)

type DataFormat struct {
	Id string `json:"id"`
	TaskId string `json:"task_id"`
	Type string `json:"type"`
	Name string `json:"name"`
	Size string `json:"size"`
}

func(d * DataFormat) Add (l int,c *gin.Context){
	if err := data_format.CreatCategoryFactory("").Add(l,c); err == nil{
		response.Success(c, consts.CurdStatusOkMsg, "")
	}else {
		response.Fail(c, consts.CurdSelectFailCode, consts.CurdCreatFailMsg,"")
	}
}