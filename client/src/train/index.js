import Taro from '@tarojs/taro'
import { ifImageCategory,ifValuesValue } from './utils'
import { imageCategory } from './train'

const init = () =>{
    console.log('训练所需的初始化')
    // 这里不用匿名函数，是因为，this指向匿名函数的外部对象
    global.FormData = function () {
        this.mp = {}
        this.append= (x,y) =>{
        this.mp[x] = y
        }
    }
    global.Blob = ( data, type) =>{
        if (type.type === 'application/octet-stream'){
            data = data.map(d=>Taro.arrayBufferToBase64(d))
            // data = Taro.arrayBufferToBase64(data)
        }
        console.log({data,type})
        return {data,type}
    }
}

const train = async data =>{
    const {task} = data
    if (ifImageCategory(task)){
        // 图像分类任务
        let res = await imageCategory(data)
        return res
        
    }else if (ifValuesValue(task)){
        // values-value 形式的数据格式

    }else {
        console.log('不支持该形式的数据格式')
    }
}


export { init, train }