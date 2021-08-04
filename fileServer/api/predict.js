/**
node predict.js /Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/models/globalModelSameDir/1Si9K40CBEPITncMxGHp/model.json\
 /Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/tests/607191994552295424.json\
 /Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/tests/test.json
 */

import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-node'
import fs from 'fs'
import images from 'images'
import PNG from 'png-js'
import { argv } from 'process'

let globalModelPath =  argv[2]
let testDataPath = argv[3]
let newTestDataPath = argv[4]
let fileServer = argv[5]

let imgs = fs.readFileSync(testDataPath,{encoding:'utf-8'})
imgs = JSON.parse(imgs)

// 下载模型
let model = await tf.loadLayersModel("file://" + globalModelPath)
// model.summary()

//转换模型尺寸
const resize = ({url,width=28,height=28}) =>{
    const rgba2gray = (r,g,b,a) => (r*0.299+g*0.587+b*0.144)*a/255
    return new Promise((resolve,reject)=>{
        let buf = images(url).resize(width,height).encode('png')
        let img = new PNG(buf)
        img.decode(pixels=>{
            let arr = []
            for (let i=0;i<pixels.length;i+=4){
                let v = rgba2gray(pixels[i],pixels[i+1],pixels[i+2],pixels[i+3])
                arr.push(v/255)
            }
            resolve(arr)
        })
    })
}

// 计算预测结果
let right = 0
let rs = []
for (let {image,value} of imgs){
    image = fileServer + image
    let res = await resize({url:image})
    res = Float32Array.from(res) 
    res = tf.tensor2d(res,[1,784])
    let preY = model.predict(res)
    preY.print()
    console.log(value)
    preY = preY.dataSync()
    preY = preY.indexOf(Math.max(...preY))
    rs.push({
        value,
        preY
    })
    if (value==preY)right++
}
console.log(`准确率为:${right/imgs.length}`)

// 将测试集保存下来
fs.writeFileSync(newTestDataPath, JSON.stringify(imgs))

console.log(rs)
