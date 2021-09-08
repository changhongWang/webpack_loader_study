const JSZip = require('jszip');
const fs = require('fs');

const zip = new JSZip();

zip.file("Hello.txt", "Hello World\n");
zip.generateAsync({type:"nodebuffer"}).then(function(content) {
    fs.writeFile('example.zip', content, {}, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log(res);
    });
});
