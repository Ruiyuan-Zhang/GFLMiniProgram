import styles from './index.less'
import {history} from 'umi'
import { Image } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { request } from '@/utils/request'
import BasicInfo from './components/BasicInfo'
import TestData from './components/TestData'
import TrainCondition from './components/TrainCondition'

const index = (props) =>{
    // 任务编号
    const {id} = props.location.query

    // 请求任务详情内容
    const [task,setTask] = useState()
    useEffect(async()=>{
        let res = await request({method:'get',url:'/v1/admin/task/detailWithFormat?id='+id})
        if (res instanceof Error) return 
        setTask(res.data.data)
    },[])

    const [tls,setTls] = useState([])
    const getTestList = tls => setTls(tls)

    return (
        <div className={styles.index}>
            <BasicInfo task={task}/>
            <TestData task={task} getTestList={getTestList}/>
            <TrainCondition task={task} testDataList={tls}/>
        </div>
    )
}

export default index