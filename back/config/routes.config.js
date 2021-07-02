const routes = [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        name: '首页',
        component: './Index'
      }
    ],
  },
]

export default routes