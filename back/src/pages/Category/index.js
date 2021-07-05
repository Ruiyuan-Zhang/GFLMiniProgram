import { List, Avatar, Button, Modal, Form, Input } from 'antd'
import { useState } from 'react'
import Upload from '@/components/Upload'
import styles from './index.less'

/**
 * 分类界面的话
 * 点击创建分类
 * 分类界面展示效果为列表
 */ 

const data = [
    {
        title: '机器学习',
        description: '机器学习是一门多领域交叉学科，涉及概率论、统计学、逼近论、凸分析、算法复杂度理论等多门学科。专门研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有的知识结构使之不断改善自身的性能。',
        src: 'https://img0.baidu.com/it/u=2525025188,3093210068&fm=26&fmt=auto&gp=0.jpg'
    }, {
        title: '计算机视觉',
        description: '计算机视觉是一门研究如何使机器“看”的科学，更进一步的说，就是是指用摄影机和电脑代替人眼对目标进行识别、跟踪和测量等机器视觉，并进一步做图形处理，使电脑处理成为更适合人眼观察或传送给仪器检测的图像。作为一个科学学科，计算机视觉研究相关的理论和技术，试图建立能够从图像或者多维数据中获取‘信息’的人工智能系统。这里所 指的信息指Shannon定义的，可以用来帮助做一个“决定”的信息。因为感知可以看作是从感官信号中提 取信息，所以计算机视觉也可以看作是研究如何使人工系统从图像或多维数据中“感知”的科学。',
        src: 'https://img0.baidu.com/it/u=612635775,3881910430&fm=26&fmt=auto&gp=0.jpg',
    }, {
        title: '语音识别',
        description: '语音识别是一门交叉学科。近二十年来，语音识别技术取得显著进步，开始从实验室走向市场。人们预计，未来10年内，语音识别技术将进入工业、家电、通信、汽车电子、医疗、家庭服务、消费电子产品等各个领域。 语音识别听写机在一些领域的应用被美国新闻界评为1997年计算机发展十件大事之一。很多专家都认为语音识别技术是2000年至2010年间信息技术领域十大重要的科技发展技术之一。 语音识别技术所涉及的领域包括：信号处理、模式识别、概率论和信息论、发声机理和听觉机理、人工智能等等。',
        src: 'https://img0.baidu.com/it/u=1659608432,1514039257&fm=26&fmt=auto&gp=0.jpg',
    }, {
        title: '自然语言处理',
        description: '自然语言处理( Natural Language Processing, NLP)是计算机科学领域与人工智能领域中的一个重要方向。它研究能实现人与计算机之间用自然语言进行有效通信的各种理论和方法。自然语言处理是一门融语言学、计算机科学、数学于一体的科学。因此，这一领域的研究将涉及自然语言，即人们日常使用的语言，所以它与语言学的研究有着密切的联系，但又有重要的区别。自然语言处理并不是一般地研究自然语言，而在于研制能有效地实现自然语言通信的计算机系统，特别是其中的软件系统。因而它是计算机科学的一部分 [1]  。',
        src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.elecfans.com%2Fweb1%2FM00%2FA4%2FA1%2FpIYBAF1jSlCAOFy1AA6ygrzYmpg171.png&refer=http%3A%2F%2Ffile.elecfans.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627909528&t=35e44ac6d3335595eed580abf7bab3a5',
    }
]
const Index = () =>{
    const addCategory = () =>{
        setIsModalVisible(false)
    }
    const [isModalVisible, setIsModalVisible] = useState(true)
    return(
        <div className={styles.index}>
            <Button className={styles.add} type="primary" onClick={()=>setIsModalVisible(true)}>添加分类</Button>
            <List
                className={styles.list}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={({title,description,src}) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={src} />}
                    title={<a href="https://ant.design">{title}</a>}
                    description={description}
                    />
                </List.Item>
                )}
            />
            <Modal title='添加一个分类' visible={isModalVisible} onOk={addCategory} onCancel={()=>setIsModalVisible(false)}>
                <Form>
                    <Upload/>
                    <Form.Item label='名称' name='name'>
                        <Input/>
                    </Form.Item>
                    <Form.Item label='描述' name='description'>
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Index