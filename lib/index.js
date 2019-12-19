"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mergeOptions_1 = __importDefault(require("./mergeOptions"));
const rules_1 = __importDefault(require("./rules"));
/**
 * 媒体资源webpack插件
 */
class AssetWebpackPlugin {
    constructor(options = {}) {
        this.options = {};
        this.options = mergeOptions_1.default(options);
    }
    /**
     * 执行插件
     * @param compiler
     */
    apply(compiler) {
        compiler.hooks.afterEnvironment.tap('AssetWebpackPlugin', () => {
            const rules = rules_1.default(this.options);
            compiler.options.module.rules.push(...rules);
        });
    }
}
exports.AssetWebpackPlugin = AssetWebpackPlugin;
exports.default = AssetWebpackPlugin;
module.exports = AssetWebpackPlugin;
