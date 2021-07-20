/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/20
**/
package data_format

type BaseField struct {
	Id string `json:"id" form:"id"`
	TaskId string `json:"taskId" form:"taskId" binding:"required"`
	Type string `json:"type" form:"type" binding:"required"`
	Name string `json:"name" form:"name" binding:"required"`
	Size string `json:"size" form:"size"`
}