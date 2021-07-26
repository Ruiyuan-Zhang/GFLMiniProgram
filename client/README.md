# GFLMiniProgram

> 本项目使用`Taro v3.2`，使用 React框架开发，支持 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。

## 〇、开发环境

nvm 管理node版本
node.js v14.0.0 nvm use 14

taro 物料市场 https://taro-ext.jd.com/
taro 组件库 https://taro-docs.jd.com/taro/docs/components-desc
taro api https://taro-docs.jd.com/taro/docs/apis/about/desc
taro ui https://taro-ui.jd.com/#/docs/introduction
react https://react.docschina.org/docs/getting-started.html
微信小程序开发文档 https://developers.weixin.qq.com/miniprogram/dev/framework/

<!-- LowDB 我想用这个作为我微信小程序的数据库，但是用不了，取消了 -->

@tarojs/plugin-mock，一个简易的数据 mock 插件

图片的裁剪 https://juejin.cn/post/6850418110022254600
https://gitee.com/lylxq/photoCut/

taro 压缩 使用画布 https://www.jianshu.com/p/5a8959c9101b 、

最终的方案
1. 使用这个组件进行裁剪到一定的大小 https://taro-ext.jd.com/plugin/view/5d58c4553da7cb07dbc5cf58
2. taro 压缩 使用画布 https://www.jianshu.com/p/5a8959c9101b 


小程序端如何上传文件。
1. 将文件转base64然后添加到json中上传
2. 在gin中对base64进行解析

执行远程代码方案
https://github.com/bplok20010/taro-script

模型转换方案

1. tensorflow python -> nodejs
pip install tensorflowjs
tensorflowjs_converter --input_format keras mnist.h5 nodejs
进而可以将python的 tensorflow模型转换成 小程序中能够使用的模型

2. pytorch -> tensorflow
https://blog.csdn.net/qq_30666517/article/details/113249029

3. tensorflow nodejs -> tensorflow python
https://tensorflow.google.cn/js/guide/conversion 这个是将python转换成nodejs的程序

tensorflow从json中读取模型
https://blog.csdn.net/weixin_35146121/article/details/113537500
https://tensorflow.google.cn/versions/r2.1/api_docs/python/tf/keras/models/model_from_json // 实验了一下，不行，应该是从某一个配置文件中生成一个model这样的代码

https://github.com/tensorflow/tfjs/tree/master/tfjs-converter 官方的转换器
tensorflowjs_converter --input_format tfjs_layers_model mnist.h5 nodejs

模型上传 https://blog.csdn.net/mogoweb/article/details/104284885
https://blog.csdn.net/mogoweb/article/details/93998477?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242



文件上传 node 
https://www.cnblogs.com/jackson-yqj/p/10155194.html 很好
https://www.php.cn/js-tutorial-406212.html


Blob 替代方案
https://www.npmjs.com/package/fetch-blob
https://blog.csdn.net/muzidigbig/article/details/88872213

这个貌似也行 没试验
https://www.npmjs.com/package/cross-blob


tensorflow.js 联邦学习实验

https://github.com/PAIR-code/federated-learning
https://github.com/tensorflow/federated

tensorflow.js 模型可以转换成 keras模型
https://github.com/tensorflow/tfjs-converter/tree/master/tfjs-converter

要完成的任务

加入任务之后可以提交数据

1. 收集用户本地数据

2. 补充训练需要的辅助数据

3. 将所有本地数据保存在 任务编号-任务名称命名的文件中 xxx_xxx.json


