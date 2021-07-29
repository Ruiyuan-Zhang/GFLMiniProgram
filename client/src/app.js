// 引入全局的taro-ui样式
import 'taro-ui/dist/style/index.scss'
import './app.less'
import Taro from '@tarojs/taro'
import { initData, getData,saveData,saveFileListToLocal } from '@/common/data'
import { globalVariables } from '@/common/enum'
import { Component, useEffect, useReducer } from 'react'
import {TabIndexContext,reducer,initState} from './store/tabIndex'
import { init, train } from '@/train'

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
    // 初始化训练所需环境
    init()
  },[])

  // 初始化woker变量
  useEffect(()=>{
    // 初始化woker
    const worker = Taro.createWorker('workers/index.js')
    worker.postMessage({
        action:'init'
    })
    // 监听woker传来的消息
    worker.onMessage(function ({action,data}) {
      console.log(action)
    }) 
    globalVariables.worker = worker
  },[])


  

  return (
  <TabIndexContext.Provider value={{tabIndex: state, dispatch}}>
    {props.children}
  </TabIndexContext.Provider>
  )
}

export default index