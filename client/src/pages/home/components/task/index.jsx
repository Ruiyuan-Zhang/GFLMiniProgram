import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import IndexItem from '@/components/TaskItem/index'
import icon_more from './icon_more.svg'
import './index.less'
import { useEffect, useState } from 'react'
import request from '@/utils/request'


const Index = ({title,more_url}) => {

    const [list, setList] = useState([])
    useEffect(async()=>{
        console.log(title)
        // if (title === '为您推荐任务'){
            let res = await request({
                url: '/v1/admin/task/list?page=1&limit=3',
                method: 'get'
            })
            if (res instanceof Error) return
            setList(res.list)
        // }
    },[])

    return(
        <View className='index'>
            <View className='header'>
                <View>{title}</View>
                <View className='more' onClick={()=>Taro.navigateTo({url:more_url})}>更多<Image className='icon_more' src={icon_more} mode='widthFix' /></View>
            </View>
            { list.map(item => <View className='item'><IndexItem key={item.id} data={item}></IndexItem></View>) }
        </View> 
    )
}


export default Index