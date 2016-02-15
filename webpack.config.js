var webpack = require('webpack');

console.log(__dirname);
module.exports = {
	entry: './src/foo.js',
	output: {
		path: __dirname + '/dist',
		filename: "js/foo.bundle.js",
    }
}