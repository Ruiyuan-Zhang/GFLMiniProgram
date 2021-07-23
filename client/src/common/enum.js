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
    nowAddTask: null,
}


export {consts, globalVariables} 