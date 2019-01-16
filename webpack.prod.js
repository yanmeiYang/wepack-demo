const webpack = require("webpack");
const merge = require("webpack-merge");
// uglifyjs-webpack-plugin 之前是webpack内置的，但是现在分出来了
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    // filename: "main.js",
    filename: "[name].[chunkhash].js",
    // chunkFilename 决定非入口chunk的名称，可以查看output相关文档
    chunkFilename: '[name].[chunkhash].js',
    // publicPath:'/'
  },
  mode: "production",
  devtool: "source-map",
  plugins: [
    new TerserPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
