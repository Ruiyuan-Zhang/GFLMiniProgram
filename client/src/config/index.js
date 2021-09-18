/**
 * 这里利用本地用户文件进行管理用户本地的数据: 
 * + 本地临时文件只保证在小程序当前生命周期内，一旦小程序被关闭就可能被清理，即下次冷启动不保证可用。
 * + 本地缓存文件和本地用户文件的清理时机跟代码包一样，只有在代码包被清理的时会被清理。
 * 
 * 本地缓存文件只能读，不能写。所以用来存储保存用户本地的文件最合适。 
 * 更多请看 https://developers.weixin.qq.com/miniprogram/dev/framework/ability/file-system.html
 * */ 
export const local_data_path = '/local_data'
// export const file_url = 'http://127.0.0.1/file'
// export const server_url = 'http://127.0.0.1/v1'  

export const file_url = 'https://gflmini.zju-zry.club/file'
export const server_url = 'https://gflmini.zju-zry.club/v1'  

export const appName = 'GFLmini 联邦学习「移动」'
export const shareImages = [
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825180512.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825180703.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825180902.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825181032.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825181220.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825181317.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825181432.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825181458.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825181530.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825181621.png',
    'https://zhangruiyuan.oss-cn-hangzhou.aliyuncs.com/picGo/images/20210825181647.png',
]
export const getShareImage = () =>{
    const i = Math.floor(Math.random()*shareImages.length)
    return shareImages[i]
}