import { Switch, Button,message } from 'antd'
import { useEffect, useState } from 'react'
import { request } from '@/utils/request'
import ClientModel from './components/ClientModel'
import * as echarts from 'echarts'
import styles from './index.less'

const index = ({task={},testDataList=[]}) =>{
    const [autoAggregate,setAutoAggregate] = useState(false)
    const [globalModelList,setGlobalModelList] = useState([])

    useEffect(async()=>{
        if (task.idStr){
            let res = await request({method:'get', url:'/v1/admin/model/global/listWithClients', data:{
                taskId:task.idStr,
                page:1,
                limit:100,
            }})
            if (res instanceof Error)return 
            setGlobalModelList(res.data.list)
        }
    },[task])

    const fedAvg = async () =>{
        // 0. 检查一下是否有测试集
        if (testDataList.length==0){
            message.error('请先添加测试数据')
            return
        }

        // 1. 进行聚合
        let res = await request({url:'/v1/admin/model/global/fedAvg',options:{timeout:1000*60*2},data:{
            testData: '/file/tests/'+task.idStr+'.json',
            globalModel: JSON.stringify(globalModelList[globalModelList.length-1]),
            clients: JSON.stringify(globalModelList[globalModelList.length-1].clients),
        }})
        if (res instanceof Error) return

        // 2. 刷新界面
        location.reload()
    }

    useEffect(()=>{
        let chartDom = document.getElementById('chart');
        let myChart = echarts.init(chartDom);
        let data = globalModelList.map((gm,index)=>[index,+gm.acc])
        let option = {
            xAxis: {
                type: 'category',
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data,
                type: 'line'
            }]
        }
        myChart.setOption(option)
    },[globalModelList])

    return (
        <div className={styles.index}>
            <h3>训练情况</h3>
            <h4>训练情况变化（测试集准确率）</h4>
            <div className={styles.chart} id="chart"></div>
            <div className={styles.globalModels}>
                <div className={styles.autoAggregate}><Switch checked={autoAggregate} onClick={setAutoAggregate}/> 自动聚合</div>
                {globalModelList.map((gm,index)=>{
                    return(
                    <div className={styles.globalModel} key={gm.id}>
                        <span className={styles.idx}>{index}</span>
                        <ClientModel globalModel data={gm} index={index}/>
                        {gm.clients.map((cm,idx)=><ClientModel data={cm} index={idx}/>)}
                        {index==globalModelList.length-1&&gm.clients.length>0&&<Button className={styles.agg} onClick={fedAvg} type='primary'>手动聚合</Button>}
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default index