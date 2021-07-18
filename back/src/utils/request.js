import { fetchToken, removeToken } from '@/common/token';
import Loading from '@/components/Loading';
import { extend } from 'umi-request';
import ReactDOM from 'react-dom';

//*********************************************   配置部分   *********************************************//
let request = extend({
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  },
  errorHandler(e) {
    // 处理错误信息
    console.log('请在src/utils/request.js文件中配置：处理出错');
    console.log(e)
    deleteLoading();
  },
});

//*********************************************   过滤器部分   *********************************************//
request.use(async (ctx, next) => {
  console.log('请在src/utils/request.js文件中配置：请求时候的过滤器');
  // 可以使用下面这句延时操作来测试 Loading的展示效果
  // await ( async()=> {
  //     return new Promise( (r)=>{
  //         setTimeout(()=>r(),2000)
  //     })
  // })()
  await next();
  console.log('请在src/utils/request.js文件中配置：返回时候的过滤器');
});

//*********************************************   拦截器部分   *********************************************//
let retained = 0;
let div = null;

const addLoading = () => {
  retained += 1;
  if (!div) {
    div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Loading loading={true}></Loading>, div);
  }
};

const deleteLoading = () => {
  retained -= 1;
  if (retained === 0) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
      div = null;
    }
  }
};

request.interceptors.request.use((x) => {
  // 1. 判断是否有token
  let token = fetchToken();
  if (!token)
    console.log('请在src/utils/request.js文件中配置：token不存在，请您登录');

  // 2. 添加loading
  addLoading();

  return x;
});

request.interceptors.response.use(async (response) => {
  // 1. 判断token有没有过期
  // const data = await response.clone().json();
  // if (data && data.NOT_LOGIN) {
  //     location.href = '登录url';
  // }

  // 2. 删除loading
  deleteLoading();

  return response;
});

//*********************************************   导出部分   *********************************************//
const requestWrap = ({errorHandler})=>{
  if (errorHandler){
    request = extend({
      errorHandler
    })
  }
  request = extend({
    headers: {
      "Authorization": fetchToken()
    }
  })
  return request
}

export {request, requestWrap};

//*********************************************   用法部分   *********************************************//
/*
用法: https://github.com/umijs/umi-request
request
  .get('/user')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
*/
