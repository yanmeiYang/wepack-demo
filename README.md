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

### 缓存
- 我们使用webpack来打包我们的模块化后的应用程序，Webpack会生成一个可部署的/dist目录，然后把打包后的内容放置在此目录中。只要/dist目录中的内容部署到服务器上，客服端就能够范根网站此服务器的网站及其资源。2️而最后一步获取资源是比较耗费时间的，这就是为什么浏览器使用一种名为缓存的技术。
- 可以通过命中缓存，以降低流量，使网站加载速度更快，然而，如果我们在部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。犹豫缓存的存在，当你需要获取新的代码时，就会显得很棘手。
- 此内容重点在于通过必要的配置，以确保Webpack编译生成的文件能够被客户端缓存，而在文件内容变化后，能够请求到新的文件。
- 通过使用output.filename进行文件名替换，可以确保浏览器获取到修改后的文件。[hash]替换可以用于在文件名中包含一个构建相关(build-specific)的hash，但是更好的方式是使用[chunkhash]替换，在文件名中包含一个chuk相关的(chunk-specific)的哈希
- hash是build-specific，即每次编译都不同---适用于开发阶段
- chunhash是chunk-specific，是根据每个chunk的内容计算出的hash---适用于生产
- chunkhash 文件不做修改，文件名可能会变，也可能不会