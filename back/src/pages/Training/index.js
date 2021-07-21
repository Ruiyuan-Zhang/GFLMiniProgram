import styles from './index.less'
import { List, Image } from 'antd'
import { FieldTimeOutlined } from '@ant-design/icons'
import Item from './components/Item'
import { useEffect, useState } from 'react'
import {request} from '@/utils/request'

const index = () =>{

    const [list,setList] = useState([])

    // 请求任务列表
    useEffect(async()=>{
        let res = await request({method:'get',url:'/v1/admin/task/list?page=1&limit=100'})
        if (res instanceof Error) return
        setList(res.data.list)
    },[])

    return (
        <div className={styles.index}>
            <List
                itemLayout="vertical"
                size="large"
            >
                {
                    list.map(x=><Item key={x.id} data={x}/>)
                } 
            </List>
        </div>
    )
}

export default index