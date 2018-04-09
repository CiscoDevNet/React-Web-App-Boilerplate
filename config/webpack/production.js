//use "webpack --config webpack.production.config.js -p" for production mode
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackStripLoader = require('strip-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devConfig = require('./common.js');
const stripLoader = {
    test: [/\.js?$/, /\.es6$/],
    include: /src/,
    loader: WebpackStripLoader.loader('console.log', 'console.error','debugger')
};

devConfig.module.rules.push(stripLoader);


devConfig.devtool = "source-map";

devConfig.plugins = devConfig.plugins.slice(0, 4);

devConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());


devConfig.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
}));

devConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,

}));

devConfig.plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
    })
);


module.exports = devConfig;