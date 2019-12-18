import { RuleSetCondition } from 'webpack';
/** 资源处理插件配置项 */
export interface AssetWebpackPluginOptions {
    /** 图片资源配置项 */
    image?: ImageOptions;
    /** 字体资源配置项 */
    font?: FontOptions;
    /** 媒体资源配置项 */
    media?: MediaOptions;
}
/** url-loader 配置项 */
export interface UrlLoaderOptions extends FileLoaderOptions {
    [key: string]: any;
    /** 包含处理的资源 */
    include?: RuleSetCondition;
    /** 排除要处理的资源 */
    exclude?: RuleSetCondition;
    /**
     * 指定当目标文件的大小超过limit选项中设置的限制时使用的备用loader。
     *
     * 默认: file-loader
     */
    fallback?: string | 'file-loader';
    /**
     * 该限制可以通过加载程序选项指定。
     *
     * 默认: undefined
     */
    limit?: number | string | boolean;
    /**
     * 设置要转换文件的MIME类型。
     * 如果未指定，则文件扩展名将用于查找MIME类型。
     */
    mimetype?: string;
}
/**
 * 转换资源路径
 *
 * @params file 文件路径
 */
declare type TransformPathFunction = (file: string) => string;
/**
 * 指定将放置目标文件的文件系统路径方法。
 *
 * @params url 资源输出路径
 * @params resourcePath 文件的绝对路径
 * @params context 全局上下文，webpack的context
 */
declare type PathFunction = (url: string, resourcePath: string, context: string) => string;
export interface FileLoaderOptions {
    /**
     * 输出资源名称
     *
     * 默认: '[contexthash].[ext]'
     */
    name?: string | TransformPathFunction;
    /**
     *  指定将放置目标文件的文件系统路径
     *
     * 默认: undefined
     */
    outputPath?: string | PathFunction;
    /**
     * 指定项目发布路径
     *
     * 默认: <__webpack_public_path__>
     */
    publicPath?: string | PathFunction;
    /**
     * 指定一个自定义函数来对生成的公共路径进行后处理。
     * 这可以用于添加或添加仅在运行时可用的动态全局变量。
     *
     * 默认: undefined
     */
    postTransformPublicPath?: TransformPathFunction;
    /**
     * 指定自定义文件上下文。
     *
     * 默认: <webpack.context>
     */
    context?: string;
    /**
     * 如果为true，则发出一个文件（将文件写入文件系统）。
     * 如果为false，则加载程序将返回公共URI，但不会发出文件。
     * 禁用服务器端软件包的此选项通常很有用。
     *
     * 默认: true
     */
    emitFile?: boolean;
    /**
     * 使用正则表达式来过滤需要处理的文件
     *
     * 默认: undefined
     */
    regExp?: RegExp;
    /**
     * 默认情况下，文件加载器会生成使用ES模块语法的JS模块。
     * 在某些情况下，使用ES模块是有益的，例如在模块module和tree shaking的情况下。
     *
     * 默认: false
     */
    esModule?: boolean;
}
/** 图片资源配置项 */
export interface ImageOptions extends UrlLoaderOptions {
    /**
     * 输出资源名称
     *
     * 默认: 'img/[name].[hash:8].[ext]'
     */
    name?: string | TransformPathFunction;
    /**
     * 使用正则表达式来过滤需要处理的文件
     *
     * 默认: /\.(png|jpe?g|gif|svg)(\?.*)?$/
     */
    regExp?: RegExp;
    /**
     * 该限制可以通过加载程序选项指定。
     *
     *  默认: 500
     */
    limit?: number | string | boolean;
}
/** 字体资源配置项 */
export interface FontOptions extends UrlLoaderOptions {
    /**
     * 输出资源名称
     *
     * 默认: 'fonts/[name].[hash:8].[ext]'
     */
    name?: string | TransformPathFunction;
    /**
     * 使用正则表达式来过滤需要处理的文件
     *
     * 默认: /\.(woff2?|eot|ttf|otf)(\?.*)?$/
     */
    regExp?: RegExp;
    /**
     * 该限制可以通过加载程序选项指定。
     *
     *  默认: 1e4
     */
    limit?: number | string | boolean;
}
/** 媒体资源配置项 */
export interface MediaOptions extends UrlLoaderOptions {
    /**
     * 输出资源名称
     *
     * 默认: 'media/[name].[hash:8].[ext]'
     */
    name?: string | TransformPathFunction;
    /**
     * 使用正则表达式来过滤需要处理的文件
     *
     * 默认: /\.(png|jpe?g|gif|svg)(\?.*)?$/
     */
    regExp?: RegExp;
    /**
     * 该限制可以通过加载程序选项指定。
     * 默认: 1e4
     */
    limit?: number | string | boolean;
}
export {};
