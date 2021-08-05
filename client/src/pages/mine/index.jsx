import { useState, useContext, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtInput } from 'taro-ui'
import {useDidShow} from '@tarojs/taro'
import { TabIndexContext } from '../../store/tabIndex'
import { getUser} from '@/common/user'
import {file_url} from '@/config'
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

  const {user_name} = getUser()

  return (
    <View className='mine'>
      <AtAvatar circle size='large' image={file_url+'/images/client/user.png'} />
      <Text className='name'> 你好，{user_name} </Text>
      <AtInput name='train_server' title='训练服务器' type='text' value={ts} onChange={setTs} />
      <AtInput name='train_port' title='端口号' type='text' value={tp} onChange={setTp} />
      <AtInput name='aggregation_server' title='聚合服务器' type='text' value={as} onChange={setAs} />
      <AtInput name='aggregation_port' title='端口号' type='text' value={ap} onChange={setAp} />
    </View>
  )
}