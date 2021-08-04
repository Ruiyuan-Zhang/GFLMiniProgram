import { View,Text } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { AtTimeline } from 'taro-ui'
import { init, train as doTrain } from '@/train'
import { globalVariables } from '@/common/enum'
import {saveUser, getUser, removeUser} from '@/common/user'
import request from '@/utils/request'
import Chart from './components/chart'
import styles from './index.module.less'

const index = () =>{
    const {task,dataList,globalModel} = globalVariables.task_schedule_TO_train
    // console.log(globalModel)
    const globalModelFile = globalModel.file
    const [chartData,setChartData] = useState([])
    const [timeLineData,setTimeLineData] = useState([])

    useEffect(async()=>{
        const addChartData = (index,loss) => {
            chartData.push([index,loss])
            setChartData([...chartData])
        }
        const addTimeLineData = title =>{
            timeLineData.unshift({title})
            setTimeLineData([...timeLineData])
        }
        let beginTime = (new Date()).getTime()
        addTimeLineData("正在启动训练...")
        addTimeLineData("正在加载远程全局模型...")
        
        let file = await doTrain({
            task,dataList,globalModelFile,
            onLoadModel: ()=>{
                addTimeLineData("远程全局模型加载完毕")
            },
            onIndexEpochEnd: ({index,history}) =>{
                addChartData(index,history.loss[0])
                addTimeLineData("Loss after Epoch " + index + " : " + history.loss[0])
            },
            onTrainEnd: ()=>{
                let endTime = (new Date()).getTime()
                addTimeLineData(`本次训练总耗时长${endTime-beginTime}ms`)
            }
        })
        addTimeLineData("训练结束")
        addTimeLineData(`客户端模型上传成功`)

        // 提交本轮训练
        let res = await request({
            url:'/v1/admin/model/client/add',
            data:{
                globalModelId:globalModel.id,
                taskId:task.id,
                userName:getUser().user_name,
                file,
            }
        })
        if (res instanceof Error)return
        addTimeLineData(`客户端模型提交成功`)
    },[])

    return (
        <View className={styles.index}>
            <Chart data={chartData} name={task.name}/>
            <View className={styles.timeLine}>
                <AtTimeline items={timeLineData} />
            </View>
        </View>
    )
}

export default index 