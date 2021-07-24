import {View,Canvas} from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtDivider, AtButton } from 'taro-ui'
import Title from '@/components/TitleHandleData'
import {local_data_path} from '@/config'
import {globalVariables} from '@/common/enum'
import Item from './components/Item'
import './index.less'
import test from './test/index'
import { useState } from 'react'
  
/**
 * 补充数据界面
 * 进入本界面的唯一方式是添加数据界面
 */
const Index = () => {

    const { task, files } = globalVariables.get_data_TO_add_data

    const objs = [
        {
            name: '长度',
            eglish_name: 'cd',
            type: 'text',
            tips: '请输入长度'
        }, {
            name: '质量',
            eglish_name: 'zl',
            type: 'text',
            tips: '请输入质量信息'
        }, {
            name: '材质',
            eglish_name: 'cz',
            type: 'text',
            tips: '请输入刀具材质'
        }, {
            name: '划痕',
            eglish_name: 'hh',
            type: 'text',
            tips: '请确认该刀具是否有划痕'
        }, {
            name: '凹坑',
            eglish_name: 'ak',
            type: 'text',
            tips: '请确认该刀具是否有凹坑'
        }, {
            name: '涂层剥落',
            eglish_name: 'tcbl',
            type: 'text',
            tips: '请确认该刀具是否有涂层剥落'
        }, {
            name: '边缘豁口',
            eglish_name: 'byhk',
            type: 'text',
            tips: '请确认该刀具是否有边缘豁口'
        }
    ]
    
    const [localDataList, setLocalDataList] = useState([])
    const handleLocalDataChange = ({index, data}) => {
        // 这里搞不懂为啥 ...解析之后会出现问题。 
        let ldl = localDataList
        ldl[index] = data
        setLocalDataList(ldl)
    }

    // 保存本地数据列表
    const save_local_data_list = async e =>{
        let list = [ ...localDataList ]
        for (let d of list){
            await Taro.saveFile({
                tempFilePath: d.file,
                success: res =>{
                    d.filePath = res.savedFilePath
                }
            })
        }

        // 将list保存在文件中
        const fs = Taro.getFileSystemManager()
        // 我不确定，要是原来就存在这个文件怎么办，emmm
        // 答：后面的会将前一个替换
        // fs.writeFileSync(
        //     `${Taro.env.USER_DATA_PATH}/hello.json`,
        //     "JSON.stringify(list)1",
        //     'utf-8'
        // ) 
        fs.writeFileSync(
            `${Taro.env.USER_DATA_PATH}/hello.json`,
            JSON.stringify(list),
            'utf-8'
        ) 
        // 读取操作如下
        let text = fs.readFileSync(`${Taro.env.USER_DATA_PATH}/hello.json`,'utf8')
        console.log(text)
        // Taro.redirectTo({
        //     url:'/pages/task/index'
        // })

    }

    return (
        <View className='addItem'>
            <Title title='基于机器学习的刀具表面缺陷检测及分类方法' subtitle='补充数据'/>
            {files.map((f, i)=><Item key={f} index={i} img={f} objs={objs} handleLocalDataChange={handleLocalDataChange}/>)}
            <AtButton type='primary' className='btn' onClick={save_local_data_list}>加入任务</AtButton>
            <AtDivider content='没有更多了' />
            <AtButton onClick={()=>{
                test()
            }}>测试呀</AtButton>
            <Canvas style='width: 300px; height: 200px;' canvasId='myCanvas' />
        </View>
    ) 
}
export default Index