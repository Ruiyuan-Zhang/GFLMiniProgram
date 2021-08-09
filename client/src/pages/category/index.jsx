import {View} from '@tarojs/components'
import Taro, {useDidShow} from '@tarojs/taro'
import {useContext, useEffect, useState} from 'react'
import fetch from '@/utils/request'
import {file_url} from '@/config'
import {TabIndexContext} from '../../store/tabIndex'
import styles from './index.module.less'

const Item = ({src, children, id}) => {

    return (
        <View className={styles.item}>
            <View
                className ={styles.image}
                style={{
                    background: `url(${src}) no-repeat center`,
                    backgroundSize: 'cover'
                }}
                onClick={() => Taro.navigateTo({url: `/packageTask/pages/task_list/index?categoryId=${id}`})}>
            </View>
            {children}
        </View>
    )
}

const index = () => {

    const {tabIndex, dispatch} = useContext(TabIndexContext)
    useDidShow(() => {
        dispatch({type: 'change', payload: 'category'})
    })

    const [list, setList] = useState([])
    useEffect(async () => {
        let res = await fetch(
            {url: '/v1/admin/category/list?page=1&limit=100', method: 'get'}
        )
        if (res instanceof Error) 
            return
        setList(res.list)
    }, [])

    return (
        <View className={styles.category}>
            {
                list.map(({id, file, name}) =>< Item key = {id} src = {file_url + file} id = {id} >{name}</Item>)
            }
        </View>
    )
}

export default index
