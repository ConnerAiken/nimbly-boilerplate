const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		"@babel/polyfill",
		'./src/app.js'
	],
	output: { 
		filename: 'app-bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [ 
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{ 
				test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: "file-loader"
				}
			},
		]
	},
	plugins: [ 
		new HtmlWebpackPlugin({
				hash: true,
				filename: './index.html',
				template: './src/index.html',
				inject: false
		}),
		new MiniCssExtractPlugin({
		  filename: '[name].css',
		  chunkFilename: '[id].css',
		}), 
	]
}