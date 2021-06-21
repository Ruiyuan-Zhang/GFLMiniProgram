import { Component } from 'react'
// 引入全局的taro-ui样式
import 'taro-ui/dist/style/index.scss'
import './app.less'


class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
