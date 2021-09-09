const JSZip = require('jszip');
const { RawSource } = require('webpack-sources');

module.exports = class JSZipPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        // 注册监听compiler上的emit hooks，异步钩子需要使用tapAsync 传入一个callback方法
        compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
            const { fileName } = this.options;
            const zip = new JSZip();
            const folder = zip.folder(fileName);

            if (!fileName) {
                throw new Error('未传入fileName, 当前fileName为: ', fileName);
            } else {
                for (let name in compilation.assets) {
                    const source = compilation.assets[name].source();
                    folder.file(name, source);
                }

                zip.generateAsync({ type: 'nodebuffer' }).then(content => {
                    const outputPath = `${fileName}.zip`;
                    compilation.assets[outputPath] = new RawSource(content);
                    callback();
                })
            }
        })
    }
}