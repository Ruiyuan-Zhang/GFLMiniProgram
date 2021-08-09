import Taro, { useDidShow } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import IndexItem from '@/components/TaskItem/index'
import icon_more from './icon_more.svg'
import styles from './index.module.less'
import { useEffect, useState } from 'react'
import {file_url} from '@/config'
import request from '@/utils/request'


const Index = ({title,logo,more_url}) => {

    const [list, setList] = useState([])
    useDidShow(async()=>{
        // if (title === '为您推荐任务'){
            let res = await request({
                url: '/v1/admin/task/list?page=1&limit=10',
                method: 'get'
            })
            if (res instanceof Error) return
            setList(res.list)
        // }
    },[])

    return(
        <View className={styles.index}>
            <View className={styles.header}>
                <View className={styles.title}>
                    <Image className={styles.logo} src={file_url+`/images/client/task_${logo}.png`}></Image>
                    {title}
                </View>
                <View className={styles.more} onClick={()=>Taro.navigateTo({url:more_url})}>more...</View>
            </View>
            { list.map(item => <View className={styles.item}>
                <IndexItem key={item.id} data={item}></IndexItem>
            </View>) }
        </View> 
    )
}


export default Index