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
import init from './services/init.js'
import tips from './services/tips.js'
import upload from './services/upload.js'
import uploadServer from './services/uploadServer.js'
import uploadServerSameDir from './services/uploadServerSameDir.js'
import {getIPAdress,toArrayBuffer,toBuffer} from './utils/index.js'

// 初始化
const app = express()
const port = 3000
init(app)

// 模型管理静态服务器
app.use('/models', express.static('models'))

// 图片文件静态服务器
app.use('/images', express.static('images'))

// 实例化文件上传路由
uploadServer(app, '/uploadImage','images/back')
uploadServer(app, '/uploadGlobalModel','models/globalModel')
uploadServer(app, '/uploadClientModel','models/clentModel')

// 同文件夹全局模型上传
uploadServerSameDir(app, '/uploadGlobalModelSameDir','models/globalModelSameDir')

// 启动服务
app.listen(port)

// 提示信息
tips(port)