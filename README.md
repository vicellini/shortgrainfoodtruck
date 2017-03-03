#ES6 Module Bundler Setup

##Setup 

#### 1. Clone this repo
```
git clone git@github.com:t3tools/webpack-es6-and-scss.git «your-projet»
```

#### 2. Install the packages
```
npm install
```

#### 3. Run the taskrunner & run the local server
```
npm run go
```

#### 4. Workflow
Do `.scss` and javascript work in the `src/` directory. 

*Note* for linking images in `.js` files:
- you must link relative to the `index.html` in the `dist/` folder since that is where the bundle.js .
- example in React: `<img src="./images/party-hat">`



`index.html` pages are served out of the `dist/`

For linking images in `url()` in `.scss` files:




##Webpack Configuration:
```
const webpack = require('webpack')
const nodeEnv = process.env.NODE_ENV || 'production'

module.exports = {
  devtool : 'source-map',
  entry:   { filename: './src/index.js' },
  output : { filename: './dist/js/app.js' },
  module: {
    loaders: [	    
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
  ]
}

```


#Configure #ES6
#### In `package.json`
- babel-core
- babel-loader
- babel-preset-es2015

#### ES6: In `webpack.config.js`
```
	...
   loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		},
   ...
```


### Configure Scss
#### (in `package.json`
```
    "css-loader": "^0.26.1",
    "sass-loader": "^5.0.1",
    "style-loader": "^0.13.1",
    "node-sass": "^4.5.0",
    "extract-text-webpack-plugin": "^2.0.0-beta.5",
```

#### (2) in `webpack.config.js`
```
const ExtractTextPlugin = require('extract-text-webpack-plugin');

modules: {
  loaders: [
	  ...
     {
		  test: /\.scss$/,
		  loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader!sass-loader"})		 
	  },
	]
  },

  plugins: {
	 ...
    new ExtractTextPlugin({filename: './dist/styles.css', allChunks: true})
  }

}
  
```
