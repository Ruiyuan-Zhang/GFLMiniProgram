import tensorflow as tf
import copy
import sys
import os 

# 参与聚合的模型
clientModels = sys.argv[1].split()

for index, clientModel in enumerate(clientModels):
    clientModels[index] = tf.keras.models.load_model(clientModel)

# 全局模型参数列表
vs = None
for client in clientModels:
    lvs = client.trainable_variables
    if vs is None:
        vs = copy.deepcopy(lvs)     
    else:
        for v,lv in zip(vs,lvs):
            v.assign_add(lv)

for i,v in enumerate(vs):
    vs[i] = v/len(clientModels)


# lastModel 在上一个全局模型的基础上对其中的可训练变量进行改进
# 我不确定这有没有意义，有待验证
globalModel = tf.keras.models.load_model(sys.argv[1].split()[0])
lgvs = globalModel.trainable_variables
for lgv,v in zip(lgvs,vs):
    lgv.assign(v)

# 输出一下
# print('%10s clients' % len(clientModels))
# for c in clientModels:
#     print('client model ')
#     print(c.trainable_variables)
# print('global model')
# print(globalModel.trainable_variables)

# 保存新的全局模型
tmpPath = sys.argv[2]
os.makedirs(tmpPath)
globalModel.save(tmpPath+'/model.h5',save_format='h5')
print(tmpPath+"/model.h5")
