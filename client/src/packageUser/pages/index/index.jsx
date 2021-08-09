
import { View } from '@tarojs/components'
import Taro, {useDidShow} from '@tarojs/taro'
import {file_url} from '@/config'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

// 函数式编程
export default function Index (){
  
  useDidShow(()=>{
    setTimeout(()=>{
      Taro.switchTab({
        url: '/pages/home/index'
      })
    },3000)
  })

  return (
    <View className='index'>
      <image className='bg' src={file_url+'/images/client/index_bg.png'}></image>
    </View>
  )
}