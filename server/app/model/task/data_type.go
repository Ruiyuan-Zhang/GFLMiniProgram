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
	TUCreatedAt       string `json:"tuCreateAt" gorm:"column:tu_created_at"`
}

type TaskModelViewWithDataFormatList struct {
	Id                    int64  `primaryKey:"yes"`
	CategoryName          string `gorm:"column:category_name"`
	CategoryId            string `gorm:"column:category_id"`
	Name                  string `gorm:"column:name"`
	Description           string `gorm:"column:description"`
	File                  string `gorm:"column:file"`
	InitModelFile         string `gorm:"column:init_model_file"`
	SuperParams           string `gorm:"column:super_params"`
	MaxTimesPerClient     int32  `gorm:"column:max_times_per_client"`
	CreatedAt             string `gorm:"column:created_at"`
	DataFormatTaskId      int64  `gorm:"column:data_format_task_id"`
	DataFormatId          int64  `gorm:"column:data_format_id" primaryKey:"yes"`
	DataFormatIdStr       string `gorm:"-"`
	DataFormatType        string `gorm:"column:data_format_type"`
	DataFormatName        string `gorm:"column:data_format_name"`
	DataFormatSize        string `gorm:"column:data_format_size"`
	DataFormatEnglishName string `gorm:"column:data_format_english_name"`
	DataFormatTips        string `gorm:"column:data_format_tips"`
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
		DataFormatTaskId      int64  `fid:"Id" json:"taskId" gorm:"column:data_format_task_id"`
		DataFormatId          int64  `json:"id" primaryKey:"yes" gorm:"column:data_format_id"`
		DataFormatIdStr       string `json:"idStr" gorm:"-"`
		DataFormatType        string `json:"type" gorm:"column:data_format_type"`
		DataFormatName        string `json:"name" gorm:"column:data_format_name"`
		DataFormatSize        string `json:"size" gorm:"column:data_format_size"`
		DataFormatEnglishName string `json:"englishName" gorm:"column:data_format_english_name"`
		DataFormatTips        string `json:"tips" gorm:"column:data_format_tips"`
	} `json:"dataFormats" gorm:"-"`
}
