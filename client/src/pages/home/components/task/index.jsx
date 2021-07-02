import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import IndexItem from '@/components/TaskItem/index'
import icon_more from './icon_more.svg'
import './index.less'


const Index = ({
    title,
    more_url,
    items,
}) => {
    return(
        <View className='index' onClick={()=>{
            Taro.navigateTo({
                url:'/pages/task_detail/index'
            })
        }}>
            <View className='header'>
                <View>{title}</View>
                <View className='more' onClick={()=>Taro.navigateTo({url:more_url})}>更多<Image className='icon_more' src={icon_more} mode='widthFix' /></View>
            </View>
            { items.map(item => <View className='item'><IndexItem key={item.id} data={item}></IndexItem></View>) }
        </View>
    )
}


export default Index