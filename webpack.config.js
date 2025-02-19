const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path : path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'eval-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        watchFiles: ['./src/template.html'],
        
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/template.html'
        }),
    ],
};