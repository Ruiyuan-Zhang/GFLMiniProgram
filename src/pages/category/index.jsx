import { View } from '@tarojs/components'
import TabBar from '@/components/TabBar'

import c_a from '@/assets/images/category_a.png'
import c_cv from '@/assets/images/category_cv.png'
import c_g from '@/assets/images/category_g.png'
import c_ml from '@/assets/images/category_ml.png'
import c_nlp from '@/assets/images/category_nlp.png'
import c_sr from '@/assets/images/category_sr.png'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

const Item = ({src, children}) =>{
  const bg = `background:url(${src}) no-repeat center`
  return(
    <View className='item' style={bg}>
      {children}
    </View>
  )
}

export default () => {
  return (
    <View className='category'>
      <Item src={c_a} >军事</Item>
      <Item src={c_cv} >计算机视觉</Item>
      <Item src={c_g} >政务</Item>
      <Item src={c_ml} >机器学习</Item>
      <Item src={c_nlp} >自然语言处理</Item>
      <Item src={c_sr} >语音识别</Item>
      <TabBar current={1} />
    </View>
  )
}
