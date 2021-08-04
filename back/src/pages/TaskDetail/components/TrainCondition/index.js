import { Switch, Button } from 'antd'
import { useEffect, useState } from 'react'
import { request } from '@/utils/request'
import ClientModel from './components/ClientModel'
import styles from './index.less'

const index = ({task={}}) =>{
    const [autoAggregate,setAutoAggregate] = useState(true)
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
        let res = await request({url:'/v1/admin/model/global/fedAvg',data:{
            testData: '/file/tests/'+task.idStr+'.json',
            globalModel: JSON.stringify(globalModelList[globalModelList.length-1]),
            clients: JSON.stringify(globalModelList[globalModelList.length-1].clients),
        }})
        if (res instanceof Error) return
        console.log(res)
    }

    return (
        <div className={styles.index}>
            <h3>训练情况</h3>
            <h4>训练情况变化（测试集准确率）</h4>
            <div className={styles.chart}></div>
            <div className={styles.globalModels}>
                <div className={styles.autoAggregate}><Switch checked={autoAggregate} onClick={setAutoAggregate}/> 自动聚合</div>
                {globalModelList.map((gm,index)=>{
                    return(
                    <div className={styles.globalModel} key={gm.id}>
                        <span className={styles.idx}>{index}</span>
                        <ClientModel globalModel data={gm} index={index}/>
                        {gm.clients.map((cm,idx)=><ClientModel data={cm} index={idx}/>)}
                        {index==globalModelList.length-1&&<Button className={styles.agg} onClick={fedAvg} type='primary'>手动聚合</Button>}
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default index