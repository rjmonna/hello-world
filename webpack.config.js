var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config().parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

    return {
        entry : './app/index.js',
        output : {
            path : path.resolve(__dirname , 'dist'),
            filename: 'index_bundle.js'
        },
        module : {
            rules : [
                {test : /\.(js|jsx)$/, use:'babel-loader'},
                {test : /\.css$/, use:['style-loader', 'css-loader']}
            ]
        },
        mode:'development',
        plugins : [
            new HtmlWebpackPlugin ({
                template : 'app/index.html'
            }),
            new webpack.DefinePlugin(envKeys)
        ],
        // to mimic GitHub Pages serving 404.html for all paths
        // and test spa-github-pages redirect in dev
        devServer: {
            historyApiFallback: {
            rewrites: [{ from: /\//, to: '/404.html' }],
            },
        },
    }
}
