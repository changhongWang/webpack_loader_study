/*
 * @Description: 合成雪碧图
 * @Author: changhong.wang
 * @Date: 2021-09-05 10:48:58
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-09-05 13:57:29
 */
const Spritesmith = require('spritesmith');
const path = require('path');
const sprites = [path.join(__dirname, '../assets/A.png'), path.join(__dirname, '../assets/B.png')];

module.exports = function(source) {
    console.log('enter spritesLoader.', source)
    const that = this;
    Spritesmith.run({ src: sprites }, function handleRes(err, res) {
        if (err) {
            console.error('generate sprites image FAILED, error:', err);
        } else {
            that.emitFile('sprites.png', res.image)
        }
    })
    return source;
}