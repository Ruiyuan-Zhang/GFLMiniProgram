/**
 * @note: 添加任务信息验证器
 * @author: zhangruiyuan
 * @date:2021/7/19
**/
package task

import (
	"github.com/gin-gonic/gin"
	"goskeleton/app/global/consts"
	controller "goskeleton/app/http/controller/task"
	"goskeleton/app/http/validator/core/data_transfer"
	"goskeleton/app/utils/response"
)

type Add struct {
	BaseField
}

// 验证器验证
// 特别注意: 表单参数验证器结构体的函数，绝对不能绑定在指针上
// 我们这部分代码项目启动后会加载到容器，如果绑定在指针，一次请求之后，会造成容器中的代码段被污染
func (t Add) CheckParams (c * gin.Context){
	//1.先按照验证器提供的基本语法，基本可以校验90%以上的不合格参数
	if err := c.ShouldBind(&t); err != nil {
		errs := gin.H{
			"tips": "TaskAdd参数校验失败，参数不符合规定，name 长度(>=1)、maxTimesPerClient 长度（）、不允许添加",
			"err":  err.Error(),
		}
		response.ErrorParam(c, errs)
		return
	}
	//2.继续验证具有中国特色的参数，例如 身份证号码等，基本语法校验了长度18位，然后可以自行编写正则表达式等更进一步验证每一部分组成
	// r.CardNo  获取值继续校验，这里省略.....

	//  该函数主要是将本结构体的字段（成员）按照 consts.ValidatorPrefix+ json标签对应的 键 => 值 形式绑定在上下文，便于下一步（控制器）可以直接通过 context.Get(键) 获取相关值
	extraAddBindDataContext := data_transfer.DataAddContext(t, consts.ValidatorPrefix, c)
	if extraAddBindDataContext == nil {
		response.ErrorSystem(c, "TaskAdd表单验证器json化失败", "")
	} else {
		(&controller.Task{}).Add(extraAddBindDataContext)
	}
}
