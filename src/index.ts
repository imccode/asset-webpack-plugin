import { Compiler, Configuration } from 'webpack'
import fontConfig from './font'
import imageConfig from './image'
import mediaConfig from './media'
import { AssetWebpackPluginOptions } from './types'

/**
 * 媒体资源webpack插件
 */
class AssetWebpackPlugin {
  options: AssetWebpackPluginOptions = {}

  webpackConfig: Configuration = {}

  constructor(options: AssetWebpackPluginOptions = {}) {
    this.options = options
  }

  /**
   * 执行插件
   * @param compiler
   */
  apply(compiler: Compiler) {
    compiler.hooks.afterEnvironment.tap('AssetWebpackPlugin', () => {
      const image = imageConfig(this.options)
      const font = fontConfig(this.options)
      const media = mediaConfig(this.options)
      compiler.options.module.rules.push(...image.rules, ...font.rules, ...media.rules)
    })
  }
}

export * from './types'
export default AssetWebpackPlugin
export { AssetWebpackPlugin }
module.exports = AssetWebpackPlugin
