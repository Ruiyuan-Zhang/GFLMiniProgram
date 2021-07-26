import Taro from '@tarojs/taro'

// 文件地址，如3所述
const dataDir = `${Taro.env.USER_DATA_PATH}/data.json`

// 初始化文件
const initData = () =>{
    let data = {
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

export { initData, getData,saveData,saveFileListToLocal }