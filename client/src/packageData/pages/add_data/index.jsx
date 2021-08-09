import {View,Canvas} from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtDivider, AtButton } from 'taro-ui'
import Title from '@/components/TitleHandleData'
import {globalVariables} from '@/common/enum'
import Item from './components/Item'
import './index.less'
import { useState } from 'react'
import { getData,saveData,saveFileListToLocal } from '@/common/data'
  
/**
 * 补充数据界面
 * 进入本界面的唯一方式是添加数据界面
 */
const Index = () => {

    const { task, files } = globalVariables.get_data_TO_add_data
    

    /**
     *  因动画ui而附加的处理列表文件数据及逻辑。
     * */ 
    const [localDataList, setLocalDataList] = useState([])
    const handleLocalDataChange = ({index, data}) => {
        // 这里搞不懂为啥 ...解析之后会出现问题。 
        let ldl = localDataList
        ldl[index] = data
        setLocalDataList(ldl)
    }

    /**
     * 将新的数据集保存在微信小程序的本地文件中
     */
    const save_local_data_list = async ({task,localDataList})=>{
        console.log(localDataList)
        // 将本地临时文件保存为本地缓存文件（可读不可写）
        for (let ld of localDataList){
            let url = ld.image
            if (!url) break
            let fs = Taro.getFileSystemManager()
            let savedFilePath = await fs.saveFileSync(url)
            ld.image = savedFilePath
        }

        
        let data = getData()
        let originTask = null
        data.tasks.forEach(t=>{
            if (t.idStr == task.idStr){
                originTask = t   // originTask 指向了data中的一个task对象
            }
        })
        if (!originTask){
            originTask = task
        }
        originTask.dataFormats.forEach(df=>{
            let lastValues = df.values || []
            df.values = [...lastValues,...localDataList.map(ld=>ld[df.englishName])]
        })
        // 将originTask添加到data中
        let ifHave = false 
        for (let i=0;i<data.tasks.length;i++){
            if (data.tasks[i].id == originTask.id){
                // 注意，如果原来就存在这个任务的话，
                // originTask已经指向了原来的对象
                // originTask就不需要更新到原来的对象中
                // 直接更新就行
                ifHave = true
                break 
            }
        }
        if (!ifHave)data.tasks.push(originTask)

        console.log(localDataList)
        console.log(data)
        saveData(data)

        const {ret} = getCurrentInstance().router.params

        if (ret&&ret=='taskDetail'){
            Taro.reLaunch({url:'/packageTask/pages/task_schedule/index?id='+task.idStr})
        }else{
            // 添加训练数据 -> 添加数据（图片）界面 -> 补充数据界面
            // 所以需要退回2个
            Taro.navigateBack({delta:2})
        }
    }
    
    return (
        <View className='addItem'>
            <Title title='基于机器学习的刀具表面缺陷检测及分类方法' subtitle='补充数据'/>
            {files.map((f, i)=><Item key={f} index={i} img={f} dataFormats={task.dataFormats} handleLocalDataChange={handleLocalDataChange}/>)}
            <AtButton type='primary' className='btn' onClick={()=>save_local_data_list({task,localDataList})}>提交测试数据</AtButton>
            <AtDivider content='没有更多了' />
        </View>
    ) 
}
export default Index