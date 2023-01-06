const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    // Точка входа
    entry: './src/main.js',

    // Точка выхода
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),

        // Чистка директории
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'public' }],
        }),
    ],

    // Прописываем лоадеры

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            }
        ]
    }
}
