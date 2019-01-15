# wepack-demo

##  自动编译代码
#### webpack's watch model 不会自动刷新浏览器
#### webpack-dev-serve
#### webpack-dev-middleware
**Webpack 遇到的坑**
####webpack 中删除uglifyjs-webpack-plugin内置插件，替换为了terser-webpack-plugin

###生产环境配置，webpack-merge
-开发环境development，webpack.dev.js
-生产环境production, webpack.prod.js
-开发环境中，我们需要具有强大的，具有实时重新加载live reloading或热模块替换hot module replacement能的source map和localhost serve.
-生产环境中，我们的目标则转向于关注更小的bundle,更轻量的source map,以及更优化的资源，以改善加载时间。
