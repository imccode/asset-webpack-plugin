import { RuleSetRule } from 'webpack'
import { FontOptions } from './types'
// 字体文件

export const fontDefaultOptions: FontOptions = {
  limit: 1e4,
  name: 'fonts/[name].[hash:8].[ext]',
  regExp: /\.(woff2?|eot|ttf|otf)(\?.*)?$/
}

export default (options: FontOptions = {}) => {
  const mergeOptions = { ...fontDefaultOptions, ...options }

  const rule: RuleSetRule = {
    test: mergeOptions.regExp,
    use: [{ loader: 'url-loader', options: mergeOptions }]
  }

  return { rules: [rule] }
}
