import { View } from "@tarojs/components";
import { getCurrentInstance } from '@tarojs/taro'
import { useEffect, useState } from 'react'
import Chart from '../../components/chart'
import { AtTimeline } from 'taro-ui'
import request from '@/utils/request'
import styles from './index.module.less'

const index = () =>{

    const taskId = getCurrentInstance().router.params.id

    
    // 查询该任务的信息
    const [task, setTask] = useState({})
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
        let res = await request({method:'get',url:'/v1/admin/model/global/listWithClients',data:{
            taskId, page:1, limit:100
        }})
        if (res instanceof Error) return
        setGlobalModelList(res.list)
    },[])

    const chartData = globalModelList => globalModelList.map((gm,index)=>[index,+gm.acc])

    const timeLineData = globalModelList =>{
        // 1. 找到哪些用户参与聚合
        let mp = new Map()
        for (let i in globalModelList){
            let gm = globalModelList[i]
            let cs = gm.fedAvgWithClients
            cs = cs.split(" ")
            for (let c of cs)mp.set(c,true)
        }

        // 2. 渲染界面
        let list = []
        for (let i in globalModelList){
            let gm = globalModelList[i]
            let item = {
                title: `第${i}轮训练，聚合时间：${gm.time}ms，准确率：${gm.acc}`
            }
            
            let content = []
            for (let j in gm.clients){
                let cm = gm.clients[j]
                let isJoin = mp.has(cm.id)?"":"注：未参与到下一轮聚合中"
                content.push(`client${j}：`)
                content.push(`训练时间：${cm.time}ms`)
                content.push(`来自：${cm.userName}`)
                content.push(isJoin)
                content.push('-----------------------')
                // content.push(`client${j}：训练时间：${cm.time}ms，来自：${cm.userName}`)
            }
            item.content = content
            list.push(item)
        }
        list.push({title:"更多更详细内容，请在管理网站中查询..."})
        list.push({title:"\\ (@^0^@) /"})
        return list
    }

    return (
        <View className={styles.index}>
            <Chart data={chartData(globalModelList)} name={task.name} subtext="全局模型训练情况（准确率）"/>
            <View className={styles.timeLine}>
                <AtTimeline items={timeLineData(globalModelList)} />
            </View>
        </View>
    )
}

export default index