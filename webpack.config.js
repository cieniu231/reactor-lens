const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './client/main.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "static")
    },
    devtool: 'source-map',
    devServer: {
        port: 8000,
        contentBase: 'static',
        proxy: {
            '/': {
                target: 'http://localhost:9090'
            }
        },
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
;
