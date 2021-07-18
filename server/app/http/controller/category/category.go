/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/18
**/
package category

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/global/variable"
	"goskeleton/app/model/category"
	"goskeleton/app/utils/response"
)

type Category struct {
	Id           uint          `json:"id"`
	Name         string        `json:"name"`
	Description  string        `json:"description"`
	File         string        `json:"file"`
}

// 添加一项
func (c *Category) AddCategory(context *gin.Context) {
	c.Id = uint(variable.SnowFlake.GetId())
	response.Success(context, "验信息", c)
}

// 获取分类列表
func (c *Category) List(context *gin.Context)  {
	var limit = context.GetFloat64(consts.ValidatorPrefix + "limit")
	var limitStart = (context.GetFloat64(consts.ValidatorPrefix+"page") - 1) * limit
	fmt.Println(limit,limitStart)
	list := category.CreatCategoryFactory("").List(int(limitStart),int(limit))
	if list != nil{
		response.Success(context, consts.CurdStatusOkMsg, gin.H{
			"list": list,
		})
	}else {
		response.Fail(context,consts.CurdSelectFailCode, consts.CurdSelectFailMsg,"")
	}
}