import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtInput } from 'taro-ui'
import TabBar from '@/components/TabBar'

import user_img from '@/assets/images/user.png'

import './index.less'

export default () => {

  const [ts, setTs] = useState('127.0.0.1')
  const [tp, setTp] = useState('8080')
  const [as, setAs] = useState('127.0.0.1')
  const [ap, setAp] = useState('8081')

  return (
    <View className='mine'>
      <AtAvatar circle size='large' image={user_img} />
      <Text > 张瑞元的大大大世界 </Text>
      <AtInput title='训练服务器' type='text' value={ts} onChange={setTs} />
      <AtInput title='端口号' type='text' value={tp} onChange={setTp} />
      <AtInput title='聚合服务器' type='text' value={as} onChange={setAs} />
      <AtInput title='端口号' type='text' value={ap} onChange={setAp} />
      <TabBar current={3}></TabBar>
    </View>
  )
}