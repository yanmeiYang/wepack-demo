const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    // filename: "main.js",
    filename: "[name].[hash].js",
    // chunkFilename 决定非入口chunk的名称，可以查看output相关文档
    chunkFilename: '[name].[hash].js',
    // publicPath:'/'
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 3000
  }
});
