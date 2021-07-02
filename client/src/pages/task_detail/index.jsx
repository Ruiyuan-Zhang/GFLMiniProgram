import { View, Image, Radio } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import Table from 'taro3-table'
import user_img from '@/assets/images/user.png'
import './index.less'


export default () => {
    const dataSource = [
        {name:'图片', dataType:'jpg,png',remarks:'100x100',isRequired:true},
        {name:'长度', dataType:'float',remarks:'单位cm',isRequired:false},
        {name:'质量', dataType:'float',remarks:'单位kg',isRequired:false},
        {name:'材质', dataType:'varchar',remarks:'中文描述',isRequired:true},
        {name:'划痕', dataType:'boolean',remarks:'是否有划痕',isRequired:true},
        {name:'凹坑', dataType:'boolean',remarks:'是否有凹坑',isRequired:true},
        {name:'涂层剥落', dataType:'boolean',remarks:'是否有剥落',isRequired:true},
        {name:'边缘豁口', dataType:'boolean',remarks:'是否有豁口',isRequired:true},
    ]
    const columns = [
        { title: '名称', dataIndex: 'name'},
        { title: '数据格式', dataIndex: 'dataType'},
        { title: '备注', dataIndex: 'remarks'},
        { title: '是否必须', dataIndex: 'isRequired', render: r => r?'是':'否'},
    ]

    return(
        <View className='task-detail'>
            <View>基于机器学习的刀具表面缺陷检测及分类方法</View>
            {/* 一 */}
            <View className='task'>
                <View className='title'>一、任务介绍</View>
                <Image className='image' src={user_img} mode='widthFix'></Image>
                <View className='content'>刀具在生产的过程中,由于人员、机器、环境等多方面原因,刀具的表面会出现各种缺陷,如划痕、碰撞凹坑、涂层剥落和边缘豁口;这些缺陷会严重影响刀具的质量和外观,对于刀具的缺陷检测,目前主要采用人工目检的方式,人工检测方法效率和准确率都比较低;为解决上述问题,提出一种刀具缺陷的自动化检测及分类算法;针对刀具图像的预处理,提出了一种基于双边滤波的降噪方法和基于差分的对比度增强算法;对于刀具的缺陷检测任务,提出了基于图像差分的缺陷检测算法;对于缺陷的分类任务,提出了一种基于SVM的分类算法,即通过提取缺陷区域的形状、纹理等特征来训练SVM分类器;最后对提出的缺陷检测及分类算法进行实验,结果表明算法的缺陷检出率达97.2%,分类准确率可达94.3%;算法能够很好地满足工业需求,可以替代人工实现刀具缺陷的自动化和高效率检测。 </View>
            </View>
            {/* 二 */}
            <View className='task'>
                <View className='title'>二、训练代码</View>
                <View className='content'>
                    <View>1. 聚合算法</View>
                    <View className='handle'>
                        <View>预览</View>
                        &nbsp;&nbsp;
                        <View>下载</View>
                    </View>
                </View>
                <View className='content'>
                    <View>2. 本地训练代码</View>
                    <View className='handle'>
                        <View>预览</View>
                        &nbsp;&nbsp;
                        <View>下载</View>
                    </View>
                </View>
            </View>
            {/* 三 */}
            <View className='task'>
                <View className='title'>三、数据要求</View>
                <Table 
                  columns={columns} 
                  dataSource={dataSource} 
                  style={{ width: '92vw', marginTop:'20rpx', marginBottom:'20rpx' }} 
                  titleStyle={{ fontSize: '30rpx'}}
                  rowStyle={{minHeight: '60rpx'}} 
                  colStyle={{minHeight: '60rpx'}} 
                  scroll={{ x: '100vw', y: '50vh' }} 
                />
            </View>
            <View className='tip'>
                <Radio className='tip_btn'></Radio>
                <View className='tip_info'>我已阅读<View style='color:blue'>《xxx用户数据隐私保护规范》</View></View>
            </View>
            <View className='btn'>
                <AtButton size='small' type='secondary'>取消</AtButton>
                <AtButton size='small' type='primary' onClick={
                    ()=> Taro.navigateTo({url:'/pages/get_data/index'})
                }>加入任务</AtButton>
            </View>
        </View>
    )
}