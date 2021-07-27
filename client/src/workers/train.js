const createWorker = () =>{
    const worker = Taro.createWorker('workers/index.js') // 文件名指定 worker 的入口文件路径，绝对路径
    return worker
}

