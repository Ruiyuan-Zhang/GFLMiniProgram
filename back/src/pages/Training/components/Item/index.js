import { List, Image } from 'antd'
import { FieldTimeOutlined } from '@ant-design/icons'
import styles from './index.less'

const index = () =>{
    return(
        <List.Item
            extra={
                <Image
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
            }
            actions={[
                <div><FieldTimeOutlined /> 创建于 2021-07-20 19:44:57 </div>,
            ]}
        >
            <List.Item.Meta
                title="Mnist实验"
                description="机器学习分类; 初始化模型地址 /globalModel/3979i4yb27y.json; 支持客户端参与2次训练; "
            />
            {"这个教程的目标读者是对机器学习和TensorFlow都不太了解的新手。如果你已经了解MNIST和softmax回归(softmax regression)的相关知识，你可以阅读这个快速上手教程。当我们开始学习编程的时候，第一件事往往是学习打印Hello World。就好比编程入门有Hello World，机器学习入门有MNIST。MNIST是一个入门级的计算机视觉数据集，它包含各种手写数字图片：它也包含每一张图片对应的标签，告诉我们这个是数字几。比如，上面这四张图片的标签分别是5，0，4，1在此教程中，我们将训练一个机器学习模型用于预测图片里面的数字。我们的目的不是要设计一个世界一流的复杂模型 -- 尽管我们会在之后给你源代码去实现一流的预测模型 -- 而是要介绍下如何使用TensorFlow。所以，我们这里会从一个很简单的数学模型开始，它叫做Softmax Regression。对应这个教程的实现代码很短，而且真正有意思的内容只包含在三行代码里面。但是，去理解包含在这些代码里面的设计思想是非常重要的：TensorFlow工作流程和机器学习的基本概念。因此，这个教程会很详细地介绍这些代码的实现原理。"}

        </List.Item>
    )
}

export default index