欢迎使用ShowDoc！

    
##### 简要描述

- 用户创建一个分类

##### 请求URL
- ` http://xx.com/api/category/add `
  
##### 请求方式
- POST 

##### 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|name |是  |string | 分类名称   |
|description |是  |string | 描述   |
|file     |否  | string |图标路径    |

##### 返回示例 

``` 
  {
    "error_code": 0,
    "data": {
	"id":123,
      "name":"军事",
	  "description":"军事描述描述描述",
	  "file":"图标文件地址"
    }
  }
```

##### 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |任务分类的id，由雪花算法生成  |
|name |string   |任务分类的名称  |
|description |string   |任务分类的描述  |
|file |file   |图标文件 |

##### 备注 

- 更多返回错误代码请看首页的错误代码描述



