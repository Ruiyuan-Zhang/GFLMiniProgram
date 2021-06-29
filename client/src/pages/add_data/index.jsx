import {View} from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'

import Item from './components/Item'
import './index.less'


const Index = p => {
    const objs = [
        {
            name: '长度',
            eglish_name: 'cd',
            type: 'text',
            tips: '提示信息'
        }, {
            name: '质量',
            eglish_name: 'zl',
            type: 'text',
            tips: '提示信息'
        }, {
            name: '材质',
            eglish_name: 'cz',
            type: 'text',
            tips: '提示信息'
        }, {
            name: '划痕',
            eglish_name: 'hh',
            type: 'text',
            tips: '提示信息'
        }, {
            name: '凹坑',
            eglish_name: 'ak',
            type: 'text',
            tips: '提示信息'
        }, {
            name: '涂层剥落',
            eglish_name: 'tcbl',
            type: 'text',
            tips: '提示信息'
        }, {
            name: '边缘豁口',
            eglish_name: 'byhk',
            type: 'text',
            tips: '提示信息'
        }
    ]
    let {files} = getCurrentInstance().router.params
    files = JSON.parse(files)

    return (<View>
        {files.map(f=><Item key={f} img={f} objs={objs}/>)}
    </View>)
}
export default Index