import { useState, useContext, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtInput } from 'taro-ui'
import Taro,{useDidShow} from '@tarojs/taro'
import { TabIndexContext } from '../../store/tabIndex'
import user_img from '@/assets/images/user.png'
import './index.less'

export default () => {
  const {tabIndex, dispatch} = useContext(TabIndexContext)
  useDidShow(() => {
      dispatch({
          type:'change',
          payload: 'mine'
      })
  })

  const [ts, setTs] = useState('127.0.0.1')
  const [tp, setTp] = useState('8080')
  const [as, setAs] = useState('127.0.0.1')
  const [ap, setAp] = useState('8081')

  return (
    <View className='mine'>
      <AtAvatar circle size='large' image={user_img} />
      <Text className='name'> 张瑞元的大大大世界 </Text>
      <AtInput name='train_server' title='训练服务器' type='text' value={ts} onChange={setTs} />
      <AtInput name='train_port' title='端口号' type='text' value={tp} onChange={setTp} />
      <AtInput name='aggregation_server' title='聚合服务器' type='text' value={as} onChange={setAs} />
      <AtInput name='aggregation_port' title='端口号' type='text' value={ap} onChange={setAp} />
    </View>
  )
}