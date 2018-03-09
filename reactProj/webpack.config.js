const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index:'./src/index.js',
        myConsole:'./src/temp.js'
    },
    output: {
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(js|jsx)/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
            contentBase: './dist'
          },
    plugins:[
        new HtmlWebpackPlugin({
            title:'index',
            filename:'index.html',
            template: 'template/index.html',          
        }),
        new HtmlWebpackPlugin({
            title:'Output Management',
            filename:'demo.html',
            template: 'template/temp.html'
        })
    ],
};