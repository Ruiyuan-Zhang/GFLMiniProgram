/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/25
**/
package model

// 本结构体内容是从【GlobalModelView】【ClientModelView】中直接复制即可，无须修改
type GlobalModelWithClientsList struct {
	Id                  int64  `primaryKey:"yes"`
	IdStr               string `gorm:"column:id_str"`
	LastGlobalModel     string `gorm:"column:last_global_model"`
	TaskId              string `gorm:"column:task_id"`
	File                string `gorm:"column:file"`
	TestData            string `json:"testData" gorm:"column:test_data"`
	Acc                 string `json:"acc" gorm:"column:acc"`
	ClientModelIds      string `gorm:"column:client_model_ids"`
	CreatedAt           string `gorm:"column:created_at"`
	ClientId            int64  `primaryKey:"yes" gorm:"column:c_id"`
	ClientIdStr         string `gorm:"column:c_id_str"`
	ClientGlobalModelId int64  `gorm:"column:c_global_model_id"`
	ClientTaskId        string `gorm:"column:c_task_id"`
	ClientUserName      string `gorm:"column:c_user_name"`
	ClientFile          string `gorm:"column:c_file"`
	ClientCreatedAt     string `gorm:"column:c_created_at"`
}

/**
需要保证，子对象使用Children包裹。
fid存在且为属性名
返回值与查询列表的
*/
type GlobalModelView struct {
	Id              int64  `json:"-" gorm:"column:id" primaryKey:"yes"`
	IdStr           string `json:"id" gorm:"column:id_str"`
	LastGlobalModel string `json:"lastGlobalModel" gorm:"column:last_global_model"`
	TaskId          string `json:"taskId" gorm:"column:task_id"`
	File            string `json:"file" gorm:"column:file"`
	TestData        string `json:"testData" gorm:"column:test_data"`
	Acc             string `json:"acc" gorm:"column:acc"`
	ClientModelIds  string `json:"clientModelIds" gorm:"column:client_model_ids"`
	CreatedAt       string `json:"createdAt" gorm:"column:created_at"`
	Children        []struct {
		ClientGlobalModelId int64  `fid:"Id" json:"-"  gorm:"column:c_global_model_id"`
		ClientId            int64  `json:"-" primaryKey:"yes" gorm:"column:c_id"`
		ClientIdStr         string `json:"id" gorm:"column:c_id_str"`
		ClientTaskId        string `json:"taskId" gorm:"column:c_task_id"`
		ClientUserName      string `json:"userName" gorm:"column:c_user_name"`
		ClientFile          string `json:"file" gorm:"column:c_file"`
		ClientCreatedAt     string `json:"createAt" gorm:"column:c_created_at"`
	} `json:"clients" gorm:"-"`
}
