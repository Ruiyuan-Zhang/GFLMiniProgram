

    
##### 简要描述

- 获取历史训练记录（模型记录）

##### 请求URL
- ` http://xx.com/api/model/history `
  
##### 请求方式
- POST 

##### 参数

无

##### 返回示例 

``` 
  {
    "error_code": 0,
	 data: [{
		 clientModelId: 123,
		 clientModelFile: '',
		 globalModelId: 345,
		 globalModelFile: ''
	},{
		 clientModelId: 123,
		 clientModelFile: '',
		 globalModelId: 345,
		 globalModelFile: ''
	},{
		 clientModelId: 123,
		 clientModelFile: '',
		 globalModelId: 345,
		 globalModelFile: ''
	}]
		  "groupid": 2 ,
		  "reg_time": "1436864169",
		  "last_login_time": "0",
		}
	  }
```

##### 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|clientModelId|number|客户端模型编号|
|clientModelFile|string|客户端模型文件地址|
|globalModelId|number|全局模型编号|
|globalModelFile|string|全局模型文件地址|


##### 备注 

- 更多返回错误代码请看首页的错误代码描述



