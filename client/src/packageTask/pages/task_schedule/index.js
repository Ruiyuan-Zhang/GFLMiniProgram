import { View,Text } from '@tarojs/components'
import { AtButton, AtProgress } from 'taro-ui'
import Taro,{useDidShow} from '@tarojs/taro'
import request from '@/utils/request'
import Title from '@/components/TitleHandleData'
import TaskItem from '@/components/TaskItem'
import styles from './index.module.less'
import { useEffect, useState } from 'react'
import { getCurrentInstance } from '@tarojs/taro'
import { getData,saveData,saveFileListToLocal,getDataList } from '@/common/data'
import { globalVariables } from '@/common/enum'



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
    const taskId = getCurrentInstance().router.params.id

    // 查询该任务的信息
    const [task, setTask] = useState(null)
    useEffect(async()=>{
        let res = await request({url:`/v1/admin/task/detailWithFormat?id=${taskId}`,method:'get'})
        if (res instanceof Error)return
        let task = res.data
        task.id = task.idStr
        task.dataFormats = task.dataFormats.map(td=>{
            td.dataFormatTaskId = td.dataFormatTaskIdStr
            return td
        })
        setTask(task)
    },[])

    // 查询该任务的全局模型情况
    const [globalModelList,setGlobalModelList] = useState([])
    useEffect(async()=>{
        let res = await request({method:'get',url:'/v1/admin/model/global/list',data:{
            taskId, page:1, limit:100
        }})
        if (res instanceof Error) return
        setGlobalModelList(res.list)
    },[])

    // 查询本地测试数据情况
    const [localData,setLocalData] = useState()
    const [localDataList,setLocalDataList] = useState()
    useDidShow(() =>{
        let data = getData()
        setLocalData(data)
        let list = getDataList({taskId,data})
        setLocalDataList(list)
    },[])

    // 开始训练
    const train = async()=>{
        const globalModel = globalModelList[globalModelList.length-1]
        globalVariables.task_schedule_TO_train={
            task:task,
            dataList:localDataList,
            globalModel,
        }
        Taro.navigateTo({url:'/packageTask/pages/train/index'})
    }

    // 提交测试数据
    const submitTestData = () => Taro.navigateTo({url:`/packageData/pages/get_data/index?id=${taskId}`})

    return (
        <View className={styles.index}>
            <Title title={task&&task.name} subtitle='任务进展详情'/>
            <View className={styles.section}>
                <View className={styles.h2}>一、任务介绍</View>
                {/* 这里需要先查询任务详细信息，然后再补充上 */}
                {task&&<TaskItem data={task}/>}
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
                    <Line name={`本地 ${localDataList?localDataList.length:0}份`} mode='end'>查看</Line>
                    <Line name='已贡献 0份' mode='end'>查看</Line>
                    <Line name='已拒绝 0份' mode='end'>查看</Line>
                    <AtButton className={styles.btn}  type='secondary' onClick={submitTestData}>提交测试数据</AtButton>
                </View>
            </View>
        </View>
    )
}

export default Index