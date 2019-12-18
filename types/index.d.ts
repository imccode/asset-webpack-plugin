import { Compiler, Configuration } from 'webpack';
import { AssetWebpackPluginOptions } from './types';
/**
 * 媒体资源webpack插件
 */
declare class AssetWebpackPlugin {
    options: AssetWebpackPluginOptions;
    webpackConfig: Configuration;
    constructor(options?: AssetWebpackPluginOptions);
    /**
     * 执行插件
     * @param compiler
     */
    apply(compiler: Compiler): void;
}
export * from './types';
export default AssetWebpackPlugin;
export { AssetWebpackPlugin };
