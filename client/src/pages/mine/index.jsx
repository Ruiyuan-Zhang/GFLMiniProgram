import { useState, useContext, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
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

  const [wxUser,setWxUser] = useState({userInfo:{}})


  useState(async()=>{

    // 请求授权的信息
    let set = await Taro.getSetting()
    if (!set.authSetting['scope.userInfo']) {
        let res = await Taro.authorize({
            scope: 'scope.userInfo'
        })
        if (res.errMsg.indexOf('ok')<0){
            Taro.showToast({icon:'none',title:'授权失败'})
            return 
        }
    }

    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    // Taro.getUserProfile({
    //   desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
    // 必须是在用户已经授权的情况下调用
    let user = await Taro.getUserInfo()
    setWxUser(user)
  },[])

  const {nickName,avatarUrl,gender,province,city,country} = wxUser.userInfo
  console.log(avatarUrl)

  return (
    <View className='mine'>
      <AtAvatar circle size='large' image={avatarUrl?avatarUrl:file_url+'/images/client/user.png'} />
      <Text className='name'> 你好，{user_name} </Text>
      <AtInput name='train_server' title='训练服务器' type='text' value={ts} onChange={setTs} />
      <AtInput name='train_port' title='端口号' type='text' value={tp} onChange={setTp} />
      <AtInput name='aggregation_server' title='聚合服务器' type='text' value={as} onChange={setAs} />
      <AtInput name='aggregation_port' title='端口号' type='text' value={ap} onChange={setAp} />

    </View>
  )
}