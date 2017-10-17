const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    /(node_modules|bower_components)/
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    require('postcss-import-url'),
                                    require('postcss-custom-media'),
                                    require('postcss-cssnext'),
                                    require('cssnano'),
                                    require('postcss-reporter')
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css'),
        new workboxPlugin({
            globDirectory: '.',
            globPatterns: [
                'manifest.json',
                '*.html',
                'assets/*.{js,css}',
                'images/*.{gif,jpg,jpeg,png,svg}'
            ],
            swDest: path.join('.', 'sw.js'),
        })
    ]
};
