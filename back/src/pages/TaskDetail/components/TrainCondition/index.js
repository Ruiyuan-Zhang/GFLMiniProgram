import { Switch, Button } from 'antd'
import { useState } from 'react'
import ClientModel from './components/ClientModel'
import styles from './index.less'

const index = () =>{
    const [autoAggregate,setAutoAggregate] = useState(true)

    return (
        <div className={styles.index}>
            <h3>训练情况</h3>
            <h4>训练情况变化（测试集准确率）</h4>
            <div className={styles.chart}></div>
            <div className={styles.globalModels}>
                <div className={styles.autoAggregate}><Switch checked={autoAggregate} onClick={setAutoAggregate}/> 自动聚合</div>
                <div className={styles.globalModel}>
                    <span className={styles.idx}>1</span>
                    <ClientModel globalModel/>
                    <ClientModel />
                    <ClientModel />
                    <ClientModel />
                </div>
                <div className={styles.globalModel}>
                    <span className={styles.idx}>2</span>
                    <ClientModel globalModel/>
                    <ClientModel />
                    <ClientModel />
                    <ClientModel />
                </div>
                <div className={styles.globalModel}>
                    <span className={styles.idx}>3</span>
                    <ClientModel globalModel/>
                    <ClientModel />
                    <ClientModel />
                    <ClientModel />
                </div>
                <div className={styles.globalModel}>
                    <span className={styles.idx}>4</span>
                    <ClientModel globalModel/>
                    <ClientModel />
                    <ClientModel />
                    <Button className={styles.agg}>手动聚合</Button>
                </div>
            </div>
        </div>
    )
}

export default index