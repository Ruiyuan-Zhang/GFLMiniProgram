import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import './index.less'

const Index = ({current})=>{
    const pageList = [
        '/pages/home/index',
        '/pages/category/index',
        '/pages/task/index',
        '/pages/mine/index',
    ]
    return(
        <View className='index'>
            <AtTabBar
              fixed
              tabList={[
                { title: '首页' },
                { title: '任务分类' },
                { title: '我的任务' },
                { title: '我的' }
              ]}
              onClick={e=>{
                  if (e !== current){
                    Taro.navigateTo({url:pageList[e]})
                  }
                }}
              current={current}
            />
        </View>
    )
}

export default Index