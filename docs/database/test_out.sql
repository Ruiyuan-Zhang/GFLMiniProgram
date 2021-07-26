CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8;

USE `test`;


-- MySQL dump 10.13  Distrib 8.0.22, for osx10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_auth_casbin_rule`
--

DROP TABLE IF EXISTS `tb_auth_casbin_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_auth_casbin_rule` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ptype` varchar(100) DEFAULT '',
  `v0` varchar(100) DEFAULT '',
  `v1` varchar(100) DEFAULT '',
  `v2` varchar(100) DEFAULT '*',
  `v3` varchar(100) DEFAULT '',
  `v4` varchar(100) DEFAULT '',
  `v5` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_index` (`ptype`,`v0`,`v1`,`v2`,`v3`,`v4`,`v5`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_auth_casbin_rule`
--

LOCK TABLES `tb_auth_casbin_rule` WRITE;
/*!40000 ALTER TABLE `tb_auth_casbin_rule` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_auth_casbin_rule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_category`
--

DROP TABLE IF EXISTS `tb_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_category` (
  `id` varchar(20) NOT NULL COMMENT '分类编号',
  `name` varchar(100) DEFAULT '' COMMENT '联邦学习分类名称',
  `description` varchar(3000) DEFAULT '' COMMENT '分类介绍',
  `file` varchar(100) DEFAULT '' COMMENT '封面图片地址',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_category`
--

LOCK TABLES `tb_category` WRITE;
/*!40000 ALTER TABLE `tb_category` DISABLE KEYS */;
INSERT INTO `tb_category` VALUES ('1','机器学习','机器学习是一门多领域交叉学科，涉及概率论、统计学、逼近论、凸分析、算法复杂度理论等多门学科。专门研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有的知识结构使之不断改善自身的性能。','/images/category/1.webp','2021-07-23 19:46:27','2021-07-23 19:46:27'),('2','计算机视觉','计算机视觉是一门研究如何使机器“看”的科学，更进一步的说，就是是指用摄影机和电脑代替人眼对目标进行识别、跟踪和测量等机器视觉，并进一步做图形处理，使电脑处理成为更适合人眼观察或传送给仪器检测的图像。作为一个科学学科，计算机视觉研究相关的理论和技术，试图建立能够从图像或者多维数据中获取‘信息’的人工智能系统。这里所 指的信息指Shannon定义的，可以用来帮助做一个“决定”的信息。因为感知可以看作是从感官信号中提 取信息，所以计算机视觉也可以看作是研究如何使人工系统从图像或多维数据中“感知”的科学。','/images/category/2.webp','2021-07-23 19:46:27','2021-07-23 19:46:27'),('3','语音识别','语音识别是一门交叉学科。近二十年来，语音识别技术取得显著进步，开始从实验室走向市场。人们预计，未来10年内，语音识别技术将进入工业、家电、通信、汽车电子、医疗、家庭服务、消费电子产品等各个领域。 语音识别听写机在一些领域的应用被美国新闻界评为1997年计算机发展十件大事之一。很多专家都认为语音识别技术是3000年至3010年间信息技术领域十大重要的科技发展技术之一。 语音识别技术所涉及的领域包括：信号处理、模式识别、概率论和信息论、发声机理和听觉机理、人工智能等等。','/images/category/3.webp','2021-07-23 19:46:27','2021-07-23 19:46:27'),('4','自然语言处理','自然语言处理( Natural Language Processing, NLP)是计算机科学领域与人工智能领域中的一个重要方向。它研究能实现人与计算机之间用自然语言进行有效通信的各种理论和方法。自然语言处理是一门融语言学、计算机科学、数学于一体的科学。因此，这一领域的研究将涉及自然语言，即人们日常使用的语言，所以它与语言学的研究有着密切的联系，但又有重要的区别。自然语言处理并不是一般地研究自然语言，而在于研制能有效地实现自然语言通信的计算机系统，特别是其中的软件系统。因而它是计算机科学的一部分 [2]  。','/images/category/4.jpeg','2021-07-23 19:46:27','2021-07-23 19:46:27');
/*!40000 ALTER TABLE `tb_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_client_model`
--

DROP TABLE IF EXISTS `tb_client_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_client_model` (
  `global_model_id` varchar(20) NOT NULL COMMENT '全局模型编号',
  `id` varchar(20) NOT NULL COMMENT '客户端模型编号',
  `task_id` varchar(20) NOT NULL COMMENT '任务编号',
  `user_id` VARCHAR(20) NOT NULL COMMENT '用户编号',
  `file` varchar(100) DEFAULT '' COMMENT '全局模型地址',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_client_model`
--

LOCK TABLES `tb_client_model` WRITE;
/*!40000 ALTER TABLE `tb_client_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_client_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_data_format`
--

DROP TABLE IF EXISTS `tb_data_format`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_data_format` (
  `id` varchar(20) NOT NULL COMMENT '数据格式编号',
  `task_id` varchar(20) NOT NULL COMMENT '任务编号',
  `name` varchar(100) DEFAULT '' COMMENT '数据名称',
  `type` varchar(100) DEFAULT '' COMMENT '数据类型',
  `size` varchar(100) DEFAULT '28 28' COMMENT 'image数据尺寸',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_data_format`
--

LOCK TABLES `tb_data_format` WRITE;
/*!40000 ALTER TABLE `tb_data_format` DISABLE KEYS */;
INSERT INTO `tb_data_format` VALUES ('603192108907503616','603192108861366272','图片','image','28 28','2021-07-23 19:50:05','2021-07-23 19:50:05'),('603192108907503617','603192108861366272','值','number','','2021-07-23 19:50:05','2021-07-23 19:50:05'),('603192108907503618','603192108861366272','辅助数据1','number','-','2021-07-23 19:50:05','2021-07-23 19:50:05'),('603192108907503619','603192108861366272','辅助数据2','number','-','2021-07-23 19:50:05','2021-07-23 19:50:05'),('603192108907503620','603192108861366272','辅助数据3','number','-','2021-07-23 19:50:05','2021-07-23 19:50:05'),('603192108907503621','603192108861366272','辅助数据4','number','-','2021-07-23 19:50:05','2021-07-23 19:50:05'),('603225433911074816','603225433852354560','图片','image','28 28','2021-07-23 22:02:30','2021-07-23 22:02:30'),('603225433911074817','603225433852354560','值','number','','2021-07-23 22:02:30','2021-07-23 22:02:30'),('603225433911074818','603225433852354560','辅助数据1','string','','2021-07-23 22:02:30','2021-07-23 22:02:30'),('603225433911074819','603225433852354560','辅助数据2','string','','2021-07-23 22:02:30','2021-07-23 22:02:30'),('603225433911074820','603225433852354560','辅助数据3','string','','2021-07-23 22:02:30','2021-07-23 22:02:30'),('603225433911074821','603225433852354560','辅助数据4','string','','2021-07-23 22:02:30','2021-07-23 22:02:30'),('603225433911074822','603225433852354560','辅助数据5','string','','2021-07-23 22:02:30','2021-07-23 22:02:30'),('603808783482757120','603808783403065344','图片','image','28 28','2021-07-25 12:40:32','2021-07-25 12:40:32'),('603808783482757121','603808783403065344','值','number','','2021-07-25 12:40:32','2021-07-25 12:40:32');
/*!40000 ALTER TABLE `tb_data_format` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_global_model`
--

DROP TABLE IF EXISTS `tb_global_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_global_model` (
  `id` varchar(20) NOT NULL COMMENT '全局模型编号',
  `last_global_model` varchar(20) DEFAULT NULL COMMENT '延续的上一个全局模型',
  `task_id` varchar(20) NOT NULL COMMENT '任务名称',
  `file` varchar(100) DEFAULT '' COMMENT '全局模型地址',
  `client_model_ids` varchar(1000) DEFAULT '' COMMENT '所引用的客户端模型',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_global_model`
--

LOCK TABLES `tb_global_model` WRITE;
/*!40000 ALTER TABLE `tb_global_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_global_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_oauth_access_tokens`
--

DROP TABLE IF EXISTS `tb_oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_oauth_access_tokens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `fr_user_id` varchar(20) DEFAULT '0' COMMENT '外键:tb_users表id',
  `client_id` int unsigned DEFAULT '1' COMMENT '普通用户的授权，默认为1',
  `token` varchar(600) DEFAULT NULL,
  `action_name` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '' COMMENT 'login|refresh|reset表示token生成动作',
  `scopes` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '[*]' COMMENT '暂时预留,未启用',
  `revoked` tinyint(1) DEFAULT '0' COMMENT '是否撤销',
  `client_ip` varchar(128) DEFAULT NULL COMMENT 'ipv6最长为128位',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`fr_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_oauth_access_tokens`
--

LOCK TABLES `tb_oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `tb_oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `tb_oauth_access_tokens` VALUES (1,'1',1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiJ6aGFuZ3J1aXl1YW4iLCJwaG9uZSI6IiIsImV4cCI6MTYyNzA3MzQzMywibmJmIjoxNjI3MDQ0NjIzfQ.dgfHx075tok__yZpfGd3pqnbkYQWZuQsZBA6MMCAaMI','login','[*]',0,'::1','2021-07-23 20:50:33','2021-07-23 20:50:33','2021-07-24 04:50:33');
/*!40000 ALTER TABLE `tb_oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_task`
--

DROP TABLE IF EXISTS `tb_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_task` (
  `id` varchar(20) NOT NULL COMMENT '任务编号',
  `category_id` varchar(20) NOT NULL COMMENT '分类编号',
  `name` varchar(100) DEFAULT '' COMMENT '联邦学习任务名称',
  `description` varchar(3000) DEFAULT '' COMMENT '联邦学习描述',
  `file` varchar(100) DEFAULT '' COMMENT '封面图片地址',
  `init_model_file` varchar(100) DEFAULT '' COMMENT '初始化文件地址',
  `super_params` varchar(1000) DEFAULT '' COMMENT '超参数设置',
  `max_times_per_client` varchar(20) DEFAULT '2' COMMENT '每个客户端可以参与的训练的次数',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_task`
--

LOCK TABLES `tb_task` WRITE;
/*!40000 ALTER TABLE `tb_task` DISABLE KEYS */;
INSERT INTO `tb_task` VALUES ('603192108861366272','1','手写数字识别','描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别描述手写数字识别','/images/back/mStsKM4XXTbuxf1SrRUY.webp','/models/globalModel/0KebwzKLUjXIKu4619UJ.json','lr=0.1','7','2021-07-23 19:50:05','2021-07-23 19:50:05'),('603225433852354560','2','鸢尾花分类','描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类描述鸢尾花分类','/images/back/GveSLN0nRjM2IHs0vsqS.jpeg','/models/globalModel/lh3fOGVq2iLpaunufZDR.json','lr=0.1','4','2021-07-23 22:02:30','2021-07-23 22:02:30'),('603808783403065344','1','波士顿房价预测','波士顿房屋这些数据于1978年开始统计，共506个数据点，涵盖了麻省波士顿不同郊区房屋14种特征的信息。波士顿房屋这些数据于1978年开始统计，共506个数据点，涵盖了麻省波士顿不同郊区房屋14种特征的信息。','/images/back/rDqCtol4JzAJPgNrwqVR.webp','/models/globalModel/7EixkV9ogHXnJgPV5Cnn.json','lr=0.1','3','2021-07-25 12:40:32','2021-07-25 12:40:32');
/*!40000 ALTER TABLE `tb_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_task_user`
--

DROP TABLE IF EXISTS `tb_task_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_task_user` (
  `id` varchar(20) NOT NULL COMMENT '任务-用户关系表编号',
  `task_id` varchar(20) NOT NULL COMMENT '任务编号',
  `task_name` varchar(100) DEFAULT '' COMMENT '联邦学习任务名称',
  `user_id` varchar(20) NOT NULL COMMENT '用户编号',
  `user_name` varchar(100) DEFAULT '' COMMENT '用户名称',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_task_user`
--

LOCK TABLES `tb_task_user` WRITE;
/*!40000 ALTER TABLE `tb_task_user` DISABLE KEYS */;
INSERT INTO `tb_task_user` VALUES ('603211140125696000','603192108861366272','手写数字识别','1','zhangruiyuan','2021-07-23 21:05:42','2021-07-23 21:05:42'),('603594798305124352','603225433852354560','鸢尾花分类','1','zhangruiyuan','2021-07-24 22:30:14','2021-07-24 22:30:14');
/*!40000 ALTER TABLE `tb_task_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_users`
--

DROP TABLE IF EXISTS `tb_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT '' COMMENT '账号',
  `pass` varchar(128) DEFAULT '' COMMENT '密码',
  `real_name` varchar(100) DEFAULT '' COMMENT '姓名',
  `phone` char(64) DEFAULT '' COMMENT '手机',
  `status` tinyint DEFAULT '1' COMMENT '状态',
  `remark` varchar(1000) DEFAULT '' COMMENT '备注',
  `last_login_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_login_ip` char(100) DEFAULT '' COMMENT '最近一次登录ip',
  `login_times` varchar(20) DEFAULT '0' COMMENT '累计登录次数',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_users`
--

LOCK TABLES `tb_users` WRITE;
/*!40000 ALTER TABLE `tb_users` DISABLE KEYS */;
INSERT INTO `tb_users` VALUES (1,'zhangruiyuan','a53ec42f2a2914067f6119599cae318b','','',1,'','2021-07-23 19:46:27','','0','2021-07-23 19:46:27','2021-07-23 19:46:27');
/*!40000 ALTER TABLE `tb_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-25 17:38:06
