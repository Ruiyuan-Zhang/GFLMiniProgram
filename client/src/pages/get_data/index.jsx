import {View} from '@tarojs/components'
import {AtImagePicker, AtButton} from 'taro-ui'
import {useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import { getCurrentInstance } from '@tarojs/taro'
import Title from '@/components/TitleHandleData'
import { globalVariables } from '@/common/enum'
import './index.less'

const Index = () => {

    const [task,setTask] = useState({})
    const [files, setFiles] = useState()
    const onChange = files => {
        setFiles(files)
    }
    useEffect(()=>{
        let task = globalVariables.nowAddTask 
        console.log(task)
        setTask(task)
    },[])
    return (
        <View className='get_data'>
            <Title title='基于机器学习的刀具表面缺陷检测及分类方法' subtitle='选择数据'/>
            <View className='files'>
                <AtImagePicker multiple="multiple" files={files} onChange={onChange}/>
            </View>
            <View className='btn'>
                <AtButton type='primary' onClick={()=>{
                    /*
                    Taro传递参数，文档写的真的不咋地！！！
                    最终我用的这个 https://www.cnblogs.com/qqcc1388/p/13541154.html
                    */
                    Taro.redirectTo({
                        url:'/pages/add_data/index?files='+JSON.stringify(files.map(f=>f.url)),
                    })
                }}>提交数据</AtButton>
            </View>
        </View>
    )
}

export default Index