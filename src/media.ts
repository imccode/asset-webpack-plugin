import { RuleSetRule } from 'webpack'
import { MediaOptions } from './types'
// 音频、视频媒体文件

export const mediaDefaultOptions: MediaOptions = {
  limit: 1e4,
  name: 'media/[name].[hash:8].[ext]',
  regExp: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/
}

export default (options: MediaOptions = {}) => {
  const mergeOptions = { ...mediaDefaultOptions, ...options }

  const rule: RuleSetRule = {
    test: mergeOptions.regExp,
    use: [{ loader: 'url-loader', options: mergeOptions }]
  }

  return { rules: [rule] }
}
