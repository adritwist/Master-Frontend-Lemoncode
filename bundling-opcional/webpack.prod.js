const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [ 
            {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                loader: "css-loader",
                options: {
                    modules: {
                        exportLocalsConvention: "camelCase",
                    },
                },
                },
                "sass-loader",
            ],
        }],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
          }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
            vendor: {
                chunks: 'all',
                name: 'vendor',
                test: /[\\/]node_modules[\\/]/,
                enforce: true,
            },
            },
        },
        },
});