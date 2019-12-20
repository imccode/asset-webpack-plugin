# asset-webpack-plugin

:grin:一个处理静态资源的 webpack 插件。

默认处理 `.png | .jpe | .jpep | .gif | .svg | .woff | .woff2 | .eot | .ttf | .otf | .mp4 | .webm | .ogg | .mp3 | .wav | .flac | .aac` 文件，分别生成对应 `image | font | media` 文件夹的资源文件

:point_right:
[![github](https://img.shields.io/github/release-date/imccode/asset-webpack-plugin)](https://github.com/imccode/asset-webpack-plugin/releases)
[![github](https://img.shields.io/npm/v/asset-webpack-plugin)](https://www.npmjs.com/package/asset-webpack-plugin)
[![github](https://img.shields.io/badge/webpack-%3E%20%3D%204.0.0-blue)](https://webpack.js.org/)
[![github](https://img.shields.io/badge/node-%3E%20%3D%2010.0.0-blue)](https://nodejs.org/)
[![github](https://img.shields.io/npm/l/asset-webpack-plugin)](https://www.npmjs.com/package/asset-webpack-plugin)
[![github](https://img.shields.io/badge/PRs-welcome-green)](https://github.com/imccode/asset-webpack-plugin)

## 安装获取

```shell
yarn add asset-webpack-plugin -D

npm install asset-webpack-plugin -D

pnpm install asset-webpack-plugin -D
```

## 使用方式

```javascript
const AssetWebpackPlugin = require('asset-webpack-plugin')

module.exports = {
  plugins: [new AssetWebpackPlugin()]
}
```

```javascript
const AssetWebpackPlugin = require('asset-webpack-plugin')

module.exports = {
  plugins: [
    new AssetWebpackPlugin({
      image: {
        limit: 1024,
        //...
      },
      font: {
        esModule: false
        //...
      },
      media: {
        esModule: false
        //...
      },
      //...
    })
  ]
}
```

## 配置项

具体配置项的数据类型见[types.ts](./src/types.ts)

### image 默认

- **name** 输出资源名称。 默认: `'image/[name].[hash:8].[ext]'`
- **regExp** 使用正则表达式来过滤需要处理的文件。 默认: `/\.(png|jpe?g|gif|svg)(\?.*)?$/`
- **limit** 该限制可以通过加载程序选项指定。 默认: `500`
- **fallback** 指定当目标文件的大小超过 limit 选项中设置的限制时使用的备用 loader。 默认: `'file-loader'`
- **...** [file-loader](https://github.com/webpack-contrib/file-loader)的 options 配置。

### font 默认

- **name** 输出资源名称。 默认: `'fonts/[name].[hash:8].[ext]'`
- **regExp** 使用正则表达式来过滤需要处理的文件。 默认: `/\.(woff2?|eot|ttf|otf)(\?.*)?$/`
- **limit** 该限制可以通过加载程序选项指定。 默认: `1e4`
- **fallback** 指定当目标文件的大小超过 limit 选项中设置的限制时使用的备用 loader。 默认: `'file-loader'`
- **...** [file-loader](https://github.com/webpack-contrib/file-loader)的 options 配置。

### media 默认

- **name** 输出资源名称。 默认: `'media/[name].[hash:8].[ext]'`
- **regExp** 使用正则表达式来过滤需要处理的文件。 默认: `/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/`
- **limit** 该限制可以通过加载程序选项指定。 默认: `1e4`
- **fallback** 指定当目标文件的大小超过 limit 选项中设置的限制时使用的备用 loader。 默认: `'file-loader'`
- **...** [file-loader](https://github.com/webpack-contrib/file-loader)的 options 配置。

### [name] 自定义名称，例如：pdf

- **name** 输出资源名称。 默认: `'pdf/[name].[hash:8].[ext]'`
- **regExp** 使用正则表达式来过滤需要处理的文件。
- **limit** 该限制可以通过加载程序选项指定。
- **fallback** 指定当目标文件的大小超过 limit 选项中设置的限制时使用的备用 loader。 默认: `'file-loader'`
- **...** [file-loader](https://github.com/webpack-contrib/file-loader)的 options 配置。
