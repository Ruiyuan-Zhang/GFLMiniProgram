/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/26
**/
package model

type ClientModelBaseField struct {
	Id            string `json:"id" form:"id"`
	GlobalModelId string `json:"globalModelId" form:"globalModelId" binding:"required"`
	UserName      string `json:"userName" form:"userName" binding:"required"`
	TaskId        string `json:"taskId" form:"taskId" binding:"required"`
	File          string `json:"file" form:"file" binding:"required"`
}
