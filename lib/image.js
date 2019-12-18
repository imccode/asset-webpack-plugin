"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 图片文件
exports.imageDefaultOptions = {
    limit: 500,
    name: 'img/[name].[hash:8].[ext]',
    regExp: /\.(png|jpe?g|gif|svg)(\?.*)?$/
};
exports.default = (options = {}) => {
    const mergeOptions = { ...exports.imageDefaultOptions, ...options };
    const rule = {
        test: mergeOptions.regExp,
        use: [{ loader: 'url-loader', options: mergeOptions }]
    };
    return { rules: [rule] };
};
