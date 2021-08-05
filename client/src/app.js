import './app.less'
import { initData, } from '@/common/data'
import { useEffect, useReducer } from 'react'
import {TabIndexContext,reducer,initState} from './store/tabIndex'

// 引入全局的taro-ui样式
// import 'taro-ui/dist/style/index.scss'
// 我是大贪官，一点一点存储省着点用
import "taro-ui/dist/style/components/icon.scss"
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/tag.scss";
import "taro-ui/dist/style/components/timeline.scss";
import "taro-ui/dist/style/components/divider.scss";
import "taro-ui/dist/style/components/steps.scss";
import "taro-ui/dist/style/components/progress.scss";
import "taro-ui/dist/style/components/toast.scss";
import "taro-ui/dist/style/components/message.scss";
import "taro-ui/dist/style/components/form.scss";
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/input-number.scss";
import "taro-ui/dist/style/components/radio.scss";
import "taro-ui/dist/style/components/switch.scss";
import "taro-ui/dist/style/components/textarea.scss";
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/image-picker.scss";
import "taro-ui/dist/style/components/tabs.scss";

// 微信小程序插件
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
var webgl = require('@tensorflow/tfjs-backend-webgl');
var plugin = requirePlugin('tfjsPlugin');

// 全局首先执行的文件
const index = props =>{

  // 初始化
  const [state, dispatch] = useReducer(reducer, initState)
  useEffect(()=>{
    plugin.configPlugin({
      // polyfill fetch function
      fetchFunc: fetchWechat.fetchFunc(),
      // inject tfjs runtime
      tf,
      // inject webgl backend
      webgl,
      // provide webgl canvas
      canvas: wx.createOffscreenCanvas()
    });
    
  },[])

  useEffect(()=>{
    // 初始化任务文件
    initData()
  },[])

  return (
  <TabIndexContext.Provider value={{tabIndex: state, dispatch}}>
    {props.children}
  </TabIndexContext.Provider>
  )
}

export default index