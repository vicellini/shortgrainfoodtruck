const webpack = require('webpack')
const nodeEnv = process.env.NODE_ENV || 'production'
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool : 'source-map',
  entry:   { filename: './src/index.js' },
  output : { filename: './js/app.js', path: `${__dirname}/dist/` },
  module: {
    loaders: [
		 { 
          test: /\.js$/,
			 exclude: /node_modules/,
			 loader: 'babel-loader',
          query: {
             presets: ['es2015', 'react']
          }
		 },
	    {
		    test: /\.scss$/,
			 loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader!sass-loader!resolve-url-loader"})		 
		 },
		 {
			 test: /\.jpg/,
			 loader: 'file-loader?name=[name].[ext]&outputPath=images/'
		 }
	 ]
  },
  plugins: [
     //uglify js
     new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }, 
			output: {comments: false},
         sourceMap: true
	  }),
	
     //env plugin
	  new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
	  }),
	 
     //env plugin -- css
     new ExtractTextPlugin({filename: './css/styles.css', allChunks: true})
  ]
}