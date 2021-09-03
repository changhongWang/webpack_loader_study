/*
 * @Description: 
 * @Author: changhong.wang
 * @Date: 2021-09-03 11:27:04
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-09-03 11:56:54
 */
const fs = require('fs');
const path = require('path');

module.exports = function(source) {
    const callback = this.async();
    
    fs.readFile(path.join(__dirname, '../assets/doc.txt'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return source;

        } else {
            setTimeout(() => {
                console.log(data);
                callback(null, `${source} ${data}`);
            }, 2000)
        }
    })
}