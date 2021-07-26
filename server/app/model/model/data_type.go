/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/25
**/
package model

type GlobalClient struct {
	GlobalModel
	ClientModelView
}

type GlobalModelView struct {
	Id              string            `json:"id" primaryKey:"yes"`
	LastGlobalModel string            `json:"categoryName" gorm:"column:last_global_model"`
	TaskId          string            `json:"taskId" gorm:"column:task_id"`
	File            string            `json:"file" gorm:"file"`
	ClientModelIds  string            `json:"clientModelIds" gorm:"column:client_model_ids"`
	CreatedAt       string            `json:"createdAt" gorm:"created_at"`
	Clients         []ClientModelView `json:"clients" gorm:"-"`
}

type ClientModelView struct {
	Id            string `json:"id" primaryKey:"yes" gorm:"column:c_id"`
	GlobalModelId string `json:"globalModelId" gorm:"column:c_global_model_id"`
	TaskId        string `json:"taskId" gorm:"column:c_task_id"`
	UserName      string `json:"userName" gorm:"column:c_user_name"`
	File          string `json:"file" gorm:"column:c_file"`
	CreatedAt     string `json:"createAt" gorm:"column:c_created_at"`
}
