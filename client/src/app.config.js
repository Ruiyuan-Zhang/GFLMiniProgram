export default {
  pages: [
    'pages/index/index',
    'pages/home/index',
    'pages/category/index',
    'pages/task/index',
    'pages/task_detail/index',
    'pages/mine/index',
    'pages/get_data/index',
    'pages/add_data/index',
    'pages/task_schedule/index',
    'pages/train/index',
    'pages/login/index'

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "plugins": {
    "tfjsPlugin": {
      "version": "0.2.0",
      "provider": "wx6afed118d9e81df9"
    }
  },
  "workers": "workers",
  "tabBar": {
    custom:true,
    color: '#a1a7b3',
    selectedColor: '#1492ff',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/home/index',
        text: 'home',
        iconPath: 'assets/tabIcon/home.png',
        selectedIconPath: 'assets/tabIcon/home_blue.png',
      },
      {
        pagePath: 'pages/category/index',
        text: 'category',
        iconPath: 'assets/tabIcon/category.png',
        selectedIconPath: 'assets/tabIcon/category_blue.png',
      },
      {
        pagePath: 'pages/task/index',
        text: 'task',
        iconPath: 'assets/tabIcon/task.png',
        selectedIconPath: 'assets/tabIcon/task_blue.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: 'mine',
        iconPath: 'assets/tabIcon/user.png',
        selectedIconPath: 'assets/tabIcon/user_blue.png',
      }
    ],
  },
}
