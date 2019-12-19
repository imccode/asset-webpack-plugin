"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (options) => {
    const rules = [];
    Object.keys(options).forEach(key => {
        const item = options[key];
        if (item.regExp)
            rules.push({
                test: item.regExp,
                loader: 'url-loader',
                options: {
                    ...item,
                    name: item.name ? item.name : `${key}/[name].[hash:8].[ext]`
                }
            });
    });
    return rules;
};
