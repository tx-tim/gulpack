// var webpack = require('webpack');

// module.exports = {
// 	entry: './src/foo.js',
// 	output: {
// 		path: __dirname + '/dist',
// 		filename: "js/foo.bundle.js",
//     }
// }


var webpack = require('webpack');

var commonsPlugin =
    new webpack.optimize.CommonsChunkPlugin('./js/common.js');


module.exports = {
	entry: {
		foo: "./src/foo.js",
		bar: "./src/bar.js"
	},
	output: {
		path: __dirname + '/dist',
		filename: "js/[name].bundle.js",
    },
	plugins: [commonsPlugin]
}