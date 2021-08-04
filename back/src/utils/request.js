import { fetchToken, removeToken } from '@/common/token';
import Loading from '@/components/Loading';
import { extend } from 'umi-request';
import ReactDOM from 'react-dom';
import { message } from 'ppfish';
import { history } from 'umi';

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
  if (retained == 0) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
      div = null;
    }
  }
};

const iniRequest = request=>{
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

  

  request.interceptors.request.use((x) => {
    // 1. 判断是否有token
    let token = fetchToken();
    if (!token)
      console.log('请在src/utils/request.js文件中配置：token不存在，请您登录');

    return x;
  });

  request.interceptors.response.use(async (response) => {
    // 1. 判断token有没有过期
    // const data = await response.clone().json();
    // if (data && data.NOT_LOGIN) {
    //     location.href = '登录url';
    // }

    return response;
  });
}

//*********************************************   导出部分   *********************************************//

// 构造一个request对象
const requestWrap = ({errorHandler, type='json', showMassage=true, options ={} })=>{
  
  if (!errorHandler) errorHandler = e =>{
    // 处理错误信息
    console.log('请在src/utils/request.js文件中配置：处理出错');
    const { request,response,data } = e;
    if (response && response.status) {
      if(showMassage)message.error(data.msg)

      // token过期
      if(response.status == 401){
        history.push({pathname:'/user/login'})
      }
      
    }
    return new Error();
  }

  let headers = { "Authorization": fetchToken()}
  if (type === 'json'){
    headers ={...headers,'Content-Type': 'application/json'}
  }else if(type === 'file'){
    headers ={...headers, requestType: 'form'}
  }

  // 创建一个umi-request实例
  let request = extend({
    ...options,
    timeout: 5000,
    errorHandler,
    headers,
  })
  iniRequest(request)
  return request
}

// 只是一个使用的语法糖而已
const request = async ({method='post',url, data, options ={}})=>{

  console.log(data)

  let type = (data instanceof FormData) ?'file': 'json'
  let isErr = false
  let res

  addLoading()

  if (method==='post'){
    res = await requestWrap({type,options}).post(url,{data})
  }else if (method === 'get'){
    let params = url.indexOf('?')>=0?"&":'?'
    if(data){
      Object.keys(data).forEach(key=>{
        try{
          let kv = key+"="+data[key]+'&'
          params+=kv
        }catch(e){
          console.log(e)
        }
      })
    }
    res = await requestWrap({type,options}).get(url+params)
  }

  deleteLoading()

  if (isErr) return new Error()
  return res
}

export { request, requestWrap, addLoading, deleteLoading};


























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
