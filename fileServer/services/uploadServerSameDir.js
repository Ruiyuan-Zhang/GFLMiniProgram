import fs from 'fs'
import multer from 'multer'
import stringRandom from 'string-random'

// 在同一文件夹下放置自己的模型文件
// https://blog.csdn.net/weisubao/article/details/76799572
const uploadServerSameDir = (app, url, dir) =>{
    let dirName
    let fileName
    let upload = multer({ storage: multer.diskStorage({
        destination: function (req, file, cb) {
            if (file.fieldname == 'json') {
                dirName = dir + '/' + stringRandom(20)
                fs.mkdirSync(dirName)
            }
            cb(null, dirName)
        },
        filename: function (req, file, cb) {
            fileName = file.originalname
            cb(null, fileName)
        }
    })})
    app.use(url ,upload.fields([{name:'json',maxCount:1},{name:'bin',maxCount:10}]),
        (req,res,next)=>{
            // 只返回模型文件地址
            res.json({
                ok: 200,
                url: `/${dirName}/model.json`
            })
        }
    )
}

export default uploadServerSameDir