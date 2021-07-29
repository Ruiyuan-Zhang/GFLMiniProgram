import { View,Text } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { AtTimeline } from 'taro-ui'
import { init, train as doTrain } from '@/train'
import { globalVariables } from '@/common/enum'
import Chart from './components/chart'
import styles from './index.module.less'

const index = () =>{
    const {task,dataList,globalModelFile} = globalVariables.task_schedule_TO_train
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
        
        let res = await doTrain({
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
    },[])

    return (
        <View className={styles.index}>
            <Chart data={chartData} name={task.name}/>
            {/* https://taro-ui.jd.com/#/docs/timeline */}
            <View className={styles.timeLine}>
                <AtTimeline items={timeLineData} />
            </View>
        </View>
    )
}

export default index 