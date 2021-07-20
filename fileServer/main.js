import express from 'express'
import bodyParser from 'body-parser'
import Blob from 'fetch-blob'
import fs from 'fs'
import stream from 'stream'
import chalk from 'chalk'
import boxen from 'boxen'
import multer from 'multer'
import stringRandom from 'string-random'
import path from 'path'
import os from 'os'

const app = express()
const port = 3000



// parse application/x-www-form-urlencoded 未使用
app.use(bodyParser.urlencoded({ 
    'limit':'100mb',
    extended: false,
}))

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

// 允许跨域
app.use('', (req,res,next)=>{
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next()
})

// 模型管理静态服务器
app.use('/models', express.static('models'))

// 图片文件静态服务器
app.use('/images', express.static('images'))


// let fileName

// let uploadImage = multer({ storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'images')
//     },
//     filename: function (req, file, cb) {
//         fileName = stringRandom(20) + path.extname(file.originalname)
//         cb(null, fileName)
//     }
// })})
// app.use('/abc' ,uploadImage.single('file'),(req,res,next)=>{
//     // res.send('shagnchuanchenggong ')
//     // console.log(req.file, req.body)

//     res.json([{
//         ok: 200,
//         url: `/images/${fileName}`
//     }])
// })

// 文件上传服务器（后台）
const uploadServer = (url, dir) =>{
    let fileName
    let uploadImage = multer({ storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, dir)
        },
        filename: function (req, file, cb) {
            fileName = stringRandom(20) + path.extname(file.originalname)
            cb(null, fileName)
        }
    })})
    app.use(url ,uploadImage.single('file'),(req,res,next)=>{
        // res.send('shagnchuanchenggong ')
        // console.log(req.file, req.body)
    
        res.json([{
            ok: 200,
            url: `/${dir}/${fileName}`
        }])
    })
}

// 实例化文件上传路由
uploadServer('/uploadImage','images/back')
uploadServer('/uploadGlobalModel','models/globalModel')
uploadServer('/uploadClientModel','models/clentModel')

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
    res.json([{
        ok: 200,
        status: 200,
        statusText: "成功添加",
        url: 'http://henqiang.com'
    }])
})


///获取本机ip
function getIPAdress() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
const myHost = getIPAdress();

app.listen(port)

// 打印情况
let message = chalk.green('Serving!');
message += `\n\n${chalk.bold(`文件模型访问请使用:`)} `;
message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/models`;
message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/models`;
message += `\n\n${chalk.bold(`图片访问请使用:`)} `;
message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/images`;
message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/images`;
message += `\n\n${chalk.bold(`上传图片文件请使用:`)} `;
message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/uploadImage`;
message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/uploadImage`;
message += `\n\n${chalk.bold(`上传全局模型文件请使用:`)} `;
message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/uploadGlobalModel`;
message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/uploadGlobalModel`;
message += `\n\n${chalk.bold(`上传客户端模型文件请使用:`)} `;
message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/uploadClientModel`;
message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/uploadClientModel`;
message += `\n\n${chalk.bold(`上传模型文件请使用「tfjs」:`)} `;
message += `\n${chalk.bold(`- 本地:`)}         http://localhost:${port}/upload`;
message += `\n${chalk.bold('- 局域网:')}       http://${myHost}:${port}/upload`;
console.log(boxen(message, {
    padding: 1,
    borderColor: 'green',
    margin: 1
}));



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
