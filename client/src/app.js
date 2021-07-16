import { Component } from 'react'
// 引入全局的taro-ui样式
import 'taro-ui/dist/style/index.scss'
import './app.less'


// 微信小程序插件
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
// var webgl = require('@tensorflow/tfjs-backend-webgl');
var plugin = requirePlugin('tfjsPlugin');

// global.FormData = require('@/utils/FormData/formData')
// global.globalData =  {localStorageIO: plugin.localStorageIO} 

class App extends Component {
  componentDidMount () {

  }
 
  componentDidShow () {
    // global.FormData = require('form-data')
    // console.log(new FormData())
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

  }

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
 