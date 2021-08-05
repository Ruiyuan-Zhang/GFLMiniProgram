import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { useState } from 'react'
import {useDidShow} from '@tarojs/taro'
import { TabIndexContext } from '../../store/tabIndex'
import { useContext } from 'react'
import Doing from './components/doing'
import './index.less'

export default () => {
  const {tabIndex, dispatch} = useContext(TabIndexContext)
  useDidShow(() => {
      dispatch({
          type:'change',
          payload: 'task'
      })
  })

  const tabList = [{ title: '进行中' }, { title: '已完成' }, { title: '已取消' }]
  const [current, setCurrent] = useState(0)
  return (
    <View className='task'>
      <AtTabs current={current} tabList={tabList} onClick={setCurrent}>
        <AtTabsPane current={current} index={0} >
          <Doing></Doing>
          {/* <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View> */}
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}
