/*
 * @Description: 
 * @Author: changhong.wang
 * @Date: 2021-09-03 13:40:25
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-09-03 14:03:57
 */
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    const url = loaderUtils.interpolateName(this, '[name].[ext]', source);
    console.log(url);
    this.emitFile(url, source);
    return source;
}