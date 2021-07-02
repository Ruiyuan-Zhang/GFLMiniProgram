import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtProgress, AtDivider } from 'taro-ui'

import user_img from '@/assets/images/test.png'

import './index.less'

const Item = ({e}) =>(
    <View className='item' onClick={()=>{
        Taro.navigateTo({
            url:'/pages/task_schedule/index'
        })
    }}>
        <Image className='image' mode='widthFix' src={e.image}></Image>
        <View className='content'>
            <View className='name'>{e.name}</View>
            <View className='progress'>训练进度：<View className='progress_bar'><AtProgress percent={e.progress} status='progress' /></View></View>
            <View className='train_time'>训练时间：{e.train_time}h</View>
        </View>
    </View>
)

export default () => {
    const res = [
        {
            id: 1,
            image: user_img,
            name:'刀具表面缺陷检测及分类方法',
            progress: 47,
            train_time:1.06,
        },{
            id: 2,
            image: user_img,
            name:'刀具表面缺陷检测及分类方法',
            progress: 80,
            train_time:1.06,
        },{
            id: 3,
            image: user_img,
            name:'刀具表面缺陷检测及分类方法',
            progress: 20,
            train_time:1.06,
        },
        {
            id: 4,
            image: user_img,
            name:'刀具表面缺陷检测及分类方法',
            progress: 48,
            train_time:1.06,
        },
        {
            id: 5,
            image: user_img,
            name:'刀具表面缺陷检测及分类方法',
            progress: 7,
            train_time:1.06,
        },
    ]
    return(
        <View className='doing'>
            { res.map(e=><Item key={e.id} e={e} />) }
            <AtDivider content='没有更多了' />
        </View>
    )
}