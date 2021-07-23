import Taro from '@tarojs/taro'

const key = 'user'

const saveUser = u =>Taro.setStorageSync(key, u)
const getUser = () =>Taro.getStorageSync(key)
const removeUser = () =>Taro.removeStorageSync(key)

export {saveUser, getUser, removeUser}