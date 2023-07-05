const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "dist"),
        // library: 'library',
        // target: ['web', 'es5'],
        // libraryTarget: 'window',
        // libraryExport: 'default',
        assetModuleFilename: 'assets/images/[name].[hash][ext]'
    },
    devServer: {
        static: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html/i,
                use: [{
                    loader: "html-loader",
                }]
            },
            {
                test: /\.css$/i,
                use: [
                    { loader: miniCssExtractPlugin.loader },
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "css/index.css"
        }),
        new htmlWebpackPlugin({
            title: "SednaWebpage",
            filename: 'index.html',
            template: './src/pages/index.html',
            inject: 'body',
        })
    ],
}