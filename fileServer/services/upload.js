import Blob from 'fetch-blob'
import fs from 'fs'
import stream from 'stream'

const upload = app =>{
    // 全局模型上传服务器
    app.use('/upload',(req,res)=>{
        // 0 简单的输出一下
        // let data = req.body.mp
        // console.log(data)

        // 1 处理base64数据
        for (let key of Object.keys(data)){
            // 1.1 先将base64文件转回ArrayBuffer文件
            if (data[key].type.type === 'application/octet-stream'){
                data[key].data = data[key].data.map(d=>{
                    let dataBuffer = toArrayBuffer(Buffer.from(d,'base64'))
                    return dataBuffer
                })
            }
            // 1.2 将ArrayBuffer数组打包成Blob对象
            data[key].data = new Blob(data[key].data, data[key].type.type)
            console.log(data[key].data)
            
        }

        // 2 写入到文件中
        for (let key of Object.keys(data)){
            let rs = stream.Readable.from(data[key].data.stream())
            let ws = fs.createWriteStream('model/clientModel'+key)
            rs.pipe(ws)
        }
        

        // 3 回传数据 但是前端收不到这个消息 不清楚原因
        res.json({
            ok: 200,
            status: 200,
            statusText: "成功添加",
            url: 'http://henqiang.com'
        })
    })
}

export default upload