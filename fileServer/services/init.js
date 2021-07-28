import bodyParser from 'body-parser'

const init = app =>{
    // parse application/x-www-form-urlencoded 未使用
    app.use(bodyParser.urlencoded({ 
        'limit':'100mb',
        extended: false,
    }))

    // parse application/json
    app.use(bodyParser.json({
        'limit':'100mb'
    }))


    // 允许跨域
    app.use('', (req,res,next)=>{
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Content-Type', 'application/json;charset=utf-8');
        next()
    })
}

export default init

