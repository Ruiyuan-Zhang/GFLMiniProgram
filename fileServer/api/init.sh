#!/bin/zsh
# zsh /Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/api/init.sh
# 初始化系统状态

echo "start init GFLmini data..."

nowPath="/Users/zhangruiyuan/TaroProjects/GFLMiniProgram"
echo "your GFLmini path is "$nowPath
echo ""

# -p 确保目录名称存在，不存在的就建一个。
echo "start to mkdir some necessary path..."
mkdir -p $nowPath"/fileServer/tmp/"
mkdir -p $nowPath"/fileServer/test/"
mkdir -p $nowPath"/fileServer/images/back/"
mkdir -p $nowPath"/fileServer/models/clientModel/"
mkdir -p $nowPath"/fileServer/models/globalModel/"
mkdir -p $nowPath"/fileServer/models/globalModelSameDir/"
echo ""

# 清空原有的目录中的内容
echo "start to delete old file..."
rm -r $nowPath"/tmp/"*
rm -r $nowPath"/test/"*
rm -r $nowPath"/images/back/"*
rm -r $nowPath"/models/clientModel/"*
rm -r $nowPath"/models/globalModel/"*
rm -r $nowPath"/models/globalModelSameDir/"*
echo ""

# 初始化mysql
echo "start to init your mysql environment..."
echo "you can edit your sql file in "$nowPath/docs/database/test.sql
mysql -h 127.0.0.1 -P 3306 -u root   < $nowPath/docs/database/test.sql
echo ""

echo "inti successful!"