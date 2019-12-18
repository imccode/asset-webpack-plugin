"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const font_1 = __importDefault(require("./font"));
const image_1 = __importDefault(require("./image"));
const media_1 = __importDefault(require("./media"));
/**
 * 媒体资源webpack插件
 */
class AssetWebpackPlugin {
    constructor(options = {}) {
        this.options = {};
        this.webpackConfig = {};
        this.options = options;
    }
    /**
     * 执行插件
     * @param compiler
     */
    apply(compiler) {
        compiler.hooks.afterEnvironment.tap('AssetWebpackPlugin', () => {
            const image = image_1.default(this.options);
            const font = font_1.default(this.options);
            const media = media_1.default(this.options);
            compiler.options.module.rules.push(...image.rules, ...font.rules, ...media.rules);
        });
    }
}
exports.AssetWebpackPlugin = AssetWebpackPlugin;
exports.default = AssetWebpackPlugin;
module.exports = AssetWebpackPlugin;
