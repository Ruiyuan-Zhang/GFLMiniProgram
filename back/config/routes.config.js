const routes = [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        name: '首页',
        component: './Index'
      },{
        path: '/category',
        name: '分类',
        component: './Category'
      },{
        path: '/taskSubmit',
        name: '发布新任务',
        component: './TaskSubmit'
      },
    ],
  },
]

export default routes