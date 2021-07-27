// 引入全局的taro-ui样式
import 'taro-ui/dist/style/index.scss'
import './app.less'
import { initData, getData,saveData,saveFileListToLocal } from '@/common/data'
import { Component, useEffect, useReducer } from 'react'
import {TabIndexContext,reducer,initState} from './store/tabIndex'

// 微信小程序插件
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
// var webgl = require('@tensorflow/tfjs-backend-webgl');
var plugin = requirePlugin('tfjsPlugin');

const index = props =>{
  const [state, dispatch] = useReducer(reducer, initState)
  useEffect(()=>{
    plugin.configPlugin({
      // polyfill fetch function
      fetchFunc: fetchWechat.fetchFunc(),
      // inject tfjs runtime
      tf,
      // inject webgl backend
      // webgl,
      // provide webgl canvas
      canvas: wx.createOffscreenCanvas()
    });

    initData()
  },[])

  return (
  <TabIndexContext.Provider value={{tabIndex: state, dispatch}}>
    {props.children}
  </TabIndexContext.Provider>
  )
}

export default index