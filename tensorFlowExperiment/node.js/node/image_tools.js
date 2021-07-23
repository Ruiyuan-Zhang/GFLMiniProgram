
/**
 * 转换rgba为灰色
 * @param {*} r 红色
 * @param {*} g 绿色
 * @param {*} b 蓝色
 * @param {*} a 透明度
 */
const rgba2gray = (r,g,b,a) => (r*0.299+g*0.587+b*0.144)*a/255

export {rgba2gray} 