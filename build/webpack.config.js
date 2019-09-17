const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'../src/main.js'),
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module: {
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(jpg|png|gif|bmp|jpeg)$/,
            use:'url-loader?name=[hash:8]-[name].[ext]'
        },{
            test:/\.(ttf|eot|svg|woff|woff2)$/,
            use:'url-loader'
        },{
            test:/\.vue$/,
            use:'vue-loader'
        },{
            test:/\.js$/,
            use:'babel-loader',
            exclude:/node_modules/
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js' //内部为正则表达式  vue结尾的
        }
    }
}