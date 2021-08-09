import { View, Image } from '@tarojs/components'
import {file_url} from '@/config'
import Taro from '@tarojs/taro'
import styles from './index.module.less'

function IndexItem({data={}}){
    const {id,categoryId,categoryName,description,file,initModelFile,maxTimesPerClient,name,superParams,createAt} = data
    return(
        <View className={styles.item}
            onClick = {()=>{
                Taro.navigateTo({url:`/packageTask/pages/task_detail/index?id=${id}`})
            }}
        >
            <Image className={styles.img} mode='widthFix' src={file_url+file}></Image>
            <View className={styles.info}>
                <View className={styles.title}>{name}</View>
                <View className={styles.content}>{description}</View>
                <View className={styles.footer}> 
                    <View >浙江大学</View>
                    <View >{createAt&&createAt.substr(0,19).replace("T"," ")} 发布</View>
                </View>
            </View>
        </View>
    )
}

export default IndexItem