const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: './src/index.js',
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
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "SednaWebpage",
            filename: 'index.html',
            template: './src/pages/index.html',
            inject: 'body',
        })
    ],
}