const path = require('path');

module.exports = {
 entry: './src/index.js',
 output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
  clean: true,
 },
 module: {
  rules: [
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
    },
   },
  ],
 },
 mode: 'production',
 devtool: 'source-map',
};