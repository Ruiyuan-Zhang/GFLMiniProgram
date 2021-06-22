import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import test from '@/assets/images/test.png'

import icon_more from './icon_more.svg'
import './index.less'


function IndexItem(){
    return(
        <View className='item'>
            <Image className='img' mode='widthFix' src={test}></Image>
            <View className='info'>
                <View className='title'>火焰识别模型</View>
                <View className='content'>该模型需要大约10,000条火焰数据参与，训练完成后对参与者按比例奖励，免费提供模型使用权...</View>
                <View className='footer'> 
                    <View >浙江大学</View>
                    <View >2021-06-01 09:01 发布</View>
                </View>
            </View>
        </View>
    )
}

const Index = ({
    title,
    more_url,
    items,
}) => {
    return(
        <View className='index'>
            <View className='header'>
                <View>{title}</View>
                <View className='more' onClick={()=>Taro.navigateTo({url:more_url})}>更多<Image className='icon_more' src={icon_more} mode='widthFix' /></View>
            </View>
            { items.map(item => <IndexItem key={item.id} data={item}></IndexItem>) }
        </View>
    )
}


export default Index