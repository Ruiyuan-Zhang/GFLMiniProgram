import request from 'request'
import fs from 'fs'
import images from 'images'

/**
 * 读取文件到本地 然后进行尺寸处理
 */
// (async()=>{
    let ws = fs.createWriteStream('tmp.png', 'utf-8')
    let x = request('https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210713000714.png')
    x.pipe(ws)
    ws.on('close', function () {
        let img = images('tmp.png').resize(28,28).save('out.png')
        console.log(img)
    })
// })()
