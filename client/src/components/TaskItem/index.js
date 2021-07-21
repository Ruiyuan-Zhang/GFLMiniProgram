import { View, Image } from '@tarojs/components'
import {file_url} from '@/config'
import { AtTag } from 'taro-ui'

import styles from './index.module.less'

function IndexItem({data}){
    const {id,categoryId,categoryName,description,file,initModelFile,maxTimesPerClient,name,superParams,createAt} = data
    return(
        <View className={styles.item}>
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