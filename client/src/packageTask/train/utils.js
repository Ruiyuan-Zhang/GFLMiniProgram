// 判断该任务是不是图像分类任务
const ifImageCategory = task => {
    if (task.dataFormats.length!=2)return false
    let reached = 2
    let mp = new Map([
        ['image',false],
        ['value',false]
    ])
    for (let df of task.dataFormats){
        if (mp.has(df.englishName)&&mp.get(df.englishName)==false){
            mp.set(df.englishName,true)
            reached --
        }
    }
    return reached == 0
}

// 判断是不是 values-value 形式的数据格式
const ifValuesValue = task =>{
    if (task.dataFormats.length <=1 )return false
    // 1. 判断是不是image/file/string
    for (let df of task.dataFormats){
        if (df.type == 'image' || df.type == 'file' || df.type == 'string'){
            return false
        }
    }
    // 2. 判断是否存在value
    for (let df of task.dataFormats){
        if (df.englishName == 'value'){
            return true
        }
    }
    return false
}

export { ifImageCategory, ifValuesValue }