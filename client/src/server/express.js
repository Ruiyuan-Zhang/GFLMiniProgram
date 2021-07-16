import express from 'express'
import bodyParser from 'body-parser'
import Blob from 'fetch-blob'
import fs from 'fs'
import stream from 'stream'

const app = express()
const port = 3000


// parse application/x-www-form-urlencoded 未使用
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json({
    'limit':'100mb'
}))

//Buffer转ArrayBuffer
function toArrayBuffer(buf) {
	var ab = new ArrayBuffer(buf.length);
	var view = new Uint8Array(ab);
	for (var i = 0; i < buf.length; ++i) {
		view[i] = buf[i];
	}	
	return ab;		
}

//ArrayBuffer转Buffer
function toBuffer(ab) {
	var buf = new Buffer(ab.byteLength);
	var view = new Uint8Array(ab);
	for (var i = 0; i < buf.length; ++i) {
		buf[i] = view[i];
	}
	return buf;
}


app.use('/upload',(req,res)=>{
    // 0 简单的输出一下
    let data = req.body.mp

    console.log(data)

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
        let ws = fs.createWriteStream(key)
        rs.pipe(ws)
    }
    

    // 3 回传数据 但是前端收不到这个消息 不清楚原因
    res.json([{
        ok: 200,
        status: 200,
        statusText: "成功添加",
        url: 'http://henqiang.com'
    }])
})

app.listen(port)



//##################以下笔记##################//
//###########################################//

// 在'fetch-blob'提供了这个方案
// //Buffer转ArrayBuffer
// function toArrayBuffer(buf) {
// 	var ab = new ArrayBuffer(buf.length);
// 	var view = new Uint8Array(ab);
// 	for (var i = 0; i < buf.length; ++i) {
// 		view[i] = buf[i];
// 	}	
// 	return ab;		
// }

// //ArrayBuffer转Buffer
// function toBuffer(ab) {
// 	var buf = new Buffer(ab.byteLength);
// 	var view = new Uint8Array(ab);
// 	for (var i = 0; i < buf.length; ++i) {
// 		buf[i] = view[i];
// 	}
// 	return buf;
// }
