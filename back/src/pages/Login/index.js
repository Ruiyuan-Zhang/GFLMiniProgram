import { Form, Input, Button, message } from 'antd';
import { history } from 'umi';
import { RightCircleOutlined } from '@ant-design/icons';
import {requestWrap} from '@/utils/request';
import {saveToken} from '@/common/token'
import styles from './index.less';


const index = () => {

    const login = async data => {
        const errorHandler = e => {
            message.error('请检查您的登录信息是否正确')
            return
        }
        const res = await requestWrap({errorHandler}).post('/v1/admin/users/login', {data})
        if(res) saveToken(res.data.token)
        message.success('登录成功',0.5)
        history.push({pathname:'/'})
    }

    return ( <div className={styles.index}>
        <div className={styles.login}>
            <h1>GFL微信小程序「管理端」</h1>
            <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 20 }}
                onFinish={login}
            >
                <Form.Item 
                    label='用户名'
                    name='user_name'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                > 
                    <Input />
                </Form.Item>
                <Form.Item 
                    label='密码'
                    name='pass'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                > 
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 0, span: 25 }}>
                    <Button type="primary" htmlType="submit" className='submit'>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
        <div className={styles.reg}>
            <p>联邦学习研究者注册</p> 
            <a href="">注册
                <RightCircleOutlined />
            </a> 
        </div>
    </div>
  )
};

export default index;
