# 客户端模型管理方案

> 在本文档中，将整理在前端管理数据文件、模型文件等内容的逻辑。


## 1. 哪些文件需要管理？

用户在加入到某个任务后：
+ 测试数据
+ 下载全局模型（可以依赖线上）
+ 保存本地产生的模型（可以依赖线上）


## 2. 这些文件都是怎么产生的？
+ 如上文

## 3. 目录结构？
```
.
|
+-- task_taskId         // 使用`task_taskId`命名的文件
|   |      
|   +-- data            // 用户本地的数据
|       +-- xxxxx.png
|       +-- xxxxx.jpg
|       +-- xxxxx.txt
|       +-- xxxxx.mp4
|       +-- ...
|      
+-- data.json       // 用来定位文件位置的json表

```
data.json结构如下
```json
{
    userName: 'zhangruiyuan',
    tasks:[
        {
            id:'0001',
            name:'mnist',
            categoryId:'10001',
            categoryName:'机器学习',
            file:'/images/xxx.png',
            description:'xxx',
            initModelFile:'/files/xxx.json',
            superParams:'lr=0.1',
            maxTimesPerClient:'3',
            createdAt:'2021-07-02',
            dataFormats:[
                {
                    taskId:'0001',
                    id:'20001',
                    type:'image',
                    name:'image',
                    size:'28 28',
                    values: [                         // image/file文件地址，由前端生成
                        '/task_taskId/data/xxxx.png',
                        '/task_taskId/data/xxxx.jpg',
                        '/task_taskId/data/xxxx.png',
                    ]        
                },{
                    taskId:'0001',
                    id:'20002',
                    type:'number',
                    name:'value',
                    size:'-',
                    value: [                          // number/string值，由前端生成
                        '9',                   
                        '8',                   
                        '7',  
                    ]              
                }
            ]
        }
    ]
}
```

## 4. 用户在前端可以怎样生成这些文件？
用户在任务详情页中点击「添加训练数据」，若需要`image/file`格式数据，就收集用户本机的文件，然后再进行补充数据。
补充之后的数据格式如下：
```json
如3所示。
```


## 5. 用户在前端可以怎样使用这些文件？
```js
// 使用数据文件获取数据进行训练
const getDataList = (taskId) =>{
    let res = require('./data.json')
    let list = []
    let task = res.tasks.filter(t.id === taskId )
    if (task.length == 0){
        return new Error('未找到该任务')
    }
    task = task[0]
    // `task.dataFormats.length == 0` 表示研究者只使用用户本地的计算资源，而不是用数据资源，具体的逻辑还没有设计
    let sz = task.dataFormats.length == 0 ? 0 : task.dataFormats[0].values.length
    for (let i=0;i<sz;i++){
        list.push({})
    }
    task.dataFormats.forEach((df,i)=>{
        df.values.forEach((v,j)=>{
            list[j][df.name] = v
        })
    })
    return list
}

// 返回样例如下
list = [{
    image:'/task_taskId/data/xxx.png',
    value:'8'
},{
    image:'/task_taskId/data/xxx.png',
    value:'7'
}]

```

## 6. 用户在前端可以怎样保存/更新这些文件？
```js
// 文件地址，如3所述
const dataDir = `${Taro.env.USER_DATA_PATH}/data.json`

// 读取文件
const getData = () =>{
    const fs = Taro.getFileSystemManager()
    let data = fs.readFileSync(dataDir,'utf8')
    data = JSON.parse(data)
    return data
}

// 保存文件
const saveData = data =>{
    const fs = Taro.getFileSystemManager()
    fs.writeFileSync(
        dataDir,
        JSON.stringify(data),
        'utf-8'
    ) 
}
```
