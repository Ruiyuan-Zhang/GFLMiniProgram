import { View, Image } from '@tarojs/components'
import {file_url} from '@/config'
import { AtTag } from 'taro-ui'
import Taro from '@tarojs/taro'
import styles from './index.module.less'
import { useEffect } from 'react'

function IndexItem({data={}}){
    useEffect(async()=>{
        const slp = async x => new Promise(r=>setTimeout(r,x))
        if (!data.id){
            Taro.showToast({icon:'none',title:'未提供task id'})
            await slp(1000)
            Taro.navigateBack()
        }
    },[])
    const {id,categoryId,categoryName,description,file,initModelFile,maxTimesPerClient,name,superParams,createAt} = data
    return(
        <View className={styles.item}
            onClick = {()=>{
                Taro.navigateTo({url:`/pages/task_detail/index?id=${id}`})
            }}
        >
            <Image className={styles.img} mode='widthFix' src={file_url+file}></Image>
            <View className={styles.info}>
                <View className={styles.title}>{name}</View>
                <View className={styles.content}>{description}</View>
                <View className={styles.footer}> 
                    <View >浙江大学</View>
                    <View >{createAt}发布</View>
                </View>
            </View>
        </View>
    )
}

export default IndexItem