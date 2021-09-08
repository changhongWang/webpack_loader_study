const JSZip = require('jszip');

const zip = new JSZip();

zip.file("Hello.txt", "Hello World\n");