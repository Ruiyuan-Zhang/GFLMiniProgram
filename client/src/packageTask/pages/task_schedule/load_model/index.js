// 加载远程模型 然后进行训练
import * as tf_layers from '@tensorflow/tfjs-layers'
import * as tf_core from '@tensorflow/tfjs-core'
import Taro from '@tarojs/taro'

// 这里不用匿名函数，是因为，this指向匿名函数的外部对象
global.FormData = function () {
    this.mp = {}
    this.append= (x,y) =>{
      this.mp[x] = y
    }
}

global.Blob = ( data, type) =>{
    if (type.type === 'application/octet-stream'){
        data = data.map(d=>Taro.arrayBufferToBase64(d))
        // data = Taro.arrayBufferToBase64(data)
    }
    console.log({data,type})
    return {data,type}
}

const loadModel = async src =>{
    const model = await tf_layers.loadLayersModel(src)
    return model
}

const main = async ()=>{
    // 1. 加载远程模型
    let model = await loadModel('http://localhost:5000/model.json')
    model.summary()

    // 2. 可以对模型进行训练 

    // 3. 使用模型进行预测

    // 4. 使用缓存
    // 4.1 缓存
    const plugin = requirePlugin('tfjsPlugin')
    const handler = plugin.localStorageIO('mymodel')
    model.save(handler)
    // 4.2 从缓存中拿出来
    let nn = await tf_layers.loadLayersModel(handler)
    nn.summary()

    // 5. 使用文件
    // 5.1 文件保存
    let fs = Taro.getFileSystemManager()
    const fileHandler = plugin.fileStorageIO('zry',fs)
    await nn.save(fileHandler)
    // 5.2 文件下载 
    const loaded = await tf_layers.loadLayersModel(fileHandler)
    loaded.summary()
    // 6. 上传
    // 6.1 使用post上传
    const saveResults = await model.save(tf_core.io.http(
            'http://localhost:3000/upload', {requestInit: {method: 'post'}}
        )
    )
    // 6.2 输出保存结果
    console.log("到底保存了啥")
    console.log(saveResults)
    console.log(saveResults.responses)
    console.log(saveResults.responses[0].json())
    console.log(saveResults.responses[0].arrayBuffer())

}

export default main 