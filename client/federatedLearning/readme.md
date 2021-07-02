# 联邦学习微信小程序应用设计



〇、技术栈

1. 使用[TensorFlow.js](https://tensorflow.google.cn/js)作为前端训练的工具。

   > TensorFlow.js 是一个用于使用 JavaScript 进行机器学习开发的库
   > 使用 JavaScript 开发机器学习模型，并直接在浏览器或 Node.js 中使用机器学习模型。

2. 采用的模型转换框架 MMdnn

   > 更多框架介绍在 https://github.com/ysh329/deep-learning-model-convertor
   > <img src="https://github.com/Microsoft/MMdnn/raw/master/docs/supported.jpg" style="zoom:25%;" />

   MMdnn is a comprehensive and cross-framework tool to convert, visualize and diagnose deep learning (DL) models. The "MM" stands for model management, and "dnn" is the acronym of deep neural network.

   MMdnn为上述框架之间提供了一个中间转换格式