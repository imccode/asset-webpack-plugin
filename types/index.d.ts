import { Compiler } from 'webpack';
import { AssetWebpackPluginOptions } from './types';
/**
 * 媒体资源webpack插件
 */
declare class AssetWebpackPlugin {
    options: AssetWebpackPluginOptions;
    constructor(options?: AssetWebpackPluginOptions);
    /**
     * 执行插件
     * @param compiler
     */
    apply(compiler: Compiler): void;
}
export * from './types';
export { AssetWebpackPlugin };
export default AssetWebpackPlugin;
