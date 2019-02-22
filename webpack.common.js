const webpack = require("webpack");
const path = require("path");
// 自动生成输出文件html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 自动清理dist文件
const CleanWebpackPlugin = require("clean-webpack-plugin");
// css 提取css等样式文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//  入口entry, 出口output, loader, 插件plugins，模式， 浏览器兼容性
module.exports = {
  // entry: "./src/index.js",
  entry: {
    app: "./src/index.js"
    // another: "./src/another-module.js"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 
    // new webpack.HashedModuleIdsPlugin(),
    // TODO 没有成功
    // new MiniCssExtractPlugin({
    //   filename: "demo.css"
    // }),
    new webpack.ProvidePlugin({
      _: "lodash"
    })
  ],
  output: {
    // // filename: "main.js",
    // filename: "[name].[chunkhash].js",
    // // chunkFilename 决定非入口chunk的名称，可以查看output相关文档
    // chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js"
    // libraryTarget: 'umd',
    // library: 'webpackNumbers'
    // publicPath:'/'
  },
  // optimization: {
  //   // 拆分成单独的快
  //   splitChunks: {
  //     // chunks: "all",
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all"
  //       }
  //     }
  //   },
  //   // 创建单个运行时bundle
  //   runtimeChunk: "single"
  // },
  module: {
    rules: [
      {
        // 用户标识出应该被对应的loader进行转换的某个或某些文件
        test: /\.css|\.less$/,
        // 表示进行转换时，应该使用哪个loader
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
      //     {
      //       test: /\.(png|svg|jpg|gif)$/,
      //       use: ["file-loader"]
      //     },
      //     {
      //       test: /\.(woff|woff2|eot|ttf|oft)$/,
      //       use: ["file-loader"]
      //     },
      //     {
      //       test: /\.(csv|tsv)$/,
      //       use: ["csv-loader"]
      //     },
      //     {
      //       test: /\.xml/,
      //       use: ["xml-loader"]
      //     }
    ]
  }
};
