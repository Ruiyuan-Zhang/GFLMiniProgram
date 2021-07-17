// 写配置的时候有提示
import { defineConfig } from 'umi';
import routes from './routes.config';

const Config = defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes:routes,
  fastRefresh: {},
  proxy: {
    '/v1': {
      target: 'https://baidu.com/',
      changeOrigin: true,
      pathRewrite: { '^/v1': '/' }
    },
  },
})

export default Config;
