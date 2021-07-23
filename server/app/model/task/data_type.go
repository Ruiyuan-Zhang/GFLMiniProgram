/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/19
**/
package task

type TaskModelView struct {
	Id                string `json:"id"`
	CategoryName      string `json:"categoryName" gorm:"column:category_name"`
	CategoryId        string `json:"categoryId" gorm:"column:category_id"`
	Name              string `json:"name"`
	Description       string `json:"description"`
	File              string `json:"file"`
	InitModelFile     string `json:"initModelFile" gorm:"column:init_model_file"`
	SuperParams       string `json:"superParams" gorm:"column:super_params"`
	MaxTimesPerClient int32  `json:"maxTimesPerClient" gorm:"column:max_times_per_client"`
	CreatedAt         string `json:"createAt" gorm:"column:created_at"`
}

type TaskModelViewWithDataFormatList struct {
	Id                int64  `json:"id" primaryKey:"yes"`
	IdStr             string `json:"idStr" gorm:"-"`
	CategoryName      string `json:"categoryName" gorm:"column:category_name"`
	CategoryId        string `json:"categoryId" gorm:"column:category_id"`
	Name              string `json:"name"`
	Description       string `json:"description"`
	File              string `json:"file"`
	InitModelFile     string `json:"initModelFile" gorm:"column:init_model_file"`
	SuperParams       string `json:"superParams" gorm:"column:super_params"`
	MaxTimesPerClient int32  `json:"maxTimesPerClient" gorm:"column:max_times_per_client"`
	CreatedAt         string `json:"createAt" gorm:"column:created_at"`
	DataFormatTaskId  int64  `json:"dataFormatTaskId" gorm:"column:data_format_task_id"`
	DataFormatId      int64  `json:"dataFormatId" gorm:"column:data_format_id" primaryKey:"yes"`
	DataFormatIdStr   string `json:"dataFormatIdStr" gorm:"-"`
	DataFormatType    string `json:"dataFormatType" gorm:"column:data_format_type"`
	DataFormatName    string `json:"dataFormatName" gorm:"column:data_format_name"`
	DataFormatSize    string `json:"dataFormatSize" gorm:"column:data_format_size"`
}

type TaskModelViewWithDataFormat struct {
	Id                int64  `json:"id" primaryKey:"yes"`
	IdStr             string `json:"idStr" gorm:"-"`
	CategoryName      string `json:"categoryName" gorm:"column:category_name"`
	CategoryId        string `json:"categoryId" gorm:"column:category_id"`
	Name              string `json:"name"`
	Description       string `json:"description"`
	File              string `json:"file"`
	InitModelFile     string `json:"initModelFile" gorm:"column:init_model_file"`
	SuperParams       string `json:"superParams" gorm:"column:super_params"`
	MaxTimesPerClient int32  `json:"maxTimesPerClient" gorm:"column:max_times_per_client"`
	CreatedAt         string `json:"createAt" gorm:"column:created_at"`
	Children          []struct {
		DataFormatTaskId int64  `fid:"Id" json:"dataFormatTaskId" gorm:"column:data_format_task_id"`
		DataFormatId     int64  `json:"dataFormatId" primaryKey:"yes" gorm:"column:data_format_id"`
		DataFormatIdStr  string `json:"dataFormatIdStr" gorm:"-"`
		DataFormatType   string `json:"dataFormatType" gorm:"column:data_format_type"`
		DataFormatName   string `json:"dataFormatName" gorm:"column:data_format_name"`
		DataFormatSize   string `json:"dataFormatSize" gorm:"column:data_format_size"`
	} `json:"dataFormats" gorm:"-"`
}
