import { View,Text } from '@tarojs/components'
import { AtButton, AtProgress } from 'taro-ui'
// import TaroScript from "taro-script"
import Title from '@/components/TitleHandleData'
import TaskItem from '@/components/TaskItem'
import styles from './index.module.less'
// import main from './TensorFlow/main'
// import fit from './fit/index'
import layer from './layer'
import seq from './sequential'
import load_model from './load_model'


const train = ()=>{
    // main()
    // fit()
    // layer()
    // seq() 
    load_model()
}

const Line = ({name,children,tail,mode='start'})=>{
    return (
        <View className={styles.line} >
            <Text className={styles.name}>{name+"："}</Text>
            <View className={styles.info} style={{textAlign:mode}}>{children}</View>
            {tail&&<Text className={styles.tail}>{tail}</Text>}

        </View>
    )
}

const Index = () =>{
    return (
        <View className={styles.index}>
            <script>
                console.log(123)
            </script>
            <Title title='基于机器学习的刀具表面缺陷检测及分类方法' subtitle='任务进展详情'/>
            <View className={styles.section}>
                <View className={styles.h2}>一、任务介绍</View>
                <TaskItem />
            </View>
            <View className={styles.section}>
                <View className={styles.h2}>二、本轮任务进展（第12轮）</View>
                <View className={styles.h3}>1. 本地训练</View>
                <View className={styles.content}>
                    <Line name='训练进度'><AtProgress percent={47}/></Line>
                    <Line name='训练时间'>1.06h</Line>
                    <Line name='占用CPU时间'>0.6h</Line>
                    <Line name='开始时间'>2021-06-01 10:01:01</Line>
                </View>
                <View className={styles.h3}>2. 聚合情况</View>
                <View className={styles.content}>
                    <Line name='聚合进度' tail='3/9'><AtProgress percent={300/9} isHidePercent/></Line>
                    <Line name='聚合时间'>1.06h</Line>
                    <Line name='开始时间'>2021-06-01 10:01:01</Line>
                </View>
            </View>

            <View className={styles.section}>
                <View className={styles.h2}>三、参与情况</View>
                <View className={styles.h3}>1. 参与训练轮数情况</View>
                <View className={styles.content}>
                    <Line name='第2轮训练' mode='end'>查看</Line>
                    <Line name='第3轮训练' mode='end'>查看</Line>
                    <Line name='第11轮训练' mode='end'>查看</Line>
                    {/* 点击参与训练，就能完成训练的任务 */}
                    <AtButton className={styles.btn} onClick={train} type='secondary'>参与训练</AtButton>
                </View>
                <View className={styles.h3}>2. 贡献测试数据情况</View>
                <View className={styles.content}>
                    <Line name='已上传 138份' mode='end'>查看</Line>
                    <Line name='已提交 11份' mode='end'>查看</Line>
                    <Line name='已拒绝 11份' mode='end'>查看</Line>
                    <AtButton className={styles.btn}  type='secondary'>提交测试数据</AtButton>
                </View>
            </View>
        </View>
    )
}

export default Index