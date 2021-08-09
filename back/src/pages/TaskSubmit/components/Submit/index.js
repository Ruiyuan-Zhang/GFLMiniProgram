import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { history } from 'umi'
import {request, requestWrap, addLoading, deleteLoading} from '@/utils/request'
import styles from './index.less'

const index = ({basicInfo,dataFormat})=>{
    const subitBasicInfo = async e =>{
        // 0. 数据检查

        // 1. 数据预处理
        const fileKeys = ['file','initModelFile','initModelFileBin']
        for (let k of fileKeys){
            e[k]=e[k].file.originFileObj
        }
        
        // 2. 开始提交
        // 2.1 封面文件
        let formData = new FormData()
        formData.append('file',e['file'])
        e.file = await requestWrap({type:'file'}).post('/file/uploadImage',{data:formData})
        e.file = e.file.url
        // 2.2 模型文件
        formData = new FormData()
        formData.append('json',e['initModelFile'])
        formData.append('bin',e['initModelFileBin'])
        e.initModelFile = await requestWrap({type:'file'}).post('/file/uploadGlobalModelSameDir',{data:formData})
        e.initModelFile = e.initModelFile.url

        // 3. 返回数据
        let res = await requestWrap({}).post('/v1/admin/task/add',{data:e})
        if (res instanceof Error)return
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