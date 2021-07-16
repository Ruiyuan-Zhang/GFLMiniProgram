import Taro from '@tarojs/taro'

const Index = async () =>{
        // 将文件读取出来
        const fs = Taro.getFileSystemManager()
        let text = fs.readFileSync(`${Taro.env.USER_DATA_PATH}/hello.json`,'utf8')
        text = JSON.parse(text)
        console.log(text[0].filePath)
        // 加载一个图片到画布中 
        // 创建离屏 2D canvas 实例
        const canvas = Taro.createOffscreenCanvas({type: '2d', width: 300, height: 150})
        // 获取 context。注意这里必须要与创建时的 type 一致
        const context = canvas.getContext('2d')

        // 创建一个图片
        const image = canvas.createImage()
        // 等待图片加载
        await new Promise(resolve => {
                image.onload = resolve
                image.src = text[0].filePath // 要加载的图片 url
        })

        // 把图片画到离屏 canvas 上
        context.clearRect(0, 0, 28, 28)
        context.drawImage(image, 0, 0, 28, 28)

        // 获取画完后的数据
        let imgData = context.getImageData(0, 0, 28, 28)
        for (let i=0;i<imgData.data.length;i+=4){
                const rgba2gray = (r,g,b,a) => (r*0.299+g*0.587+b*0.144)*a/255
                let gray = rgba2gray(imgData.data[i],imgData.data[i+1],imgData.data[i+2],imgData.data[i+3])
                imgData.data[i]=imgData.data[i+1]=imgData.data[i+2]=gray
                imgData.data[i+3]=255
        }

        // 输出这个图片地址
        console.log(imgData)
        // const data = new Uint8ClampedArray([255, 0, 0, 255])
        Taro.canvasPutImageData({
        canvasId: 'myCanvas',
        x: 10,
        y: 10,
        width: 28,
        data: imgData.data,
        success: function (res) {}
        })    

}

export default Index