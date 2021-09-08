const JSZip = require('jszip');
const fs = require('fs');
const path = require('path')

const zip = new JSZip();

console.log('当前path.resolve', path.resolve())
console.log('当前process.cwd ', process.cwd())

zip.file("Hello.txt", "Hello World\n");
zip.generateAsync({type:"nodebuffer"}).then(function(content) {
    fs.writeFile(path.join(__dirname, 'example.zip'), content, {}, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log(res, 5);
    });
});
