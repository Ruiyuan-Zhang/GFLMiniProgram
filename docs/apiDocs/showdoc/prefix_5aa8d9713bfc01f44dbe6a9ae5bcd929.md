

    
##### 简要描述

- 添加任务接口

##### 请求URL
- ` http://xx.com/api/task/add`
  
##### 请求方式
- POST 

##### 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|catagoryId |是  |number |任务分类编号 |
|name |是  |string |任务名称   |
|description |是  |string | 任务简介（富文本）    |
|file |是  |string | 联邦学习任务封面地址    |
|initModelFile  |是  |string | 模型初始化文件地址     |
|superParams|是|string| 超参数信息，以json格式保存，使用的时候需要解析一下|
|maxTimesPerClient|是|number|每个客户端最多可以参与的次数，为了缓解non-iid的影响|

##### 返回示例 

``` 
  {
    "error_code": 0,
    "data": {
     	id: 123,
		catagoryId:456,
		name:"mnist",
		description:'测试使用',
		initModelFile:"public/model/1.json"
		superParams: "{lr:0.1}"
		maxTimesPerClient:3,
		globalModelId:123,
    }
  }
```

##### 返回参数说明 

|参数名|类型|说明|备注
|:----- |:-----|-----|---|
|id|number|联邦学习任务id，由雪花算法生成||
|catagoryId |是  |number |任务分类编号 |
|name|string|联邦学习任务名称||
|description|string|任务详细描述，是富文本框生成的html||
|initModelFile|string|初始化模型地址|这个地址必须是公开可以访问的，且要求能够访问到model.json和对应的二进制文件|
|superParams|string|超参数|使用json生成的字符串保存，用以在前端进行使用|
|maxTimesPerClient|是|number|每个客户端最多可以参与的次数，为了缓解non-iid的影响|
|globalModelId|是|number|初始化得到的全局模型的编号|



##### 备注 

- 更多返回错误代码请看首页的错误代码描述



