import { AssetWebpackPluginOptions, FontOptions, ImageOptions, MediaOptions } from './types'

// 图片文件默认配置
export const imageDefaultOptions: ImageOptions = {
  limit: 500,
  regExp: /\.(png|jpe?g|gif|svg)(\?.*)?$/
}

// 字体文件默认配置
export const fontDefaultOptions: FontOptions = {
  limit: 1e4,
  regExp: /\.(woff2?|eot|ttf|otf)(\?.*)?$/
}

// 音频、视频媒体文件默认配置
export const mediaDefaultOptions: MediaOptions = {
  limit: 1e4,
  regExp: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/
}

export default (options: AssetWebpackPluginOptions = {}) => {
  const mergeOptions: AssetWebpackPluginOptions = {
    ...options,
    image: imageDefaultOptions,
    font: fontDefaultOptions,
    media: mediaDefaultOptions
  }

  if (options.image && typeof options.image === 'object') {
    mergeOptions.image = {
      ...imageDefaultOptions,
      ...options.image
    }
  }

  if (options.font && typeof options.font === 'object') {
    mergeOptions.font = {
      ...fontDefaultOptions,
      ...options.font
    }
  }

  if (options.media && typeof options.media === 'object') {
    mergeOptions.media = {
      ...mediaDefaultOptions,
      ...options.media
    }
  }

  return mergeOptions
}
