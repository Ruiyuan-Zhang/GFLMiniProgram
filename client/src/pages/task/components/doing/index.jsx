import { View, Image } from '@tarojs/components'
import Taro, { useDidShow, usePullDownRefresh } from '@tarojs/taro'
import { AtProgress, AtDivider } from 'taro-ui'
import request from '@/utils/request'
import { file_url } from '@/config'
import './index.less'
import { getUser } from '@/common/user'
import { useState } from 'react'

const Item = ({data}) =>{
    const {id, file, name, tuCreateAt, description} = data
    return (
    <View className='item' onClick={()=>{
        Taro.navigateTo({
            url:'/packageTask/pages/task_schedule/index?id='+id
        })
    }}>
        <Image className='image' mode='widthFix' src={file_url+file}></Image>
        <View className='content'>
            <View className='name'>{name}</View>
            {/* <View className='progress'>训练进度：<View className='progress_bar'><AtProgress percent={40} status='progress' /></View></View> */}
            <View className='description'>{description}</View>
            <View className='tuCreateAt'>加入时间：{tuCreateAt&&tuCreateAt.substr(0,19).replace("T"," ")}</View>
        </View>
    </View>
    )
}

export default () => {
    const [taskList, setTaskList] = useState([])

    // // 请求加入的任务列表
    const getTaskList = async () =>{
        let res = await request({url:'/v1/admin/task/taskJoinList',method:'get',data:{page:1,limit:100,userName:getUser().user_name}})
        if (res instanceof Error)return
        let list = res.data
        setTaskList(list)
    }

    useDidShow(getTaskList)
    usePullDownRefresh(async()=>{
        await getTaskList()
        Taro.stopPullDownRefresh()
    })


    return(
        <View className='doing'>
            { taskList.map(e=><Item key={e.id} data={e} />) }
            <AtDivider content='没有更多了' />
        </View>
    )
}