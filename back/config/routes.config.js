const routes = [
  {
    path: '/user',
    component: '@/layouts/UserLayout',
    routes: [
      {path: '/user/login',name: '登录',component: './Login',},
    ],
  },{
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path:'/', name:'首页', component: './Index',},
      { path:'/category', name: '分类', component: './Category',},
      { path:'/taskSubmit', name: '发布新任务', component: './TaskSubmit',},
      { path:'/training', name:'正在训练中的任务', component:'./Training' },
      { path:'/training/detail', name:'正在训练中的任务-详情', component:'./TaskDetail' },
    ],
  },
  
];

export default routes;
