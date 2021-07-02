// 写配置的时候有提示
import { defineConfig } from 'umi';
import routes from './routes.config';
// import routes from './routes.config';

const Config = defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes:routes,
  fastRefresh: {},
})

export default Config;
