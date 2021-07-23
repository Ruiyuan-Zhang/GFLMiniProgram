import { View } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import Taro from '@tarojs/taro'
import TabBar from '@/components/TabBar'

import './index.less'

import Header from './components/header'
import Search from './components/search'
import Task from './components/task'
import { useEffect } from 'react'


export default function Home (){

  return (
    <View className='home'>
      <Header />
      <Search />
      <Task title='为您推荐任务' more_url='/pages/index/index'/>
      <Task title='今日份有趣任务' more_url='/pages/index/index' />
      <Task title='当前火热任务' more_url='/pages/index/index'  />
      <AtDivider content='没有更多了' />
      <TabBar current={0} />
    </View>
  )
}