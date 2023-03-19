const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		static: path.join(__dirname, 'dist'),
	},
	devtool: 'inline-source-map',
	plugins: [
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}),
	],
});
