"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 音频、视频媒体文件
exports.mediaDefaultOptions = {
    limit: 1e4,
    name: 'media/[name].[hash:8].[ext]',
    regExp: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/
};
exports.default = (options = {}) => {
    const mergeOptions = { ...exports.mediaDefaultOptions, ...options };
    const rule = {
        test: mergeOptions.regExp,
        use: [{ loader: 'url-loader', options: mergeOptions }]
    };
    return { rules: [rule] };
};
