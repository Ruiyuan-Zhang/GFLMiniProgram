// node /Users/zhangruiyuan/TaroProjects/GFLMiniProgram/TensorFlowTest/node.js/node/main.js 

import tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-node'

/**
 * 制造一个前端可以拿来训练的模型
 * 用来构造一个训练
 */

const main = async () =>{

    let model = tf.sequential({
        layers:[
            tf.layers.dense({units: 128, activation: 'relu', inputShape: [784]}),
            tf.layers.dense({units: 10, activation: 'softmax'}), 
        ]
    })

    model.compile({
        optimizer: 'adamax',
        loss:'categoricalCrossentropy',
        metrics: ['accuracy'],
    })

    model.summary()
    
    await model.save('file://./mnistModel')
  
}

main()