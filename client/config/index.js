import { resolve } from 'path'

const config = {
  projectName: 'GFLMiniProgram',
  date: '2021-6-21',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  alias: {
    '@/assets': resolve(__dirname, '..', 'src/assets'),
    '@/components': resolve(__dirname, '..', 'src/components'),
    '@/config': resolve(__dirname, '..', 'src/config'),
    '@/utils': resolve(__dirname, '..', 'src/utils'),
    '@/common': resolve(__dirname, '..', 'src/common')
  },

  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  // 小程序
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // https://www.cnblogs.com/madlife/p/14801006.html
    // taro 没有提供打包功能
    webpackChain(chain, webpack) {
      chain.merge({
        plugin: {
          copyPlugin: {
            plugin: require('copy-webpack-plugin'),
            args: [
              { patterns: [
                  { from: resolve(__dirname, '../src/workers'), to: 'workers' },
                ] 
              }
            ],
          },
        },
      });
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
