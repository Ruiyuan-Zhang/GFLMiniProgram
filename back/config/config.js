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
      target: 'http://1.117.153.221:8888/v1/',
      changeOrigin: true,
      pathRewrite: { '^/v1': '' },
    },
    '/file':{
      target: 'http://1.117.153.221:3000/',
      changeOrigin:true,
      pathRewrite: { '^/file': '' },
    }
  },
});

export default Config;
