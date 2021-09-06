/*
 * @Description: 合成雪碧图
 * @Author: changhong.wang
 * @Date: 2021-09-05 10:48:58
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-09-06 11:59:09
 */
const Spritesmith = require('spritesmith');
const path = require('path');
const sprites = [path.join(__dirname, '../assets/A.png'), path.join(__dirname, '../assets/B.png')];

module.exports = function(source) {
    console.log('enter spritesLoader.');
    // 匹配正则表达式 拿到source中需要打成sprite的部分
    const results = source.match(/URL\((\S*)\?__sprite/g);
    const sprites = results.map(item => {
        const imgPath = item.match(/URL\("(\S*)\?__sprite/)[1];
        console.log(item, imgPath, 999);
        return path.join(__dirname, imgPath);
    })
    Spritesmith.run({ src: sprites }, (err, res) => {
        if (err) {
            console.error('generate sprites image FAILED, error:', err);
        } else {
            this.emitFile('sprites.png', res.image);
        }
    })
    return source;
}