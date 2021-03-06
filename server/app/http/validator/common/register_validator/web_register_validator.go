package register_validator

import (
	"goskeleton/app/core/container"
	"goskeleton/app/global/consts"
	"goskeleton/app/http/validator/common/upload_files"
	"goskeleton/app/http/validator/common/websocket"
	"goskeleton/app/http/validator/web/category"
	"goskeleton/app/http/validator/web/data_format"
	"goskeleton/app/http/validator/web/model"
	"goskeleton/app/http/validator/web/task"
	"goskeleton/app/http/validator/web/users"
)

// 各个业务模块验证器必须进行注册（初始化），程序启动时会自动加载到容器
func WebRegisterValidator() {
	//创建容器
	containers := container.CreateContainersFactory()

	//  key 按照前缀+模块+验证动作 格式，将各个模块验证注册在容器
	var key string
	// Users 模块表单验证器按照 key => value 形式注册在容器，方便路由模块中调用
	key = consts.ValidatorPrefix + "UsersRegister"
	containers.Set(key, users.Register{})
	key = consts.ValidatorPrefix + "UsersLogin"
	containers.Set(key, users.Login{})
	key = consts.ValidatorPrefix + "RefreshToken"
	containers.Set(key, users.RefreshToken{})

	// Users基本操作（CURD）
	key = consts.ValidatorPrefix + "UsersShow"
	containers.Set(key, users.Show{})
	key = consts.ValidatorPrefix + "UsersStore"
	containers.Set(key, users.Store{})
	key = consts.ValidatorPrefix + "UsersUpdate"
	containers.Set(key, users.Update{})
	key = consts.ValidatorPrefix + "UsersDestroy"
	containers.Set(key, users.Destroy{})

	// 文件上传
	key = consts.ValidatorPrefix + "UploadFiles"
	containers.Set(key, upload_files.UpFiles{})

	// Websocket 连接验证器
	key = consts.ValidatorPrefix + "WebsocketConnect"
	containers.Set(key, websocket.Connect{})

	// 任务分类管理
	{
		key = consts.ValidatorPrefix + "CategoryList"
		containers.Set(key, category.List{})
	}

	// 任务管理
	{
		// 任务添加
		key = consts.ValidatorPrefix + "TaskAdd"
		containers.Set(key, task.Add{})
		// 任务列表
		key = consts.ValidatorPrefix + "TaskList"
		containers.Set(key, task.List{})
		// 任务查询
		key = consts.ValidatorPrefix + "TaskSelect"
		containers.Set(key, task.Select{})
		// 任务详情
		key = consts.ValidatorPrefix + "TaskDetail"
		containers.Set(key, task.Detail{})
		// 任务详情 包含格式
		key = consts.ValidatorPrefix + "TaskDetailWithFormat"
		containers.Set(key, task.DetailWithFormat{})
		// 任务用户关系 添加
		key = consts.ValidatorPrefix + "TaskUserAdd"
		containers.Set(key, task.TaskUserAdd{})
		// 任务用户关系 检查是否存在
		key = consts.ValidatorPrefix + "TaskUserHave"
		containers.Set(key, task.TaskUserHave{})
		// 已经加入的任务列表
		key = consts.ValidatorPrefix + "TaskJoinList"
		containers.Set(key, task.TaskJoinList{})
	}

	// 数据格式管理
	{
		key = consts.ValidatorPrefix + "DataFormatAdd"
		containers.Set(key, data_format.Add{})
	}

	// 模型管理
	{
		// 客户端模型 添加
		key = consts.ValidatorPrefix + "ClientModelAdd"
		containers.Set(key, model.ClientModelAdd{})
		// 全局模型 查询列表
		key = consts.ValidatorPrefix + "GlobalModelList"
		containers.Set(key, model.GlobalModelList{})
		// 全局模型 查询列表 带客户端上传模型信息
		key = consts.ValidatorPrefix + "GlobalModelWithClientsList"
		containers.Set(key, model.GlobalModelWithClientsList{})
		// 全局模型 聚合
		key = consts.ValidatorPrefix + "FedAvg"
		containers.Set(key, model.FedAvg{})
	}
}
