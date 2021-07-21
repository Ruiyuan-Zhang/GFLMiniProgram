import Taro from '@tarojs/taro'

const key = 'token'

const saveToken = t =>Taro.setStorageSync(key, t)
const getToken = () =>Taro.getStorageSync(key)
const removeToken = () =>Taro.removeStorageSync(key)

export {saveToken, getToken, removeToken}