"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 字体文件
exports.fontDefaultOptions = {
    limit: 1e4,
    name: 'fonts/[name].[hash:8].[ext]',
    regExp: /\.(woff2?|eot|ttf|otf)(\?.*)?$/
};
exports.default = (options = {}) => {
    const mergeOptions = { ...exports.fontDefaultOptions, ...options };
    const rule = {
        test: mergeOptions.regExp,
        use: [{ loader: 'url-loader', options: mergeOptions }]
    };
    return { rules: [rule] };
};
