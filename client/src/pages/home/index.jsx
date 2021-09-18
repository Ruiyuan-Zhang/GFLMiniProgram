import {View} from '@tarojs/components'
import {AtDivider} from 'taro-ui'
import {useDidShow, useShareAppMessage, useShareTimeline} from '@tarojs/taro'
import {TabIndexContext} from '../../store/tabIndex'
import Header from './components/header'
import Search from './components/search'
import Task from './components/task'
import {useContext } from 'react'
import {appName,shareImages,getShareImage} from '../../config/index'

import './index.less'

export default function Home() {
    const {tabIndex, dispatch} = useContext(TabIndexContext)

    useDidShow(() => {
        dispatch({type: 'change', payload: 'home'})
    })

      // 转发
    useShareAppMessage(res=>{
        return {
            title: `${appName} 微信小程序也能做联邦学习啦！！！`,
            path: '/pages/home/index',
            imageUrl: getShareImage()
        }
    })

    // 朋友圈
    useShareTimeline(()=>{
        return {
            title: `${appName} 微信小程序也能做联邦学习啦！！！`,
            path: '/pages/home/index',
            imageUrl: getShareImage()
        }
    })

    return (
        <View className='home'>
            <Header/>
            <Search/>
            <Task title='为您推荐任务' logo='tui' more_url='/packageTask/pages/task_list/index?kind=推荐'/>
            <Task title='今日份有趣任务' logo='fun' more_url='/packageTask/pages/task_list/index?kind=有趣'/>
            <Task title='当前火热任务' logo='hot' more_url='/packageTask/pages/task_list/index?kind=火热'/>
            <AtDivider content='没有更多了'/>
        </View> 
    )
}