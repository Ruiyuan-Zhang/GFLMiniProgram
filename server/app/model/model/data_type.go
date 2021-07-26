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
	id              string            `json:"id" primaryKey:"yes"`
	lastGlobalModel string            `json:"categoryName" gorm:"column:last_global_model"`
	taskId          string            `json:"taskId" gorm:"column:task_id"`
	file            string            `json:"file" gorm:"file"`
	clientModelIds  string            `json:"clientModelIds" gorm:"column:client_model_ids"`
	createdAt       string            `json:"createdAt" gorm:"created_at"`
	clients         []ClientModelView `json:"clients" gorm:"-"`
}

type ClientModelView struct {
	id            string `json:"id" primaryKey:"yes" gorm:"column:c_id"`
	globalModelId string `json:"globalModelId" gorm:"column:c_global_model_id"`
	taskId        string `json:"taskId" gorm:"column:c_task_id"`
	userName      string `json:"userName" gorm:"column:c_user_name"`
	file          string `json:"file" gorm:"column:c_file"`
	createdAt     string `json:"createAt" gorm:"column:c_created_at"`
}
