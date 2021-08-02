import fs from 'fs'

const index = (app, url, dir) =>{
    app.use(url,(req,res)=>{
        const { taskId } = req.query
        let list = req.body
        fs.writeFileSync(dir+'/'+taskId+'.json',JSON.stringify(list))
        res.json({
            url: url + +'/'+taskId+'.json'
        })
    })
}

export default index