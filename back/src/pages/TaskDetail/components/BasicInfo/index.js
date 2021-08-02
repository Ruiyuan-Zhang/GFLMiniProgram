import styles from './index.less'
import {Table} from 'antd'

const index = ({task={}}) =>{
    const {name,description,dataFormats} = task
    const columns = [
        { title: '名称', dataIndex: 'name'},
        { title: '数据格式', dataIndex: 'type'},
        { title: '数据尺寸', dataIndex: 'size'},
        { title: '数据格式编号', dataIndex: 'taskId'},
    ]
    return (
        <div className={styles.index}>
            <div className={styles.desc}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className={styles.dataFormats}>
                <h3>数据格式</h3>
                <Table
                    columns={columns} 
                    dataSource={dataFormats} 
                    pagination={false}
                />
            </div>
        </div>
    )
}

export default index