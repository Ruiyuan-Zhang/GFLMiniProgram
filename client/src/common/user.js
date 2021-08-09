import Taro from '@tarojs/taro'

const key = 'user'

const saveUser = u =>{
    console.log(u.token)
    // 从后台接收的token 遇到了空格消失的问题
    // u.token = u.token.replace(/./,". ")
    // console.log(u.token)
    Taro.setStorageSync(key, u)
}
const getUser = () =>Taro.getStorageSync(key)
const removeUser = () =>Taro.removeStorageSync(key)

export {saveUser, getUser, removeUser}