// 写配置的时候有提示
import { defineConfig } from 'umi';
import routes from './routes.config';

const Config = defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  proxy: {
    '/v1': {
      target: 'http://localhost:20201/',
      changeOrigin: true,
      pathRewrite: { '^/v1': '' },
    },
    '/file':{
      target: 'http://10.192.73.20:3000/',
      changeOrigin:true,
      pathRewrite: { '^/file': '' },
    }
  },
});

export default Config;
