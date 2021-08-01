import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtProgress, AtDivider } from 'taro-ui'
import request from '@/utils/request'
import { file_url } from '@/config'
import './index.less'
import { useEffect, useState } from 'react'

const Item = ({data}) =>{
    const {id, file, name} = data
    return (
    <View className='item' onClick={()=>{
        Taro.navigateTo({
            url:'/packageTask/pages/task_schedule/index?id='+id
        })
    }}>
        <Image className='image' mode='widthFix' src={file_url+file}></Image>
        <View className='content'>
            <View className='name'>{name}</View>
            <View className='progress'>训练进度：<View className='progress_bar'><AtProgress percent={40} status='progress' /></View></View>
            <View className='train_time'>训练时间：{1.0}h</View>
        </View>
    </View>
    )
}

export default () => {
    const [taskList, setTaskList] = useState([])

    // 请求加入的任务列表
    useEffect(async()=>{
        let res = await request({url:'/v1/admin/task/taskJoinList',method:'get',data:{page:1,limit:100,userName:"zhangruiyuan"}})
        if (res instanceof Error)return
        let list = res.data
        setTaskList(list)
    },[])

    return(
        <View className='doing'>
            { taskList.map(e=><Item key={e.id} data={e} />) }
            <AtDivider content='没有更多了' />
        </View>
    )
}