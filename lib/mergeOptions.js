"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 图片文件默认配置
exports.imageDefaultOptions = {
    limit: 500,
    regExp: /\.(png|jpe?g|gif|svg)(\?.*)?$/
};
// 字体文件默认配置
exports.fontDefaultOptions = {
    limit: 1e4,
    regExp: /\.(woff2?|eot|ttf|otf)(\?.*)?$/
};
// 音频、视频媒体文件默认配置
exports.mediaDefaultOptions = {
    limit: 1e4,
    regExp: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/
};
exports.default = (options = {}) => {
    const mergeOptions = {
        ...options,
        image: exports.imageDefaultOptions,
        font: exports.fontDefaultOptions,
        media: exports.mediaDefaultOptions
    };
    if (options.image && typeof options.image === 'object') {
        mergeOptions.image = {
            ...exports.imageDefaultOptions,
            ...options.image
        };
    }
    if (options.font && typeof options.font === 'object') {
        mergeOptions.font = {
            ...exports.fontDefaultOptions,
            ...options.font
        };
    }
    if (options.media && typeof options.media === 'object') {
        mergeOptions.media = {
            ...exports.mediaDefaultOptions,
            ...options.media
        };
    }
    return mergeOptions;
};
