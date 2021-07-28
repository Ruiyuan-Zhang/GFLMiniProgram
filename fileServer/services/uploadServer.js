import multer from 'multer'
import stringRandom from 'string-random'
import path from 'path'

// 文件上传服务器（后台）
const uploadServer = (app, url, dir) =>{
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

export default uploadServer