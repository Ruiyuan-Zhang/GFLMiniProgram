/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/19
**/
package task

type BaseField struct {
	Id                string  `json:"id" form:"id"`
	CategoryId        string  `json:"categoryId" form:"categoryId" binding:"required"`
	Name              string `json:"name" form:"name" binding:"required,min=1"`
	Description       string `json:"description" form:"description" binding:"required"`
	File              string `json:"file" form:"file" binding:"required"`
	InitModelFile     string `json:"initModelFile" form:"initModelFile" binding:"required"`
	SuperParams       string `json:"superParams" form:"superParams" binding:"required"`
	MaxTimesPerClient int32  `json:"maxTimesPerClient" form:"maxTimesPerClient" binding:"required,min=1"`
}
