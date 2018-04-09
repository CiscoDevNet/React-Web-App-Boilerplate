const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packagejson = require('../../package.json');

const webconfig = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './main.js',
        './assets/scss/main.scss'
    ],

    output: {
        filename: 'app.js',
        path: resolve(__dirname, '../../dist'),
        publicPath: ''
    },

    context: resolve(__dirname, '../../app'),

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, '../../build'),
        publicPath: '/',
        historyApiFallback: true
    },

    module: {
        rules: [
            // {
            //   enforce: "pre",
            //   test: /\.js$/,
            //   exclude: /node_modules/,
            //   loader: "eslint-loader"
            // },
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            query: {
                                sourceMap: false,
                            },
                        },
                    ],
                    publicPath: '../'
                }),
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/png',
                            name: 'images/[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[ext]',
                        }
                    }
                ],
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'application/octet-stream',
                            name: 'fonts/[name].[ext]',
                        }
                    }
                ],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/svg+xml',
                            name: 'images/[name].[ext]',
                        }
                    }
                ],
            },
        ]
    },

    plugins: [
        // new webpack.LoaderOptionsPlugin({
        //   test: /\.js$/,
        //   options: {
        //     eslint: {
        //       configFile: resolve(__dirname, '.eslintrc'),
        //       cache: false,
        //     }
        //   },
        // }),

        new HtmlWebpackPlugin({
            title: packagejson.name,
            version: packagejson.version,
            hash: true,
            filename: 'index.html',
            template: '../template/index.html'
        }),
        new ExtractTextPlugin({filename: './styles/style.css', disable: false, allChunks: true}),
        new CopyWebpackPlugin([{from: 'vendors', to: 'vendors'}]),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:8080'})
    ]
};

module.exports = webconfig;
