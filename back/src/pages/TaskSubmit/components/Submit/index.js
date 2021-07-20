import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {request, requestWrap, addLoading, deleteLoading} from '@/utils/request'
import styles from './index.less'

const index = ({basicInfo,dataFormat})=>{
    const subitBasicInfo = async e =>{
        // 0. 数据检查

        // 1. 数据预处理
        const fileKeys = ['file','initModelFile','initModelFileBin']
        for (let k of fileKeys){
            e[k]=e[k].file.originFileObj
            let f = new FormData()
            f.append('file',e[k])
            e[k] = f
        }
        
        // 2. 开始提交
        e.file = await requestWrap({type:'file'}).post('/file/uploadImage',{data:e.file})
        e.initModelFile = await requestWrap({type:'file'}).post('/file/uploadGlobalModel',{data:e.initModelFile})
        e.initModelFileBin = await requestWrap({type:'file'}).post('/file/uploadGlobalModel',{data:e.initModelFileBin})
        fileKeys.forEach(k=>e[k]=e[k][0].url)  
        
        // 3. 返回数据
        let res = await requestWrap({}).post('/v1/admin/task/add',{data:e})
        return res.data.id
    }

    // 提交数据格式数据
    const submitDataFormat = async (taskId,dataFormat)=>{
        let data = dataFormat.map(d=>{
            d.taskId = taskId
            return d
        })
        let res = await requestWrap({}).post('/v1/admin/dataFormat/add',{data})
        if (res instanceof Error)return
        console.log(res)
    }

    return(
        <div className={styles.index}>
            <Result
                icon={<SmileOutlined />}
                title="你已经完成了所有的内容的编写!"
                extra={<Button type="primary" onClick={
                    async()=>{
                        addLoading()
                        let taskId = await subitBasicInfo(basicInfo)
                        console.log(taskId)
                        await submitDataFormat(taskId,dataFormat)
                        deleteLoading()
                        history.push({pathname:'/training'})
                    }
                }>
                    提交
                </Button>}
            />
        </div>
    )
}

export default index