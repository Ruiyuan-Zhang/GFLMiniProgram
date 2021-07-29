const consts = {

    // token
    'JwtTokenOK': 200100, //token有效
    'JwtTokenInvalid': -400100, //无效的token
    'JwtTokenExpired': -400101, //过期的token
    'JwtTokenFormatErrCode': -400102, //提交的 token 格式错误

    // CURD 常用业务状态码
    "CurdStatusOkCode": 200,
    "CurdStatusOkMsg": "Success",
    "CurdCreatFailCode": -400200,
    "CurdCreatFailMsg": "新增失败",
    "CurdUpdateFailCode": -400201,
    "CurdUpdateFailMsg": "更新失败",
    "CurdDeleteFailCode": -400202,
    "CurdDeleteFailMsg": "删除失败",
    "CurdSelectFailCode": -400203,
    "CurdSelectFailMsg": "查询无数据",
    "CurdRegisterFailCode": -400204,
    "CurdRegisterFailMsg": "注册失败",
    "CurdLoginFailCode": -400205,
    "CurdLoginFailMsg": "登录失败",
    "CurdRefreshTokenFailCode": -400206,
    "CurdRefreshTokenFailMsg": "刷新Token失败",

    // HTTP status codes as registered with IANA.
    // See: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
    "StatusUnauthorized":401,

}

let globalVariables = {
    // 当前用户正在打算加入的任务，由「任务详情界面」通过「加入任务」传递给「获取本地数据界面」
    // nowAddTask: null, 这样的设计不合理，所以取消。  因为可能用户是从不同的界面进入到收集数据的界面

    // 获取数据界面向补充数据界面传递数据，这个传递是单项的
    get_data_TO_add_data: {}, 

    // 训练进行界面 点击开始训练进入 训练界面
    task_schedule_TO_train: {},

    // 本想用来用多线程的方式来处理本地训练，因为在woker中无法使用wx环境，所以放弃
    worker: null,



    
}


export {consts, globalVariables} 