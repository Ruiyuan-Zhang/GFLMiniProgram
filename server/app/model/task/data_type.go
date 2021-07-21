/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/19
**/
package task

type TaskModelView struct {
	Id  string `json:"id"`
	CategoryName  string `json:"categoryName"`
	CategoryId  string `json:"categoryId"`
	Name string `json:"name"`
	Description string `json:"description"`
	File string `json:"file"`
	InitModelFile string `json:"initModelFile"`
	SuperParams string `json:"superParams"`
	MaxTimesPerClient int32 `json:"maxTimesPerClient"`
	CreatedAt string `json:"createAt"`
}