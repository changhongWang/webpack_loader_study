const path = require('path');
const JsZipPlugin = require(path.join(__dirname, './plugins/jsZipPlugin'));
const ConsolePlugin = require(path.join(__dirname, './plugins/consolePlugin'));

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve('./loaders/loaderA.js'),
                    path.resolve('./loaders/loaderB.js'),
                    {
                        loader: path.resolve('./loaders/getOptionsLoader.js'),
                        options: {
                            prms: 'test'
                        }
                    },
                    path.resolve('./loaders/asyncLoader.js'),
                    path.resolve('./loaders/emitFileLoader.js'),
                ]
            },
            {
                test: /\.css$/,
                use: [
                    path.resolve('./loaders/spritesLoader.js'),
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new ConsolePlugin({
            // 参数会在实例化时传入
            name: 'jack',
            gender: 'male',
            age: 25
        }),
        new JsZipPlugin({
            fileName: 'offlinePackage'
        })
    ]
}