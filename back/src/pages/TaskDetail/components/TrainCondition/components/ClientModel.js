import styles from './ClientModel.less'

/**
 * globalModel和clientModel的data是不一样的
 * @param {*} param0 
 */
const index = ({globalModel=false,data,index}) =>{
    return (
        <div className={styles.index}>
            {globalModel?<>
                <div className={styles.line}>global{index}；username：{data.userName||'匿名'}；聚合时间：45000ms</div>
                <div className={styles.line}>模型参数地址：{data.file} <a>下载模型</a></div>
                <div className={styles.line}>测试集准确率：{data.acc||'-'} <a>下载数据集</a></div>
                <div className={styles.footer}><span>创建人：浙江大学</span><span>创建时间：{data.createdAt}</span></div>
            </>:<>
                <div className={styles.line}>client{index}；username：{data.userName||'匿名'}；训练时间：45000ms</div>
                <div className={styles.line}>模型参数地址：{data.file} <a>下载模型</a></div>
                <div className={styles.line}>测试集准确率（用户提交）：- {/*<a>下载数据集</a>*/}</div> 
                <div className={styles.footer}><span>创建人：浙江大学</span><span>创建时间：{data.createAt}</span></div>
            </>}
        </div>
    )
}

export default index