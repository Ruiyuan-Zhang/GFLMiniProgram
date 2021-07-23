import tensorflow as tf

loaded_model = tf.keras.models.load_model('../node.js/node/mnistModel_keras')

loaded_model.summary()