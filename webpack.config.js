module.exports = {
    module: {
        rules: [{
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