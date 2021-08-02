import {Button,Modal,Form,Upload,Input} from 'antd'
import { useEffect, useState } from 'react'
import { request, requestWrap, addLoading, deleteLoading } from '@/utils/request'
import styles from './index.less'

const index = ({task={}}) =>{

    const {dataFormats} = task
    const [testList,setTestList] = useState([])
    const [addTestData,setAddTestData] =  useState(false)
    const [form] = Form.useForm()

    // 读取测试集文件
    useEffect(async()=>{
        if (task.idStr){
            let res = await requestWrap({showMassage:false}).get('/file/tests/'+task.idStr+'.json')
            if (res instanceof Error)return 
            setTestList(res)
        }
    },[task])

    const handleAddTestData = async data =>{
        let ifes = dataFormats.filter(df => df.type == 'image' || df.type == 'file').map(df=>df.englishName)
        addLoading()
        for (let k of ifes){
            let formData = new FormData()
            formData.append('file',data[k].fileList[0].originFileObj)
            data[k] = await requestWrap({type:'file'}).post('/file/uploadImage',{data:formData})
            if (data[k] instanceof Error)return
            data[k] = data[k].url
        }
        data['__user_type__'] = 'admin'
        data['__user_name__'] = 'zhangruiyuan'
    
        // 提交测试文件
        let res = await requestWrap({}).post('/file/uploadTestData?taskId='+task.idStr,{data:[...testList,data]})
        if (res instanceof Error)return
        setTestList([...testList,data])
        setAddTestData(false)
        deleteLoading()
    }

    return (
        <div className={styles.index}>
            <h3>测试数据</h3>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div>应用测试数据{testList.length}份</div>
                    <div>1. 用户贡献测试数据 0份</div>
                    <div>2. 研究者贡献测试数据 {testList.length}份</div>
                    <div>未处理数据 0份</div>
                    <div>1. 用户贡献测试数据 0份</div>
                </div>
                <div className={styles.right}>
                    <Button onClick={()=>setAddTestData(true)}>添加测试数据</Button>
                </div>
            </div>
            <Modal
            visible={addTestData}
            onOk={()=>{form.submit()}}
            onCancel={()=>setAddTestData(false)}
            >
                <Form form={form}
                onFinish={handleAddTestData}
                >
                    {dataFormats&&dataFormats.map(df=>{
                        if (df.type == 'image' || df.type == 'file'){
                            return <Form.Item label={df.name} name={df.englishName}><Upload maxCount={1}><Button>上传</Button></Upload></Form.Item>
                        }else if (df.type == 'number' || df.type == 'string'){
                            return <Form.Item label={df.name} name={df.englishName}><Input></Input></Form.Item>
                        }
                    })}
                </Form>
            </Modal>
        </div>
    )
}

export default index