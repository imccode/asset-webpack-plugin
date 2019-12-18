import { RuleSetRule, Compiler } from 'webpack'
import { ImageOptions } from './types'
// 图片文件

export const imageDefaultOptions: ImageOptions = {
  limit: 500,
  name: 'img/[name].[hash:8].[ext]',
  regExp: /\.(png|jpe?g|gif|svg)(\?.*)?$/
}

export default (options: ImageOptions = {}) => {
  const mergeOptions = { ...imageDefaultOptions, ...options }

  const rule: RuleSetRule = {
    test: mergeOptions.regExp,
    use: [{ loader: 'url-loader', options: mergeOptions }]
  }

  return { rules: [rule] }
}
