import {View} from '@tarojs/components'
import {AtImagePicker, AtButton} from 'taro-ui'
import {useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import { getCurrentInstance } from '@tarojs/taro'
import {globalVariables} from '@/common/enum'
import request from '@/utils/request'
import Title from '@/components/TitleHandleData'
import './index.less'

/**
 * 收集用户本地的图片信息 进入到本界面时需要传入任务编号
 * 下一个界面：补充数据界面
 */
const Index = () => {

    const [task,setTask] = useState({})
    const [files, setFiles] = useState()

    const onChange = files => {
        setFiles(files)
    }
    
    // 获取任务详情信息
    useEffect( async()=>{
        const id = getCurrentInstance().router.params.id
        if (!id) {
            Taro.showToast({title:'请传入任务编号', icon:'none'})
            return
        }
        let res = await request({url:`/v1/admin/task/detailWithFormat?id=${id}`,method:'get'})
        if (res instanceof Error)return
        setTask(res.data)
    },[])

    const go_add_data = ()=>{
        globalVariables.get_data_TO_add_data = {
            task:task,
            files: files
        }
        /*
        Taro传递参数，文档写的真的不咋地！！！
        最终我用的这个 https://www.cnblogs.com/qqcc1388/p/13541154.html
        */
        Taro.redirectTo({
            url:'/pages/add_data/index',
        })
    }

    return (
        <View className='get_data'>
            <Title title='基于机器学习的刀具表面缺陷检测及分类方法' subtitle='选择数据'/>
            <View className='files'>
                <AtImagePicker multiple="multiple" files={files} onChange={onChange}/>
            </View>
            <View className='btn'>
                <AtButton type='primary' onClick={go_add_data}>提交数据</AtButton>
            </View>
        </View>
    )
}

export default Index