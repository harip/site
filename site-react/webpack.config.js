const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // add entry point as index.js
    entry:  ['regenerator-runtime/runtime.js','./src/index.js'],
    // add output path
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    // dev server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080
    },
    // optimization
    optimization: {
        minimizer: [new uglifyJsPlugin()],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { 
                        presets: [ '@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
           "React": "react",
        })
     ],
};
      