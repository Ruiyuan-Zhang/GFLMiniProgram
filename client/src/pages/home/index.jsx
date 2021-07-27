import {View} from '@tarojs/components'
import {AtDivider} from 'taro-ui'
import Taro, {useDidShow} from '@tarojs/taro'
import {TabIndexContext} from '../../store/tabIndex'
import Header from './components/header'
import Search from './components/search'
import Task from './components/task'
import {useContext, useEffect} from 'react'
import './index.less'

export default function Home() {
    const {tabIndex, dispatch} = useContext(TabIndexContext)

    useDidShow(() => {
        dispatch({type: 'change', payload: 'home'})
    })

    return (
        <View className='home'>
            <Header/>
            <Search/>
            <Task title='为您推荐任务' more_url='/pages/index/index'/>
            <Task title='今日份有趣任务' more_url='/pages/index/index'/>
            <Task title='当前火热任务' more_url='/pages/index/index'/>
            <AtDivider content='没有更多了'/>
        </View>
    )
}