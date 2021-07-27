import Taro from '@tarojs/taro'

// 文件地址，如3所述
const dataDir = `${Taro.env.USER_DATA_PATH}/data.json`

// 初始化文件
const initData = () =>{
    let data = getData()
    if (data)return
    data = {
        tasks: []
    }
    saveData(data)
}

// 读取文件
const getData = () =>{
    const fs = Taro.getFileSystemManager()
    let data = fs.readFileSync(dataDir,'utf8')
    data = JSON.parse(data)
    return data
}

// 保存文件
// 要是存在该文件，就替换掉
const saveData = data =>{
    const fs = Taro.getFileSystemManager()
    fs.writeFileSync(
        dataDir,
        JSON.stringify(data),
        'utf-8'
    ) 
}

// 将临时的文件数据变成本地数据
const saveFileListToLocal = async list =>{
    for (let i =0;i<list.length;i++){
        await Taro.saveFile({
            tempFilePath: list[i],
            success: res =>{
                list[i] = res.savedFilePath
            }
        })
    }
    return list
}

// 使用数据文件获取数据进行训练
// 需要传入 taskId 和 getData 的返回值
// 返回样例如下
// list = [{
//     image:"/task_taskId/data/xxx.png",
//     value:"8"
// },{
//     image:"/task_taskId/data/xxx.png",
//     value:"7"
// }]
const getDataList = ({taskId,data}) =>{
    let res = data
    let list = []
    let task = res.tasks.filter(t => t.idStr == taskId )
    if (task.length == 0){
        // 该任务的测试数据为0份
        return []
    }
    task = task[0]
    // `task.dataFormats.length == 0` 表示研究者只使用用户本地的计算资源，而不是用数据资源，具体的逻辑还没有设计
    let sz = task.dataFormats.length == 0 ? 0 : task.dataFormats[0].values.length
    for (let i=0;i<sz;i++){
        list.push({})
    }
    task.dataFormats.forEach((df,i)=>{
        df.values.forEach((v,j)=>{
            list[j][df.name] = v
        })
    })
    return list
}



export { initData, getData,saveData,saveFileListToLocal,getDataList }