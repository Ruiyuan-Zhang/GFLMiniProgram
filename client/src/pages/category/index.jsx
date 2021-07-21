import {View} from '@tarojs/components'
import TabBar from '@/components/TabBar'
import Taro from '@tarojs/taro'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import { useEffect, useState } from 'react'
import fetch from '@/utils/request'
import {file_url} from '@/config'

const Item = ({src, children, id}) => {
    const bg = `background:url(${src}) no-repeat center;`
    return (
      <View 
        className='item' 
        style={{background:`url(${src}) no-repeat center`,backgroundSize:'cover'}} 
        onClick={()=>Taro.navigateTo({url:`/pages/category/details/id=${id}`})}
      >
          {children}
      </View>
    )
}

const index = () => {

  const [list,setList] = useState([])

  useEffect(async()=>{
    let res = await fetch({url:'/v1/admin/category/list?page=1&limit=5',method:'get'})
    setList(res.list)
  },[])

  return (
    <View className='category'>
      {
        list.map(({id,file,name})=><Item key={id} src={file_url+file} id={id}>{name}</Item>)
      }
      <TabBar current={1}/>
    </View>
  )
}

export default index
