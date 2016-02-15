var webpack = require('webpack');

module.exports = {
	entry: './src/foo.js',
	output: {
		path: __dirname + '/dist',
		filename: "js/foo.bundle.js",
    }
}