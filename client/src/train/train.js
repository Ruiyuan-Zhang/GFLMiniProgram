import * as tf_core from '@tensorflow/tfjs-core'
import * as tf_layers from '@tensorflow/tfjs-layers'
import { resize }  from '@/utils/image_tools'
import { file_url } from '@/config'
import stringRandom from 'string-random'

// 执行图像分类任务
const imageCategory = async ({task,dataList,globalModelFile,onLoadModel,onIndexEpochEnd,onTrainEnd}) =>{
    // 0. 数据预处理

    // 1. 处理数据集 转换成灰度的图片
    let x_train=[],y_train=[]
    let dfi = task.dataFormats.filter(df=>df.englishName=='image')[0]
    let size = dfi.size
    let oneHot = dfi.oneHot || 10 // 在image数据格式的输入中添加上oneHot变量
    size = size.split(' ')
    let width = size[0]
    let height = size[1]
    for (let i in dataList){
        console.log(i)
        let {data} = await resize({width,height,src:dataList[i].image})
        data = data.filter((v,i)=>i%4===0)
        data = data.map(v=>v/255)
        // tensor1d 支持的数据类型为 'float32'|'int32'|'bool'|'complex64'|'string'
        data = Float32Array.from(data)   
        x_train=[...x_train,...data]
        y_train=[...y_train,dataList[i].value]
    }
    x_train = tf_core.tensor2d(x_train,[dataList.length,width*height])   
    y_train = tf_core.tensor1d(y_train,'int32')
    y_train = tf_core.oneHot(y_train,oneHot)

    // 2. 获取在线的模型 进行训练
    let model = await tf_layers.loadLayersModel(file_url+globalModelFile)
    model.summary()
    onLoadModel()

    // 3. 配置网络
    model.compile({
        optimizer: 'adamax',
        loss:'categoricalCrossentropy',
        metrics: ['accuracy'],
    })

    // 4. 使用回调函数 在每轮训练结束之后通过全局变量告知任务训练的情况
    for (let i=0;i<100;i++){
        const {history} = await model.fit(x_train,y_train,{
            batchSize:16,
            epochs:3,
            validationSplit: 0.2,
            shuffle:true,
            callbacks:[{
                onEpochEnd:(epoch, logs)=>{
                    // 每epoch结束之后的回调
                }
            }]
        })
        onIndexEpochEnd({index:i,history})
    }
    onTrainEnd()

    // 5. 将模型上传到互联网中
    let path = stringRandom(20)
    await model.save(tf_core.io.http(
        file_url+'/upload?path='+path, {requestInit: {method: 'post'}}
    ))
    path = '/models/clientModel/' + path + '/model.json'

    // 6. 返回新client模型地址
    return path
}

export  { imageCategory }