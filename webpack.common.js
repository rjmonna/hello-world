const path = require('path');
const { CleanWebpackPlugin } =  require('clean-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
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
        node: {
            global: false,
            __filename: false,
            __dirname: false,
        },
        entry : './app/index.js',
        output : {
            path : path.resolve(__dirname , 'dist'),
            filename: 'bundle.js',
            sourceMapFilename: "bundle.js.map"
        },
        module : {
            rules : [
                {test : /\.(js|jsx)$/, use:'babel-loader'},
                {test : /\.css$/, use:['style-loader', 'css-loader']}
            ]
        },
        devtool : 'inline-source-map',
        mode:'development',
        plugins : [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin ({
                template : 'app/index.html'
            }),
            new webpack.DefinePlugin(envKeys)
        ],
        devServer: {
            inline: true,
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 8080,
            watchOptions: {
                index: 'index.html',
                open: true,
                poll: true,
                watchContentBase: true
            }
        }        
    }
}
