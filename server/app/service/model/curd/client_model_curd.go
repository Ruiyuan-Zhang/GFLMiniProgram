/**
 * @note:
 * @author: zhangruiyuan
 * @date:2021/7/26
**/
package curd

import (
	"errors"
	"github.com/gin-gonic/gin"
	"goskeleton/app/model/model"
)

type ClientModelCurd struct {
}

// 添加一条客户端模型
func (cm *ClientModelCurd) InsertData(c *gin.Context) error {
	// 1. 插入一条clientModel数据
	if tmp := model.CreatClientModelFactory("").InsertData(c); tmp == nil {
		// 2. 获取globalModel信息
		if gm := model.CreatGlobalFactory("").GetOne(tmp.GlobalModelId); gm != nil {
			// 3. 更改全局对象信息
			clientModelIds := gm.ClientModelIds
			clientModelIds = clientModelIds + " " + tmp.Id
			if err := model.CreatGlobalFactory("").UpdateClientModels(tmp.GlobalModelId, clientModelIds); err == nil {
				return nil
			} else {
				return errors.New("")
			}
		} else {
			return errors.New("")
		}
	} else {
		return errors.New("")
	}
}
