# Gin开发测试



## 〇、go mod使用

> 在[Gin中文文档](https://www.kancloud.cn/shuangdeyu/gin_book/949412)中使用的是govendor来解决包依赖的问题，但是依赖包全部都下载到项目vendor下，每个项目都把有一份。

go modules 是 golang 1.11 新加的特性。

> 模块是相关Go包的集合。modules是源代码交换和版本控制的单元。 go命令直接支持使用modules，包括记录和解析对其他模块的依赖性。modules替换旧的基于GOPATH的方法来指定在给定构建中使用哪些源文件。

go mod有以下命令 

```sh
-<%>- go help mod     
Go mod provides access to operations on modules.

Note that support for modules is built into all the go commands,
not just 'go mod'. For example, day-to-day adding, removing, upgrading,
and downgrading of dependencies should be done using 'go get'.
See 'go help modules' for an overview of module functionality.

Usage:

	go mod <command> [arguments]

The commands are:

	download    download modules to local cache
	edit        edit go.mod from tools or scripts
	graph       print module requirement graph
	init        initialize new module in current directory
	tidy        add missing and remove unused modules
	vendor      make vendored copy of dependencies
	verify      verify dependencies have expected content
	why         explain why packages or modules are needed

Use "go help mod <command>" for more information about a command.
```

| 命令     | 说明                                 |
| -------- | ------------------------------------ |
| download | 下载依赖包到本地                     |
| edit     | 通过工具或者脚本来编辑 go.mod 文件   |
| graph    | 打印模块依赖图                       |
| init     | 在当前路径初始化mod                  |
| tidy     | 拉取缺少的模块，移除不用的模块       |
| vendor   | 将依赖复制到vendor下                 |
| verify   | 验证依赖是否正确                     |
| why      | 解释一下为什么某个包或者模块需要依赖 |



使用go mod初始化gin-test项目

```zsh
mkdir gin-test & cd gin-test
go mod init gin-test
```





## 一、创建`Hello world` 项目

创建main.go

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}
```

运行项目

> go mod会自动寻找相关依赖

```shell
-test [main*]>--<s000>-
-<%>- go run main.go                 
go: finding module for package github.com/gin-gonic/gin
go: found github.com/gin-gonic/gin in github.com/gin-gonic/gin v1.7.2
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:	export GIN_MODE=release
 - using code:	gin.SetMode(gin.ReleaseMode)

[GIN-debug] GET    /ping                     --> main.main.func1 (3 handlers)
[GIN-debug] Environment variable PORT is undefined. Using port :8080 by default
[GIN-debug] Listening and serving HTTP on :8080
```

展示效果如下

![image-20210706155134180](https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/image-20210706155134180.png)





## 二、gin开发

可以看[Gin中文文档](https://www.kancloud.cn/shuangdeyu/gin_book/949411)，我也在看



## 参考

[1] https://studygolang.com/articles/28712

[2] https://www.kancloud.cn/shuangdeyu/gin_book/949411