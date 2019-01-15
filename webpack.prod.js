const webpack = require("webpack");
const merge = require("webpack-merge");
// uglifyjs-webpack-plugin 之前是webpack内置的，但是现在分出来了
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
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
