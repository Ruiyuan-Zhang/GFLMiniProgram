import { Table, Modal, Button, Form, Input,Select } from 'antd';
import React, { useState } from 'react';
import styles from './index.less'

const index = ({next}) =>{

    const columns = [
        {title: 'name', dataIndex: 'name', key:'name'},
        {title: 'type', dataIndex:'type', key:'type'},
        {title: 'size', dataIndex:'size', key:'size'},
        {title: 'englishName', dataIndex:'englishName', key:'englishName'},
        {title: 'tips', dataIndex:'tips', key:'tips'},
        {title: 'action', dataIndex:'name', key:'action', render: (text,record,index)=>{
            return(
                <span onClick={ () =>{
                    setData(data.filter(({name})=>name!==text))
                }}>
                    删除
                </span>
            )
        }},
    ]
    const dataSource = [
        {key: 1,name:'图片',englishName:'image', tips:'请输入正确值',type:'image',size:'28 28'},
        {key: 2,name:'值',englishName:'value',tips:'请输入正确值',type:'number'},
    ]
    const [data, setData] = useState(dataSource)
    const [modal, setModal] = useState(false)
    const [form] = Form.useForm()

    return (
        <div className={styles.index}>
            <Button type="primary" onClick={()=>setModal(true)}>添加</Button>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
            <Modal
                visible={modal}
                onCancel={()=>setModal(false)}
                onOk={()=>{form.submit()}}
            >
                <Form 
                    labelCol={{ span: 5 }} wrapperCol={{ span: 20 }}
                    form={form}
                    onFinish={ x=>{
                        // 直接push的时候，引用没有改变，只是改变了引用指向的内存数据，React认为虚拟DOM并没有改变，
                        // 因此，不会重新渲染页面。这就会导致Table组件的dataSource改变了，但是Table并没有重新渲染。
                        x.key = +new Date()
                        setData([...data,x])
                        setModal(false)
                    }}
                >
                    <Form.Item label='name' name='name'><Input placeholder='输入数据项名称'></Input></Form.Item>
                    <Form.Item label='englishName' name='englishName'><Input placeholder='输入数据项英文名称（数据标识符）'></Input></Form.Item>
                    <Form.Item label='type' name='type'><Select placeholder='选择数据类型'>
                        <Select.Option value='image'>image</Select.Option>
                        <Select.Option value='number'>number</Select.Option>
                        <Select.Option value='file'>file</Select.Option>
                        <Select.Option value='string'>string</Select.Option>
                    </Select></Form.Item>
                    <Form.Item label='size' name='size'><Input placeholder='尺寸只在type为image时有效'></Input></Form.Item>
                    <Form.Item label='tips' name='tips'><Input placeholder='请输入该数据项提示信息'></Input></Form.Item>
                </Form>
            </Modal>
            <div className={styles.btn}>
                <Button type="primary" onClick={()=>{
                    next(data)
                }}>
                    确认
                </Button>
            </div>
            <div>
                <div>注：当前只支持一种形式的输入，即「一张图片+一个值表示」的形式。</div>
                <div>未来将支持「多输入组合+多输出组合」形式。</div>
                <div>更多自定义修改请访问<a target='_blank' href="https://github.com/zju-zry/GFLMiniProgram">GitHub</a>。\ (•◡•) /</div>
            </div>
        </div>
    )
}

export default index