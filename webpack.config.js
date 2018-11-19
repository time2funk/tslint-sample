const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, '/src/index.ts'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	module: {
		rules: [
	        // {
	        //     enforce: 'pre',
	        //     test: /\.ts?$/,
	        //     loader: 'tslint',
	        //     exclude: /node_modules/,
	        // },
			{
				test: /\.ts/,
				use: 'ts-loader'
			}
		]
	},
	plugins: [
		new TSLintPlugin({
			files: ['./src/**/*.ts']
		})
	]
};