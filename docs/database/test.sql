-- mysql -h 127.0.0.1 -P 3306 -u root   < /Users/zhangruiyuan/TaroProjects/GFLMiniProgram/docs/database/test.sql

CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8;

USE `test`;

DROP TABLE IF EXISTS tb_category;
DROP TABLE IF EXISTS tb_task;
DROP TABLE IF EXISTS tb_data_format;
DROP TABLE IF EXISTS tb_global_model;
DROP TABLE IF EXISTS tb_client_model;

CREATE TABLE tb_category (
    id VARCHAR(20) UNIQUE NOT NULL COMMENT '分类编号',
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
    id VARCHAR(20) UNIQUE NOT NULL COMMENT '任务编号',
    category_id VARCHAR(20) NOT NULL COMMENT '分类编号',
    name VARCHAR(100) DEFAULT '' COMMENT '联邦学习任务名称',
    description VARCHAR(3000) DEFAULT '' COMMENT '联邦学习描述',
    file VARCHAR(100) DEFAULT '' COMMENT '封面图片地址',
    init_model_file VARCHAR(100) DEFAULT '' COMMENT '初始化文件地址',
    super_params VARCHAR(1000) DEFAULT '' COMMENT '超参数设置',
    max_times_per_client VARCHAR(20) DEFAULT 2 COMMENT '每个客户端可以参与的训练的次数',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET=utf8;

CREATE TABLE tb_data_format (
    id VARCHAR(20) NOT NULL COMMENT '数据格式编号',
    task_id VARCHAR(20)  NOT NULL COMMENT '任务编号',
    name VARCHAR(100) DEFAULT '' COMMENT '数据名称',
    type VARCHAR(100) DEFAULT '' COMMENT '数据类型',
    size VARCHAR(100) DEFAULT '28 28' COMMENT 'image数据尺寸',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET=utf8;

CREATE TABLE tb_global_model (
    id VARCHAR(20) UNIQUE NOT NULL COMMENT '全局模型编号',
    last_global_model VARCHAR(20) COMMENT '延续的上一个全局模型',
    task_id VARCHAR(20) NOT NULL COMMENT '任务名称',
    file VARCHAR(100) DEFAULT '' COMMENT '全局模型地址',
    client_model_ids VARCHAR(1000) DEFAULT '' COMMENT '所引用的客户端模型',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET=utf8;

CREATE TABLE tb_client_model (
    global_model_id VARCHAR(20) NOT NULL COMMENT '全局模型编号',
    id VARCHAR(20) UNIQUE NOT NULL COMMENT '客户端模型编号',
    task_id VARCHAR(20)  NOT NULL COMMENT '任务编号',
    file VARCHAR(100) DEFAULT '' COMMENT '全局模型地址',
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
  `login_times` VARCHAR(20) DEFAULT 0 COMMENT '累计登录次数',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `tb_users` (id, user_name, pass) VALUES (1, 'zhangruiyuan', 'a53ec42f2a2914067f6119599cae318b');

/* oauth 表，主要控制一个用户可以同时拥有几个有效的token，通俗地说就是允许一个账号同时有几个人登录，超过将会导致最前面的人的token失效，而退出登录*/
DROP TABLE IF EXISTS `tb_oauth_access_tokens`;

CREATE TABLE `tb_oauth_access_tokens` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `fr_user_id` VARCHAR(20) DEFAULT 0 COMMENT '外键:tb_users表id',
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


