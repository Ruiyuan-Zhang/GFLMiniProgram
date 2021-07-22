import tensorflow as tf
import numpy as np

# mnistModel_tf_save_dir = 'mnistModel_tf'
mnistModel_tf_save_dir = 'mnistModel_tf1'

model = tf.keras.Sequential([
    tf.keras.layers.Dense(5, input_shape=(3,)),
    tf.keras.layers.Softmax()])
model.summary()

model.save(mnistModel_tf_save_dir)
loaded_model = tf.keras.models.load_model(mnistModel_tf_save_dir)
x = tf.random.uniform((10, 3))
loaded_model.summary()

assert np.allclose(model.predict(x), loaded_model.predict(x))

# 保存文件为h5，即一整个文件，而不是2.x推荐的[tf](https://blog.csdn.net/ljyljyok/article/details/109577520)
model.save('mnistModel.h5', save_format='h5')

