import { Form, Select, Button, Input, Upload, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import { requestWrap } from '@/utils/request'
import styles from './index.less'

const index = ({next}) =>{

    const [catagoryList, setCategoryList] = useState([])
    const [categoryId, setCategoryId] = useState()

    // 获取分类列表
    useEffect(async ()=>{
        const res = await requestWrap({}).get('/v1/admin/category/list?page=1&limit=100')
        if (res instanceof Error) return
        setCategoryList(res.data.list)
    },[])

    
    // 添加任务的基本信息
    const addTask = async e=>{
        e.categoryId = categoryId
        

        // 进入下一步
        next(e)
    }

    return(
        <div className={styles.index}>
            <div className={styles.form}>
                <Form
                    onFinish={ addTask }
                    labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
                >
                    <Form.Item label="联邦学习分类" name='categoryId'> <Select onChange={setCategoryId}>
                    {catagoryList.map(({id, name})=> <Select.Option key={id} value={id}>{name}</Select.Option>)}
                    </Select></Form.Item>
                    <Form.Item label='任务名称' name='name'><Input/></Form.Item>
                    <Form.Item label='任务描述' name='description'><Input.TextArea/></Form.Item>
                    <Form.Item label='上传封面文件' name='file'><Upload maxCount={1}><Button>上传</Button></Upload></Form.Item>
                    <Form.Item label='初始化模型文件' name='initModelFile'><Upload maxCount={1}><Button>上传</Button></Upload></Form.Item>
                    <Form.Item label='二进制参数文件' name='initModelFileBin'><Upload maxCount={1}><Button>上传</Button></Upload></Form.Item>
                    <Form.Item label='超参数' name='superParams'><Input/></Form.Item>
                    <Form.Item label='最多参与次数' name='maxTimesPerClient'><InputNumber min={1}/></Form.Item>
                    {/* 富文本框的事情太多了 就放弃了 <RichEditor/> */}
                    <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                    <Button type="primary" htmlType="submit">
                        下一步
                    </Button>
                    </Form.Item>
                </Form>
                </div>
        </div>
    )
}

export default index