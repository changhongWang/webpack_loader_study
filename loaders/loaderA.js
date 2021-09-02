/*
 * @Description: 用于测试的loader - a
 * @Author: changhong.wang
 * @Date: 2021-09-02 11:14:12
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-09-02 11:14:12
 */
module.exports = (source) => {
    console.log('This is loader A');
    return source;
}