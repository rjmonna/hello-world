var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ],
    // to mimic GitHub Pages serving 404.html for all paths
    // and test spa-github-pages redirect in dev
    devServer: {
        historyApiFallback: {
        rewrites: [{ from: /\//, to: '/404.html' }],
        },
    },
}
