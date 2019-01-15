const path = require("path");
// 自动生成输出文件html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 自动清理dist文件
const CleanWebpackPlugin = require("clean-webpack-plugin");

//  入口entry, 出口output, loader, 插件plugins，模式， 浏览器兼容性
module.exports = {
  // entry: "./src/index.js",
  entry: {
    app: "./src/index.js",
    // print: "./src/print.js"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Output Management"
    })
  ],
  output: {
    // filename: "main.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath:'/'
  },
  module: {
    rules: [
      {
        // 用户标识出应该被对应的loader进行转换的某个或某些文件
        test: /\.css$/,
        // 表示进行转换时，应该使用哪个loader
        use: ["style-loader", "css-loader"]
      },
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
