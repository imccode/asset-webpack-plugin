# asset-webpack-plugin

一个处理静态资源的webpack插件。

默认处理处理 `.png | .jpe | .jpep | .gif | .svg | .woff | .woff2 | .eot | .ttf | .otf | .mp4 | .webm | .ogg | .mp3 | .wav | .flac | .aac` 文件

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
  plugins: [
    new AssetWebpackPlugin()
  ]
}
```

```javascript
const AssetWebpackPlugin = require('asset-webpack-plugin')

module.exports = {
  plugins: [
    new AssetWebpackPlugin({
      image: {
        limit: 1024,
        esModule: true
        //...
      },
      font: {
        esModule: false
        //...
      },
      media: {
        esModule: false
        //...
      }
    })
  ]
}
```

## 配置项
具体配置项的数据类型见[types.ts](./src/types.ts)

### image

- **name** 输出资源名称。 默认: `'img/[name].[hash:8].[ext]'`
- **regExp** 使用正则表达式来过滤需要处理的文件。 默认: `/\.(png|jpe?g|gif|svg)(\?.*)?$/`
- **limit** 该限制可以通过加载程序选项指定。 默认: `500`

### font

- **name** 输出资源名称。 默认: `'fonts/[name].[hash:8].[ext]'`
- **regExp** 使用正则表达式来过滤需要处理的文件。 默认: `/\.(woff2?|eot|ttf|otf)(\?.*)?$/`
- **limit** 该限制可以通过加载程序选项指定。 默认: `1e4`

### media

- **name** 输出资源名称。 默认: `'media/[name].[hash:8].[ext]'`
- **regExp** 使用正则表达式来过滤需要处理的文件。 默认: `/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/`
- **limit** 该限制可以通过加载程序选项指定。 默认: `1e4`

### 通用的配置项

- **include** 包含处理的资源。默认: `undefined`
- **exclude** 排除要处理的资源。默认: `undefined`
- **fallback** 指定当目标文件的大小超过limit选项中设置的限制时使用的备用loader。 默认: `'file-loader'`
- **fallback** 指定当目标文件的大小超过limit选项中设置的限制时使用的备用loader。 默认: `'file-loader'`
- **...** [file-loader](https://github.com/webpack-contrib/file-loader)的options配置。
