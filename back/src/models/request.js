// 下面的这些代码都是无用的！！

function asyncInit() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(false);
    }, 1000);
  });
}

export default {
  namespace: 'request',
  // state 相当于原生React中的state状态，用于存放数据的初始值。
  state: {
    request: false,
  },
  // reducers 用于存放能够改变view的action，这里按照官方说明，不应该做数据的处理，只是用来return state，从而改变view层的展示。
  reducers: {
    requestBegin(state, action) {
      return { ...state, request: true };
    },
    requestFinish(state, action) {
      return { ...state, request: false };
    },
    setRequest(state, action) {
      return { ...state, request: action.payload };
    },
  },
  // effects 用于和后台交互，是处理异步数据逻辑的地方。
  effects: {
    // generactor 这玩意还再用，我也是醉了
    //这个执行异步操作，这玩意是* 生成器函数？？
    *init(action, { call, put }) {
      let payload = yield call(asyncInit);
      yield put({ type: 'setRequest', payload });
    },
  },
  // subscriptions 订阅监听，比如监听路由，进入页面如何如何，就可以在这里处理。
  // 相当于原生React中的componentWillMount方法。
  // 就比如上述代码，监听/project路由，进入该路由页面后，将发起getAllProjects aciton，获取页面数据。
  // 以下代码实际上没有实际用处
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/projects') {
          dispatch({
            type: 'init',
          });
        }
      });
    },
  },
};
