import { View,Text } from '@tarojs/components' 
import IndexItem from '@/components/TaskItem/index'
import { getCurrentInstance, useDidShow } from '@tarojs/taro'
import {AtDivider} from 'taro-ui'
import request from '@/utils/request'
import { AtSearchBar } from 'taro-ui'
import styles from './index.module.less'
import { useEffect, useState } from 'react'

const index = () =>{

    const [list, setList] = useState([])
    const select = async ({kind, categoryId, keyword}) => {
        let url = `/v1/admin/task/select?page=1&limit=100`
        kind&&(url+=`&kind=${kind}`)
        categoryId&&(url+=`&categoryId=${categoryId}`)
        keyword&&(url+=`&keyword=${keyword}`)
        let res = await request({url,method: 'get'})
        if (res instanceof Error) return
        console.log(res.list)
        res.list.forEach(l=>l.key=l.id)
        setList(res.list)
    }

    const {kind, categoryId, keyword} = getCurrentInstance().router.params
    useEffect(async()=>{
        // kind表示 推荐/有趣/火热
        // categoryId 分类编号
        // keyword 关键字
        
        select({kind, categoryId, keyword})
    },[])

    
    const [value, setValue] = useState(keyword)
    return (
        <View className={styles.index}>
            <AtSearchBar 
                placeholder='请输入您要查询任务的关键字'
                actionName='搜索'
                value={value}
                onChange={setValue}
                onActionClick={async ()=>{ await select({keyword:value}) }}
            />
            <View>
                {list.map(item =><View key={item.id} className='item'><IndexItem data={item}></IndexItem></View>) }
            </View>
            
            <AtDivider content='没有更多了'/>
        </View>
    )
}

export default index