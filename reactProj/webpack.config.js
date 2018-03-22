const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index:'./src/index.js',
        myConsole:'./src/temp.js',
        calculator:'./src/calculator/Calculator.js',
        routerDemo:'./src/routerDemo/routerDemo.js',
    },
    output: {
        filename: '[name].js',
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
            contentBase: './dist',
            port:3000,
          },
    plugins:[
        new HtmlWebpackPlugin({
            title:'index',
            filename:'index.html',
            template: 'template/index.html',
            chunks: ['index'],          
        }),
        new HtmlWebpackPlugin({
            title:'Output Management',
            filename:'demo.html',
            template: 'template/temp.html'
        }),
        new HtmlWebpackPlugin({
            title:'iOS Calculator',
            filename:'calculator.html',
            template:'template/calculator.html',
            chunks: ['calculator'],
        }),
        new HtmlWebpackPlugin({
            title:'react-router-dom demo',
            filename:'routerDemo.html',
            template:'template/routerDemo.html',
            chunks: ['routerDemo'],
        }),
    ],
};