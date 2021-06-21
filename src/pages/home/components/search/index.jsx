import { View } from '@tarojs/components'
import { useState } from 'react'
import { AtSearchBar } from 'taro-ui'



import './index.less'

export default function Index (){

    const [value, setValue] = useState('')

    return (
      <View className='index'>
        <AtSearchBar 
          placeholder='请输入您要查询任务的关键字'
          actionName='搜索'
          value={value}
          onChange={setValue}
          onActionClick={()=>console.log(value)}
        />
      </View>
    )
  }