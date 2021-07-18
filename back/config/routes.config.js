const routes = [
  {
    path: '/user',
    component: '@/layouts/UserLayout',
    routes: [
      {
        path: '/user/login',
        name: '登录',
        component: './Login',
      },
    ],
  },{
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        name: '首页',
        component: './Index',
      },
      {
        path: '/category',
        name: '分类',
        component: './Category',
      },
      {
        path: '/taskSubmit',
        name: '发布新任务',
        component: './TaskSubmit',
      },
    ],
  },
  
];

export default routes;
