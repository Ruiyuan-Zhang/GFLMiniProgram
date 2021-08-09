import { View,Text, Button } from '@tarojs/components'
import { AtButton, AtProgress, message } from 'taro-ui'
import Taro,{useDidShow} from '@tarojs/taro'
import request from '@/utils/request'
import Title from '@/components/TitleHandleData'
import TaskItem from '@/components/TaskItem'
import styles from './index.module.less'
import { useEffect, useState } from 'react'
import { getCurrentInstance } from '@tarojs/taro'
import { getData,saveData,saveFileListToLocal,getDataList } from '@/common/data'
import {saveUser, getUser, removeUser} from '@/common/user'
import { globalVariables } from '@/common/enum'

const userName = getUser().user_name

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
    useDidShow(async()=>{
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
    useDidShow(async()=>{
        let res = await request({method:'get',url:'/v1/admin/model/global/listWithClients',data:{
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
        // 检查本地是否有数据
        if (localDataList.length<2){
            await Taro.showToast({icon:'none',title:'训练之前请先添加至少2份数据哟~'})
            return
        }

        // 最后一个globalModel就是要继续训练的全局模型
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

    // 界面数据
    // 客户端参与聚合的次数
    const joinTimes = globalModelList =>{
        // 1. 先把参与的客户端模型的编号找出来，但是注意，这个编号不一定被全局模型聚合的时候使用
        let clientModels = new Map()
        for (let gm of globalModelList){
            for (let c of gm.clients){
                if (c.userName == userName) clientModels.set(c.id,c.file)
            }
        }
        // 2. 在全局模型聚合时会选择传入选择的客户端模型编号
        let times = 0
        for (let gm of globalModelList){
            let cs = gm.fedAvgWithClients
            cs = cs.split(' ')
            for (let c of cs){
                if (clientModels.has(c))times++
            }
        }
        return times
    }
    
    // 客户端总的参与聚合时间（不包含未被采纳的聚合）
    const joinTime = globalModelList =>{
        // 1. 先把参与的客户端模型的编号找出来，但是注意，这个编号不一定被全局模型聚合的时候使用
        let clientModels = new Map()
        for (let gm of globalModelList){
            for (let c of gm.clients){
                if (c.userName == userName) clientModels.set(c.id,+c.time)
            }
        }
        // 2. 在全局模型聚合时会选择传入选择的客户端模型编号
        let time = 0
        for (let gm of globalModelList){
            let cs = gm.fedAvgWithClients
            cs = cs.split(' ')
            for (let c of cs){
                if (clientModels.has(c))time+=clientModels.get(c)
            }
        }
        return time
    }

    // 客户端总的参与时间
    const joinAllTime = globalModelList =>{
        let time = 0
        for (let gm of globalModelList){
            for (let c of gm.clients){
                if (c.userName == userName) time += +c.time
            }
        }
        return time
    }

    // 客户端参与的轮数列表
    const joinFedAvgList = globalModelList =>{
        // 1. 先把参与的客户端模型的编号找出来，但是注意，这个编号不一定被全局模型聚合的时候使用
        let clientModels = new Map()
        for (let gm of globalModelList){
            for (let c of gm.clients){
                if (c.userName == userName) clientModels.set(c.id,true)
            }
        }
        // 2. 在全局模型聚合时会选择传入选择的客户端模型编号
        let list = []
        for (let i in globalModelList){
            let gm = globalModelList[i]
            let cs = gm.fedAvgWithClients
            cs = cs.split(' ')
            for (let c of cs){
                if (clientModels.has(c)){
                    list.push({
                        clientId: c,
                        index: i,
                    })
                }
            }
        
        }
        console.log(list)

        return list
    }

    const clientProgressStr = () => task&& joinTimes(globalModelList)+'/'+task.maxTimesPerClient
    const clientProgress = () => task&&joinTimes(globalModelList)*100/task.maxTimesPerClient
    const globalProgressStr = () => task&&globalModelList.length>0&&globalModelList[globalModelList.length-1].clients.length+'/'+task.maxTimesPerClient
    const globalProgress = () => task&&globalModelList.length>0&&globalModelList[globalModelList.length-1].clients.length*100/task.maxTimesPerClient

    return (
        <View className={styles.index}>
            <Title title={task&&task.name} subtitle='任务进展详情'/>
            <View className={styles.section}>
                <View className={styles.h2}>一、任务介绍</View>
                {/* 这里需要先查询任务详细信息，然后再补充上 */}
                {task&&<TaskItem data={task}/>}
            </View>
            <View className={styles.section}>
                <View className={styles.h2}>二、任务进展（第{globalModelList&&globalModelList.length}轮）</View>
                <View className={styles.h3}>1. 本地训练</View>
                <View className={styles.content}>
                    <Line name='训练进度' tail={clientProgressStr()} ><AtProgress percent={clientProgress()} isHidePercent/></Line>
                    <Line name='训练时间'>{joinTime(globalModelList)}ms</Line>
                    <Line name='总本地训练时间'>{joinAllTime(globalModelList)}ms</Line>
                    <Line name='占用CPU时间'>{joinTime(globalModelList)}ms</Line>
                    <Line name='开始时间'>{globalModelList.length>0&&globalModelList[globalModelList.length-1].createdAt.substr(0,19).replace("T"," ")}</Line>
                </View>
                <View className={styles.h3}>2. 聚合情况（第{globalModelList&&globalModelList.length}轮）</View>
                <View className={styles.content}>
                    <Line name='聚合进度' tail={globalProgressStr()}><AtProgress percent={globalProgress()} isHidePercent/></Line>
                    <Line name='开始时间'>{globalModelList.length>0&&globalModelList[globalModelList.length-1].createdAt.substr(0,19).replace("T"," ")}</Line>
                </View>
                <View className={styles.h3}>3. 聚合情况</View>
                <View className={styles.content}>
                    <AtButton className={styles.btn} type='primary'  onClick={()=>Taro.navigateTo({url:'/packageTask/pages/fed_avg/index?id='+task.idStr})}>查看全局模型情况</AtButton>
                </View>
            </View>

            <View className={styles.section}>
                <View className={styles.h2}>三、参与情况</View>
                <View className={styles.h3}>1. 参与训练轮数情况</View>
                <View className={styles.content}>
                    {joinFedAvgList(globalModelList).map(({clientId,index})=>
                        <Line key={clientId} name={`第${index}轮训练`} mode='end'><View>查看</View></Line>
                    )}
                    {/* 点击参与训练，就能完成训练的任务 */}
                    <AtButton className={styles.btn} onClick={train} type='primary'>参与训练</AtButton>
                </View>
                <View className={styles.h3}>2. 贡献测试数据情况</View>
                <View className={styles.content}>
                    <Line name={`本地 ${localDataList?localDataList.length:0}份`} mode='end'>查看</Line>
                    <Line name='已贡献 0份' mode='end'>查看</Line>
                    <Line name='已拒绝 0份' mode='end'>查看</Line>
                    <AtButton className={styles.btn}  type='primary' onClick={submitTestData}>在本地提交测试数据</AtButton>
                </View>
            </View>
        </View>
    )
}

export default Index