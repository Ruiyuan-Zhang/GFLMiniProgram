/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/26
**/
package model

type ClientModelBaseField struct {
	Id            string `json:"id" form:"id"`
	GlobalModelId string `json:"globalModelId" form:"globalModelId"`
	TaskId        string `json:"taskId" form:"taskId"`
	File          string `json:"file" form:"file"`
}
