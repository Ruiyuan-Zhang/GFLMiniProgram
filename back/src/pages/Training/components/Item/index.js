import { List, Image, Tag } from 'antd'
import { FieldTimeOutlined } from '@ant-design/icons'
import { history } from 'umi'
import styles from './index.less'

const index = ({data}) =>{
    const {id,categoryId,categoryName,description,file,initModelFile,maxTimesPerClient,name,superParams,createAt} = data
    return(
        <List.Item
            extra={
                <Image
                width={272}
                alt={name}
                src={'/file'+file}
                />
            }
            actions={[
                <div><FieldTimeOutlined /> 创建于 {createAt} </div>,
            ]}
            onClick = {()=>{
                history.push({
                    pathname:"/training/detail",
                    query:{
                        id
                    }
                })
            }}
        >
            <List.Item.Meta
                title={name}
                description={
                    <>
                        <Tag color='blue'>{categoryName}</Tag>
                        <Tag color='red'>初始化模型地址:{initModelFile}</Tag>
                        <Tag color='orange'>支持客户端参与{maxTimesPerClient}次训练</Tag> 
                        <Tag color='cyan'>超参数设置:{superParams}</Tag>
                    </>
                }
            />
            <div className={styles.desc}>
                {description}
            </div>
        </List.Item>
    )
}

export default index