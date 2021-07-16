import Taro from '@tarojs/taro'

/**
 * 将图片大小转换
 * @param {*} src 地址 
 * @param {*} width 宽度
 * @param {*} height 高度
 * @param {*} gray 是否转换为灰色数据 （当前不可用）
 * 
 */
const resize = async ({src, width=28, height=28, gray=true}) =>{
    // 加载一个图片到画布中 
    // 创建离屏 2D canvas 实例
    const canvas = Taro.createOffscreenCanvas({type: '2d', width: width, height: height})
    // 获取 context。注意这里必须要与创建时的 type 一致
    const context = canvas.getContext('2d')

    // 创建一个图片
    const image = canvas.createImage()
    // 等待图片加载
    await new Promise(resolve => {
        image.onload = resolve
        image.src = src // 要加载的图片 url
    })
 
    // 把图片画到离屏 canvas 上
    context.clearRect(0, 0, width, height)
    context.drawImage(image, 0, 0, width, height)

    // 获取画完后的数据
    let imgData = context.getImageData(0, 0, width, height)
    for (let i=0;i<imgData.data.length;i+=4){
        let gray = rgba2gray(imgData.data[i],imgData.data[i+1],imgData.data[i+2],imgData.data[i+3])
        imgData.data[i]=imgData.data[i+1]=imgData.data[i+2]=gray
        imgData.data[i+3]=255
    }

    // 返回ImageData
    return imgData
}

/**
 * 转换rgba为灰色
 * @param {*} r 红色
 * @param {*} g 绿色
 * @param {*} b 蓝色
 * @param {*} a 透明度
 */
const rgba2gray = (r,g,b,a) => (r*0.299+g*0.587+b*0.144)*a/255

/**
 * 展示图片
 * @param {*} params https://taro-docs.jd.com/taro/docs/apis/canvas/canvasPutImageData/
 */
const showImage = params =>{
    Taro.canvasPutImageData(params)    
}

// export default
// 使用export default命令，为模块指定默认输出。其他模块在加载该模块时，就可以指定任意名称来输入，而无需预先知道要加载的变量或函数名称。
// 一个模块只能有一个默认输出，因此在导入默认输出时，import命令后不需要加大括号，否则会报错：The requested module './xxx.js' does not provide an export named 'xxx'。
// ————————————————
// 版权声明：本文为CSDN博主「般若Neo」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/hwhsong/article/details/84638931

export {resize,rgba2gray, showImage} 