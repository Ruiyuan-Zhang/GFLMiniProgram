import { View, Image } from '@tarojs/components'
import test from '@/assets/images/test.png'

import styles from './index.module.less'

function IndexItem(){
    return(
        <View className={styles.item}>
            <Image className={styles.img} mode='widthFix' src={test}></Image>
            <View className={styles.info}>
                <View className={styles.title}>火焰识别模型</View>
                <View className={styles.content}>该模型需要大约10,000条火焰数据参与，训练完成后对参与者按比例奖励，免费提供模型使用权...</View>
                <View className={styles.footer}> 
                    <View >浙江大学</View>
                    <View >2021-06-01 09:01 发布</View>
                </View>
            </View>
        </View>
    )
}

export default IndexItem