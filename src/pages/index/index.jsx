
import { View } from '@tarojs/components'
import Taro, {useDidShow} from '@tarojs/taro'

import bg from '@/assets/images/index_bg.png'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

// 函数式编程
export default function Index (){
  
  useDidShow(()=>{
    setTimeout(()=>{
      Taro.redirectTo({
        url: '/pages/home/index'
      })
    },1000)
  })

  return (
    <View className='index'>
      <image className='bg' src={bg}></image>
    </View>
  )
}