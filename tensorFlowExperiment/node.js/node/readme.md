# 在`node`环境下进行tensorFlow实验

> 使用初始化一个全局模型; [将js下保存的模型转换为python模型](https://github.com/tensorflow/tfjs/tree/master/tfjs-converter)



1. 初始化全局模型

```shell
node main.js 
```

2. 将js模型转换为python

> 利用上文中生成的模型`mnistModel/*`来生成`python`下的模型。可以使用[`keras.model.load_model()`](https://keras.io/getting-started/faq/#savingloading-whole-models-architecture-weights-optimizer-state) 或者[`tf.keras.models.load_model()`](https://www.tensorflow.org/api_docs/python/tf/keras/models/load_model) 来加载转换后的模型

```shell
tensorflowjs_converter \
	--input_format tfjs_layers_model \
	--output_format keras \
	mnistModel/model.json \
	mnistModel_keras/
```

