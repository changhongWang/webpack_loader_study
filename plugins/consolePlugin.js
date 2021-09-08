module.exports = class ConsolePlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.run.tap('ConsolePlugin', compilation => {
            console.log('Webpack构建过程开始', this.options);
        })
    }
}