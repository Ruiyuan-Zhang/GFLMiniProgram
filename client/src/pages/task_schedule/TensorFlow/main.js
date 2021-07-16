

// 测试一下tfjs能不能用
const test = () => {
    var fetchWechat = require('fetch-wechat');
    var tf = require('@tensorflow/tfjs-core');
    var webgl = require('@tensorflow/tfjs-backend-webgl');
    var plugin = requirePlugin('tfjsPlugin');
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
    tf.tensor([1,2,3,4]).print()
}


export default test 