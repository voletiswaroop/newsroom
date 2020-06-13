const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const join = require('path').join;
const nodeExternals = require('../scripts/node-externals');

module.exports = merge(common, {
    mode: 'production',
    name: 'server',
    target: 'node',
    externals: nodeExternals,
    entry: ['babel-polyfill', join(__dirname, '../src/server/index')],
    devtool: 'hidden-source-map',
    output: {
        filename: 'app.server.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-loader/locals',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'stylus-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|otf|woff|ttf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
});
