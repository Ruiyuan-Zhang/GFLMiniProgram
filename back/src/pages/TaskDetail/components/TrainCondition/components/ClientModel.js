import styles from './ClientModel.less'

const index = ({globalModel=false}) =>{
    return (
        <div className={styles.index}>
            {!globalModel&&<div className={styles.line}>client1；username：zhangruiyuan；训练时间：45000ms</div>}
            <div className={styles.line}>模型参数地址：models/globalModelSameDir/IVrmte8pMdRWhyjGUNmT/model.json <a>下载模型</a></div>
            <div className={styles.line}>测试集准确率：0.93452333 <a>下载数据集</a></div>
            <div className={styles.footer}><span>创建人：浙江大学</span><span>创建时间：2021-01-22 10:10:45</span></div>
        </div>
    )
}

export default index