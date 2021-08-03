import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-node'
import fs from 'fs'
import images from 'images'
import PNG from 'png-js'

let model = 'http://localhost:3000/models/clientModel/B8CBNEmbzv4G5gCHDnU3/model.json'
const imgs = [
    {image:'/Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/images/back/1PuwyAj5k44vXQBJZ2Ex.jpeg',value:'2'},
    {image:'/Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/images/back/5qivuFWe8gqMIKPml5xY.jpeg',value:'1'},
    {image:'/Users/zhangruiyuan/TaroProjects/GFLMiniProgram/fileServer/images/back/RRBbESdm1C1i9Dx54dYP.jpeg',value:'4'},   
]

// 下载模型
model = await tf.loadLayersModel(model)
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
for (let {image,value} of imgs){
    let res = await resize({url:image})
    res = Float32Array.from(res) 
    res = tf.tensor2d(res,[1,784])
    let preY = model.predict(res)
    preY = preY.dataSync()
    preY = preY.indexOf(Math.max(...preY))
    if (value==preY)right++
}
console.log(`准确率为:${right/imgs.length}`)
