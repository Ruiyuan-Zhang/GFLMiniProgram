import tensorflow as tf
import copy

# 参与聚合的模型
clientModels = []
clientModels.append(tf.keras.models.load_model('mnistModel_tf1'))
clientModels.append(tf.keras.models.load_model('mnistModel_tf'))
clientModels.append(tf.keras.models.load_model('mnistModel_tf'))

# 全局模型参数列表
vs = None
for client in clientModels:
    lvs = client.trainable_variables
    if vs is None:
        vs = copy.deepcopy(lvs)
        pass
    for v,lv in zip(vs,lvs):
        v.assign_add(lv)
    
for v in vs:
    v = v/len(clientModels)

# lastModel 在上一个全局模型的基础上对其中的可训练变量进行改进
# 我不确定这有没有意义，有待验证
globalModel = tf.keras.models.load_model('mnistModel_tf')
lgvs = globalModel.trainable_variables
for lgv,v in zip(lgvs,vs):
    lgv.assign(v)

# 输出一下
print('3 clients')
for c in clientModels:
    print('client model ')
    print(c.trainable_variables)
print('global model')
print(globalModel.trainable_variables)

# 保存新的全局模型
globalModel.save('globalModel')
        