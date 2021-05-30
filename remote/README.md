# webpack新特性

1. 持久缓存
```js
cache: {
  type: "filesystem", // 'memory' | 'filesystem'
  cacheDirectory: path.resolve(__dirname, "node_modules/.cache/webpack"), // 保存目录
},
```
2. Tree Shaking
```json
sideEffects: ["*.css"]
```
3. 资源模块
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.png$/i,
        use: 'asset/resource'
      },
      {
        test: /\.ico$/i,
        use: 'asset/inline'
      },
      {
        test: /\.text$/i,
        use: 'asset/source'
      },
    ],
  },
};
```
在 webpack 5 之前，通常使用：

1、raw-loader 将文件导入为字符串。
2、url-loader 将文件作为 data URI 内联到 bundle 中。
3、file-loader 将文件发送到输出目录。


资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：

1、asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
2、asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
3、asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
4、asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset',
        parser: {
          dataurlCondition: {
            maxSize: 8192
          }
        }
      },
    ],
  },
};
```