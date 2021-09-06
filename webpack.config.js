const path = require('path');

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
    }
}