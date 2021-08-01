# 小程序分包

### 打包原则
+ 声明 subpackages 后，将按 subpackages 配置路径进行打包，subpackages 配置路径外的目录将被打包到 app（主包） 中
+ app（主包）也可以有自己的 pages（即最外层的 pages 字段）
+ subpackage 的根目录不能是另外一个 subpackage 内的子目录
+ tabBar 页面必须在 app（主包）内

### 引用原则
+ packageA 无法 require packageB JS 文件，但可以 require app、自己 package 内的 JS 文件；使用 分包异步化 时不受此条限制
+ packageA 无法 import packageB 的 template，但可以 require app、自己 package 内的 template
+ packageA 无法使用 packageB 的资源，但可以使用 app、自己 package 内的资源


## 打包策略
