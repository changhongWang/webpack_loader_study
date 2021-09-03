/*
 * @Description: 学习获取webpack.config.js配置中 loaders的options参数
 * @Author: changhong.wang
 * @Date: 2021-09-03 11:06:44
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-09-03 11:08:15
 */
const { getOptions } = require('loader-utils');
module.exports = function(source) {
    const options = getOptions(this);
    console.log(options);
    return source;
}