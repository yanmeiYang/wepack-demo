# wepack-demo

## 自动编译代码

#### webpack's watch model 不会自动刷新浏览器

#### webpack-dev-serve

#### webpack-dev-middleware

**Webpack 遇到的坑**
####webpack 中删除 uglifyjs-webpack-plugin 内置插件，替换为了 terser-webpack-plugin

###自动清理 dist 文件

- clean-webpack-plugin

###生产环境配置，webpack-merge

- 开发环境 development，webpack.dev.js
- 生产环境 production, webpack.prod.js
- 开发环境中，我们需要具有强大的，具有实时重新加载 live reloading 或热模块替换 hot module replacement 能的 source map 和 localhost serve.
- 生产环境中，我们的目标则转向于关注更小的 bundle,更轻量的 source map,以及更优化的资源，以改善加载时间。

###代码分离

- 代码分离是 webpack 中最引人注目的特性之一。此性能能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的饿 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

- css 提取：mini-css-extract-plugin


### 其他内容
- import() 返回一个promise，因此可以和async函数一起使用
-  webpack --profile --json > stats.json 工程生成json文件


### 懒加载
- 代码分离，每次加载页面的时候都会请求他，这样做并没有对我们有很多帮助，还会对性能产生负面影响
- 等到交互的时候再加载那个代码块