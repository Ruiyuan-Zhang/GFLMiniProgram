import { View, Image, Radio } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import Table from 'taro3-table'
import './index.less'
import { useEffect, useState } from 'react'
import request from '@/utils/request'
import { getCurrentInstance } from '@tarojs/taro'
import { file_url } from '@/config'
import { globalVariables } from '@/common/enum'


export default () => {
    const columns = [
        { title: '名称', dataIndex: 'dataFormatName'},
        { title: '数据格式', dataIndex: 'dataFormatType'},
        { title: '数据尺寸', dataIndex: 'dataFormatSize'},
        { title: '数据格式编号', dataIndex: 'dataFormatTaskId'},
    ]

    const [task,setTask] = useState({})
    const [dataFormats,setDataFormats] = useState([])
    const [read, setRead] = useState(false)
    
    // 获取详情页信息
    useEffect(async()=>{
        const id = getCurrentInstance().router.params.id
        let res = await request({url:`/v1/admin/task/detailWithFormat?id=${id}`,method:'get'})
        if (res instanceof Error)return
        setTask(res.data)
        setDataFormats(res.data.dataFormats)
    },[])

    
    return(
        <View className='task-detail'>
            <View>{task.name}</View>
            {/* 一 */}
            <View className='task'>
                <View className='title'>一、任务介绍</View>
                <Image className='image' src={file_url+task.file} mode='widthFix'></Image>
                <View className='content'>{task.description} </View>
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
                  dataSource={dataFormats} 
                  style={{ width: '92vw', marginTop:'20rpx', marginBottom:'20rpx' }} 
                  titleStyle={{ fontSize: '30rpx'}}
                  rowStyle={{minHeight: '60rpx'}} 
                  colStyle={{minHeight: '60rpx'}} 
                  scroll={{ x: '100vw', y: '50vh' }} 
                />
            </View>
            <View className='tip'>
                <Radio className='tip_btn' checked={read} onClick={()=>setRead(!read)}></Radio>
                <View className='tip_info'>我已阅读<View style='color:blue'>《xxx用户数据隐私保护规范》</View></View>
            </View>
            <View className='btn'>
                <AtButton size='small' type='secondary'>取消</AtButton>
                <AtButton size='small' type='primary' onClick={
                    ()=>{
                        if (read){
                            globalVariables.nowAddTask = task
                            Taro.navigateTo({url:'/pages/get_data/index'})
                        }else {
                            Taro.showToast({icon:'none', title:'请确认阅读《xxx用户数据隐私保护规范》'})
                        }
                    }
                }>
                    加入任务
                </AtButton>
            </View>
        </View>
    )
}