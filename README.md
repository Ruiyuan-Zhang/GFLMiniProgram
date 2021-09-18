# GFLmini 联邦学习「移动」
(本篇持续更新)
https://github.com/zju-zry/GFLMiniProgram/tree/develop

目前已发布微信小程序`GFLmini`，管理网站请访问：https://gflmini.zju-zry.club/。

> 微信小程序

![在这里插入图片描述](https://img-blog.csdnimg.cn/9dd6cf1d889b41e493d5cc61dae3ed50.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAemp1LXpyeQ==,size_20,color_FFFFFF,t_70,g_se,x_16)


> 管理后台

![在这里插入图片描述](https://img-blog.csdnimg.cn/4c18c3313b8348b7941dc88debef5eac.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAemp1LXpyeQ==,size_20,color_FFFFFF,t_70,g_se,x_16)






## 〇、项目介绍

本项目来源于浙江大学DAI实验室，是联邦学习框架GFL在小程序上的实践，因此命名为GFLmini。本项目是在微信小程序端进行联邦学习任务的第一次尝试，它具备以下优势：

1. 让研究者有收集和分析本地数据的的真实的、可推广的、可运营、可自定义的开源项目
2. 让用户可以快速地无忧分享任何敏感数据的软件



### 使用流程

#### 1. 微信小程序

> 第一步：登录账户

系统中已经默认了5个初始用户，用于正常浏览系统各个功能。

| 序号 | 用户名 | 密码   | 备注 |
| ---- | ------ | ------ | ---- |
| 1    | user01 | 123456 |      |
| 2    | user02 | 123456 |      |
| 3    | user03 | 123456 |      |
| 4    | user04 | 123456 |      |
| 5    | user05 | 123456 |      |



> 第二步：浏览小程序

产品在首页中展示了`为您推荐任务`、`今日份有趣任务`、`当前火热任务`等推荐内容，用户也可以通过`搜索`来对任务进行检索。

![在这里插入图片描述](https://img-blog.csdnimg.cn/c11066ef0de04bb2acb3f76e8e88e254.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAemp1LXpyeQ==,size_20,color_FFFFFF,t_70,g_se,x_16)




> 第二步：加入到一项任务当中去

用户选择一项任务，阅读该任务的`隐私数据使用声明`，即可加入到该任务的训练中。每个任务需要图片、文件、字符串、数值等多种格式的数据输入，用户需要根据要求输入数据，你也可以先退出当前界面，稍后在`Task`中查看任务、追加数据。
![在这里插入图片描述](https://img-blog.csdnimg.cn/132f2e14c3994e598361f693836c7323.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAemp1LXpyeQ==,size_20,color_FFFFFF,t_70,g_se,x_16)




接下来，你可以在`Task`下看到进行中的任务列表，可以查看所参与任务的训练情况。您可以点击进去，观察全局任务的训练情况，并利用本地的数据参与训练。
![在这里插入图片描述](https://img-blog.csdnimg.cn/a47a5b21ea094b438743e7aeebcdc67e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAemp1LXpyeQ==,size_20,color_FFFFFF,t_70,g_se,x_16)


#### 2. GFLmini管理后台

更多更详细的内容可以访问https://gflmini.zju-zry.club/

<img src="https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210918123337.png" style="zoom:80%;" />



> 第一步：发布一条新任务

首先输入任务的基本信息，上传任务在手机端训练的TF.js模型（模型的转换方式在`tensorFlowExperiment`目录下）。

<img src="https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/image-20210918124023460.png" alt="image-20210918124023460" style="zoom:30%;" /> 

<img src="https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210918123819.png" style="zoom:35%;" /> 



接下来，需要添加数据格式。

> 关于模型所需要的数据，目前支持两种形式的数据的输入
>
> 1. image + value 默认支持one-hot操作
> 2. values + value
> 3. 支持用户自定义数据处理及训练方式
>
> 默认value是输出值，同时value还支持是否进行one-hot操作，并需要输入one-hot的大小
>
>
> 测试时，使用**波士顿房价** 和 **手写数字识别** 的数据

<img src="https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/image-20210918124140145.png" alt="image-20210918124140145" style="zoom:40%;" />

最后，提交全部配置即可。

<img src="https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/image-20210918124308973.png" alt="image-20210918124308973" style="zoom:50%;" />



> 第二步：查看任务情况，进行聚合

同小程序，管理后台这边可以查看全局的模型聚合情况，包括聚合的时间、训练时间、准确率、所使用的测试数据集等信息。

<img src="https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/image-20210918124407110.png" alt="image-20210918124407110" style="zoom:50%;" />

管理后台可以选择手动或者是自动聚合的方式。

<img src="https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/image-20210918124546740.png" alt="image-20210918124546740" style="zoom:30%;" />

聚合的时间一般比较长，请耐心等待。

<img src="https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/image-20210918124640019.png" alt="image-20210918124640019" style="zoom:50%;" />



聚合完成后利用最新的测试集进行检验，测试集由任务发布者或用户主动贡献。如下图所示，最新的聚合后，模型的效果变得更好。

<img src="https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/image-20210918124746274.png" alt="image-20210918124746274" style="zoom:30%;" />









## 一、目录结构

```
.
|
+ client                       前台 - 微信小程序
|
+clientManager                 用户本地数据管理服务器（已放弃）
|
+ back                         后台 - 联邦学习任务管理后台
|
+ docs                         一些必要的文档
|
+ fileServer                   文件管理服务器：模型、图片等文件
|
+ server                       后端
|
+ gin-test                     Gin 测试项目
|
+ tensorFlowExperiment         TensorFlow实验
|
+ testDataT                    测试数据
|
+ .gitignore                   Github提交忽略文件
|
+ ...
```



## 二、启动过程

请首先安装Golang、VsCode。

| 序号 | 名称    | 版本                  | 其他 |
| ---- | ------- | --------------------- | ---- |
| 1    | node    | v16.4.0               |      |
| 2    | npm     | 7.18.1                |      |
| 3    | Go      | go1.15.6 darwin/amd64 |      |
| 4    | Python3 | 3.7.4                 |      |



## 三、部署流程

> 第一步：配置nginx

```nginx
server {
        listen 443 ssl;
        server_name malanore.cn;
        #ssl证书的pem文件路径
        ssl_certificate  /home/zhangruiyuan/gfmini/ssl/zju-zry.club.pem;
        #ssl证书的key文件路径
        ssl_certificate_key /home/zhangruiyuan/gfmini/ssl/zju-zry.club.key;

        location /{
            root /home/zhangruiyuan/gfmini/dist; 
            index index.html;
            try_files $uri $uri/ /index.html;
            error_page 405 =200 /index.html;
        }
        location /v1/ {
            proxy_pass http://localhost:20201/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
        location /file/ {
            proxy_pass http://localhost:3000/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
}

```

> 第二步，打包项目

1. 打包小程序

```
yarn build:weapp
```

2. 打包后台

```
npm run build
```

3. 打包后端

```
 CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o server main.go
```



> 第三步，创建数据库

```mysql
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8;

USE `test`;

DROP TABLE IF EXISTS tb_category;
DROP TABLE IF EXISTS tb_task;
DROP TABLE IF EXISTS tb_task_user;
DROP TABLE IF EXISTS tb_data_format;
DROP TABLE IF EXISTS tb_global_model;
DROP TABLE IF EXISTS tb_client_model;

CREATE TABLE tb_category (
    id VARCHAR(30) UNIQUE NOT NULL COMMENT '分类编号',
    name VARCHAR(100) DEFAULT '' COMMENT '联邦学习分类名称',
    description VARCHAR(3000) DEFAULT '' COMMENT '分类介绍',
    file VARCHAR(100) DEFAULT '' COMMENT '封面图片地址',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET=utf8;

INSERT INTO tb_category (id,name,description,file) VALUES (1, '机器学习','机器学习是一门多领域交叉学科，涉及概率论、统计学、逼近论、凸分析、算法复杂度理论等多门学科。专门研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有的知识结构使之不断改善自身的性能。','/images/category/1.webp');
INSERT INTO tb_category (id,name,description,file)VALUES (2, '计算机视觉','计算机视觉是一门研究如何使机器“看”的科学，更进一步的说，就是是指用摄影机和电脑代替人眼对目标进行识别、跟踪和测量等机器视觉，并进一步做图形处理，使电脑处理成为更适合人眼观察或传送给仪器检测的图像。作为一个科学学科，计算机视觉研究相关的理论和技术，试图建立能够从图像或者多维数据中获取‘信息’的人工智能系统。这里所 指的信息指Shannon定义的，可以用来帮助做一个“决定”的信息。因为感知可以看作是从感官信号中提 取信息，所以计算机视觉也可以看作是研究如何使人工系统从图像或多维数据中“感知”的科学。','/images/category/2.webp');
INSERT INTO tb_category (id,name,description,file)VALUES (3, '语音识别','语音识别是一门交叉学科。近二十年来，语音识别技术取得显著进步，开始从实验室走向市场。人们预计，未来10年内，语音识别技术将进入工业、家电、通信、汽车电子、医疗、家庭服务、消费电子产品等各个领域。 语音识别听写机在一些领域的应用被美国新闻界评为1997年计算机发展十件大事之一。很多专家都认为语音识别技术是3000年至3010年间信息技术领域十大重要的科技发展技术之一。 语音识别技术所涉及的领域包括：信号处理、模式识别、概率论和信息论、发声机理和听觉机理、人工智能等等。','/images/category/3.webp');
INSERT INTO tb_category (id,name,description,file)VALUES (4, '自然语言处理','自然语言处理( Natural Language Processing, NLP)是计算机科学领域与人工智能领域中的一个重要方向。它研究能实现人与计算机之间用自然语言进行有效通信的各种理论和方法。自然语言处理是一门融语言学、计算机科学、数学于一体的科学。因此，这一领域的研究将涉及自然语言，即人们日常使用的语言，所以它与语言学的研究有着密切的联系，但又有重要的区别。自然语言处理并不是一般地研究自然语言，而在于研制能有效地实现自然语言通信的计算机系统，特别是其中的软件系统。因而它是计算机科学的一部分 [2]  。','/images/category/4.jpeg');

CREATE TABLE tb_task (
    id VARCHAR(30) UNIQUE NOT NULL COMMENT '任务编号',
    category_id VARCHAR(30) NOT NULL COMMENT '分类编号',
    name VARCHAR(100) DEFAULT '' COMMENT '联邦学习任务名称',
    description VARCHAR(3000) DEFAULT '' COMMENT '联邦学习描述',
    file VARCHAR(100) DEFAULT '' COMMENT '封面图片地址',
    init_model_file VARCHAR(100) DEFAULT '' COMMENT '初始化文件地址',
    super_params VARCHAR(1000) DEFAULT '' COMMENT '超参数设置',
    max_times_per_client VARCHAR(30) DEFAULT 2 COMMENT '每个客户端可以参与的训练的次数',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET=utf8;

CREATE TABLE tb_data_format (
    id VARCHAR(30) NOT NULL COMMENT '数据格式编号',
    task_id VARCHAR(30)  NOT NULL COMMENT '任务编号',
    name VARCHAR(100) DEFAULT '' COMMENT '数据名称',
    type VARCHAR(100) DEFAULT '' COMMENT '数据类型',
    tips VARCHAR(100) DEFAULT '' COMMENT '输入提示信息',
    english_name VARCHAR(100) DEFAULT '' COMMENT '英文名称（标识符）',
    size VARCHAR(100) DEFAULT '28 28' COMMENT 'image数据尺寸',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET=utf8;

CREATE TABLE tb_global_model (
    id VARCHAR(30) UNIQUE NOT NULL COMMENT '全局模型编号',
    last_global_model VARCHAR(30) COMMENT '延续的上一个全局模型',
    task_id VARCHAR(30) NOT NULL COMMENT '任务名称',
    file VARCHAR(100) DEFAULT '' COMMENT '全局模型地址',
    test_data VARCHAR(100) DEFAULT '' COMMENT '测试数据',
    acc VARCHAR(30) DEFAULT '' COMMENT '模型准确率',
    time VARCHAR(30) DEFAULT '' COMMENT '模型聚合消耗的时间',
    client_model_ids VARCHAR(1000) DEFAULT '' COMMENT '引用它的客户端模型',
    fed_avg_with_clients VARCHAR(1000) DEFAULT '' COMMENT '所引用的客户端模型',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET=utf8;

CREATE TABLE tb_client_model (
    global_model_id VARCHAR(30) NOT NULL COMMENT '全局模型编号',
    id VARCHAR(30) UNIQUE NOT NULL COMMENT '客户端模型编号',
    user_name VARCHAR(30) NOT NULL COMMENT '客户端名称',
    task_id VARCHAR(30)  NOT NULL COMMENT '任务编号',
    file VARCHAR(100) DEFAULT '' COMMENT '全局模型地址',
    time VARCHAR(30) DEFAULT '' COMMENT '模型训练消耗的时间',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET=utf8;

CREATE TABLE tb_task_user (
    id VARCHAR(30) UNIQUE NOT NULL COMMENT '任务-用户关系表编号',
    task_id VARCHAR(30)  NOT NULL COMMENT '任务编号',
    task_name VARCHAR(100) DEFAULT '' COMMENT '联邦学习任务名称',
    user_id VARCHAR(30) NOT NULL COMMENT '用户编号',
    user_name VARCHAR(100) DEFAULT '' COMMENT '用户名称',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET=utf8;


/*Table structure for table `tb_users` */

DROP TABLE IF EXISTS `tb_users`;

CREATE TABLE `tb_users` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(100) DEFAULT '' COMMENT '账号',
  `pass` VARCHAR(128) DEFAULT '' COMMENT '密码',
  `real_name` VARCHAR(100) DEFAULT '' COMMENT '姓名',
  `phone` CHAR(64) DEFAULT '' COMMENT '手机',
  `status` TINYINT(4) DEFAULT 1 COMMENT '状态',
  `remark` VARCHAR(1000) DEFAULT '' COMMENT '备注',
  `last_login_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `last_login_ip` CHAR(100) DEFAULT '' COMMENT '最近一次登录ip',
  `login_times` VARCHAR(30) DEFAULT 0 COMMENT '累计登录次数',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `tb_users` (id, user_name, pass) VALUES (1, 'zhangruiyuan', 'a53ec42f2a2914067f6119599cae318b');
INSERT INTO `tb_users` (id, user_name, pass) VALUES (2, 'wuchao', '87d9bb400c0634691f0e3baaf1e2fd0d');
INSERT INTO `tb_users` (id, user_name, pass) VALUES (3, 'lizexi', '87d9bb400c0634691f0e3baaf1e2fd0d');
INSERT INTO `tb_users` (id, user_name, pass) VALUES (4, 'zhouyuhang', '87d9bb400c0634691f0e3baaf1e2fd0d');
INSERT INTO `tb_users` (id, user_name, pass) VALUES (5, 'tangzuoqi', '87d9bb400c0634691f0e3baaf1e2fd0d');
INSERT INTO `tb_users` (id, user_name, pass) VALUES (6, 'zhangjie', '87d9bb400c0634691f0e3baaf1e2fd0d');

/* oauth 表，主要控制一个用户可以同时拥有几个有效的token，通俗地说就是允许一个账号同时有几个人登录，超过将会导致最前面的人的token失效，而退出登录*/
DROP TABLE IF EXISTS `tb_oauth_access_tokens`;

CREATE TABLE `tb_oauth_access_tokens` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `fr_user_id` VARCHAR(30) DEFAULT 0 COMMENT '外键:tb_users表id',
  `client_id` INT(10) UNSIGNED DEFAULT 1 COMMENT '普通用户的授权，默认为1',
  `token` VARCHAR(600) DEFAULT NULL,
  `action_name` VARCHAR(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '' COMMENT 'login|refresh|reset表示token生成动作',
  `scopes` VARCHAR(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '[*]' COMMENT '暂时预留,未启用',
  `revoked` TINYINT(1) DEFAULT 0 COMMENT '是否撤销',
  `client_ip` VARCHAR(128) DEFAULT NULL COMMENT 'ipv6最长为128位',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `expires_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`fr_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

/* 创建基于casbin控制接口访问的权限表*/
DROP TABLE IF EXISTS `tb_auth_casbin_rule`;
CREATE TABLE `tb_auth_casbin_rule` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`ptype` varchar(100) DEFAULT '',
`v0` varchar(100) DEFAULT '',
`v1` varchar(100) DEFAULT '',
`v2` varchar(100) DEFAULT '*',
`v3` varchar(100) DEFAULT '',
`v4` varchar(100) DEFAULT '',
`v5` varchar(100) DEFAULT '',
PRIMARY KEY (`id`),
UNIQUE KEY `unique_index` (`ptype`,`v0`,`v1`,`v2`,`v3`,`v4`,`v5`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8

```



> 第四步，启动后端、文件管理服务器

```shell
# 启动后端
nohup ./server &!
# 启动文件管理服务器
nohup node main &!
```



## 其他

未来将添加数据定价、利用PC等大存储、大计算资源设备进行训练等功能。



### License

[Apache License 2.0](LICENSE)
