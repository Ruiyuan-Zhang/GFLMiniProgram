import { View } from '@tarojs/components'
import { useState } from 'react'
import { AtSearchBar } from 'taro-ui'
import Taro from '@tarojs/taro'
import styles from './index.module.less'

export default function Index (){

    const [value, setValue] = useState('')

    const select = () => Taro.navigateTo({url:'/packageTask/pages/task_list/index?keyword='+value})

    return (
      <View className={styles.index}>
        <AtSearchBar 
          placeholder='请输入您要查询任务的关键字'
          actionName='搜索'
          value={value}
          onChange={setValue}
          onActionClick={select}
        />
      </View>
    )
  }