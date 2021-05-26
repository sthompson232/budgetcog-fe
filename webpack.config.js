module.exports = {
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                    importLoaders: 1,
                    }
                },
                {
                    loader: 'postcss-loader'
                }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
               test: /\.(jpeg|png|jpg|svg|gif)$/i,
               loader: 'file-loader',
               options: {
                   name: '[name].[hash:6].[ext]',
                   outputPath: 'images',
                   publicPath: 'images',
                   emitFile: true,
                   esModule: false
               } 
            }]
    }
}