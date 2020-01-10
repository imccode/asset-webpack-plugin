import { Compiler } from 'webpack'
import mergeOptions from './mergeOptions'
import rulesConfig from './rules'
import { AssetWebpackPluginOptions } from './types'

/**
 * 媒体资源webpack插件
 */
class AssetWebpackPlugin {
  options: AssetWebpackPluginOptions = {}

  constructor(options: AssetWebpackPluginOptions = {}) {
    this.options = mergeOptions(options)
  }

  /**
   * 执行插件
   * @param compiler
   */
  apply(compiler: Compiler) {
    compiler.options.module.rules.push(...rulesConfig(this.options))
  }
}

export * from './types'
export { AssetWebpackPlugin }
export default AssetWebpackPlugin
module.exports = AssetWebpackPlugin
