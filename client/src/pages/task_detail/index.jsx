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
import { getUser } from '@/common/user'


export default () => {
    const columns = [
        { title: '名称', dataIndex: 'dataFormatName'},
        { title: '数据格式', dataIndex: 'dataFormatType'},
        { title: '数据尺寸', dataIndex: 'dataFormatSize'},
        { title: '数据格式编号', dataIndex: 'dataFormatTaskId'},
    ]

    const [task,setTask] = useState({})
    const [dataFormats,setDataFormats] = useState([])
    const [have,setHave] = useState(null)
    const [read, setRead] = useState(false)
    
    // 获取详情页信息
    useEffect(async()=>{
        const id = getCurrentInstance().router.params.id
        let res = await request({url:`/v1/admin/task/detailWithFormat?id=${id}`,method:'get'})
        if (res instanceof Error)return
        setTask(res.data)
        setDataFormats(res.data.dataFormats)
    },[])

    // 判断用户是否已经加入了该任务
    useEffect(async()=>{
        const id = getCurrentInstance().router.params.id
        let res = await request({url:`/v1/admin/task/taskUserHave`,showToast:false,data:{
            userName: getUser().user_name,
            taskId:id
        }})
        if (res instanceof Error) return 
        setHave(res.data)
    },[])

    // 加入到任务中
    const joinTask = async () =>{
        if (read){
            let user = getUser()
            let res = await request({url:`/v1/admin/task/taskUserAdd`,data:{
                taskId:task.idStr,
                taskName:task.name,
                userId:user.userId+'',
                userName:user.user_name,
            }})
            if (res instanceof Error) return
            // 通过全局变量传递信息
            globalVariables.nowAddTask = task
            Taro.navigateTo({url:'/pages/get_data/index'})
        }else {
            Taro.showToast({icon:'none', title:'请确认阅读《xxx用户数据隐私保护规范》'})
        }
    }

    return(
        <View className='task-detail'>
            <View>{task.name}</View>
            {/* 一 */}
            <View className='task'>
                <View className='title'>一、任务介绍</View>
                <View className='image'>
                    <Image src={file_url+task.file} mode='widthFix'></Image>
                </View>
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
            
            {have
            ?<>
                <View className='goCheck'>
                    <AtButton type='primary' size='normal' onClick={()=>{
                        Taro.navigateTo({url:'/pages/task/index'})
                    }}>您已加入该任务，立即查看</AtButton>
                </View>
            </>
            :<>
            <View className='tip'>
                <Radio className='tip_btn' checked={read} onClick={()=>setRead(!read)}></Radio>
                <View className='tip_info'>我已阅读<View style='color:blue'>《xxx用户数据隐私保护规范》</View></View>
            </View>
            <View className='btn'>
                <AtButton size='small' type='secondary'>取消</AtButton>
                <AtButton size='small' type='primary' onClick={joinTask}>
                    加入任务
                </AtButton>
            </View>
            </>
            }
            
        </View>
    )
}