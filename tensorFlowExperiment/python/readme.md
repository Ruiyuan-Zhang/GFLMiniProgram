# python tensorflow 2 实验

> [加载由tfjs转换的keras模型文件](https://tensorflow.google.cn/api_docs/python/tf/keras/models/load_model?hl=en)；使用python创建并保存模型；利用tfjs-converter转换模型为node能够使用的版本；



1. 使用python创建并保存模型
> 注意：保存文件为h5，即一整个文件，而不是2.x推荐的[tf](https://tensorflow.google.cn/api_docs/python/tf/keras/models/save_model?hl=en)， [也可以从这篇文章中学习这两者的区别](https://blog.csdn.net/ljyljyok/article/details/109577520)。

```python
python main.py
```

2. 加载由tfjs转换的keras模型文件
```python
python load_tfjs_converter_model.py
```

3. 利用tfjs-converter转换模型为node能够使用的版本

```shell
tensorflowjs_converter \
    --input_format keras \
    --output_format tfjs_layers_model \
    model.h5 \
    mnistModel_keras
```

4. 利用python实现联邦学习的平均聚合算法
> [参考文章1](https://blog.csdn.net/Mr_Zing/article/details/101938334/) [参考文章2](https://github.com/WHDY/FedAvg)

```shell
python fedavg.py
```