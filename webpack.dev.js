const path = require("path")
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common,{
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'assets/images/[name].[hash][ext]'
    },
    module: {
        rules: [
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
        })
    ],
})