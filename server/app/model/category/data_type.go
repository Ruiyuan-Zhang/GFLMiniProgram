/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/18
**/
package category

type CategoryView struct {
	Id  uint `json:"id"`
	Name string `json:"name"`
	Description string `json:"description"`
	File string `json:"file"`
}