import { RuleSetRule } from 'webpack'
import { AssetWebpackPluginOptions } from './types'

export default (options: AssetWebpackPluginOptions) => {
  const rules: RuleSetRule[] = []

  Object.keys(options).forEach(key => {
    const item = options[key]
    if (item.regExp)
      rules.push({
        test: item.regExp,
        loader: 'url-loader',
        options: {
          ...item,
          name: item.name ? item.name : `${key}/[name].[hash:8].[ext]`
        }
      })
  })

  return rules
}
