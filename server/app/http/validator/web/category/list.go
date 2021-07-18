/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/18
**/
package category


import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	"goskeleton/app/http/controller/category"
	"goskeleton/app/http/validator/core/data_transfer"
	"goskeleton/app/http/validator/web/auth/common_data_type"
	"goskeleton/app/utils/response"
)

type List struct {
	common_data_type.Page
}

// 验证器语法
func (l List) CheckParams(context *gin.Context)  {
	// 1. 基本的验证规则
	if err := context.ShouldBind(&l); err!=nil{
		errs := gin.H{
			"tips": "category 参数校验失败，参数不符合规定，page的值(>0)、limits的值(>0)",
			"err": err.Error(),
		}
		response.ErrorParam(context,errs)
		return
	}

	// 该函数的主要作用是将本结构体的字段（成员）按照consts.ValidatorPrefix + json 标签对应的 键 => 值 形式直接传递给下一步 （控制器）
	extraAddBindDataContext := data_transfer.DataAddContext(l,consts.ValidatorPrefix,context)
	if extraAddBindDataContext == nil {
		response.ErrorSystem(context, "category 表单验证器json化失败", "")
	} else {
		//验证完成，调用控制器，并将验证器成员（字段）递给控制器，保持上下文数据一致性
		(&category.Category{}).List(extraAddBindDataContext)
	}
}
