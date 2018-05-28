// available options with default values (all optional)
module.exports = {
    // By default app will be deployed at the root of a domain,
    // e.g. https://www.my-app.com
    // You can specify that sub-path if your app is deployed at a sub-path
    // e.g. https://www.my-app.com/my-app/
    // then change this to '/my-app/'
    baseUrl: '/',

    outputDir: 'dist',

    // where to put static assets(js/css/img/font/...)
    assetsDir: '',

    // whether to use eslint-loader for lint on save.
    // valid values: true | false | 'error'
    // when set to 'error', lint errors will cause compilation to fail
    lintOnSave: true,

    // use the full build with in-browser compiler
    // false -> vue/dist/vue.runtime.esm.js
    // true -> vue/dist/vue.esm.js 
    compiler: false,

    // explicitly transpile a dependency with this option
    transpileDependencies: [/* string or regex */],

    // generate sourceMap for production build?
    productionSourceMap: true,

    // config
    //     .module
    //         .rule('compile')
    //             .test(/\.js$/)
    //             .use('babel')
    //                 .loader('babel-loader')
    // config.toString();
    // /*
    // {
    //     module: {
    //         rules: [
    //             /* config.module.rule('compile') */
    //             {
    //                 test: /\.js$/,
    //                 use: [
    //                     /* config.module.rule('compile').use('bebel') */
    //                     {
    //                         loader: 'babel-loader'
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // }
    // */
    // Modifying Plugin Options
    // config => {
    //     config.plugin('html')
    //     .tap(args => {
    //         args[0].template = '/Users/admin/repo/app/public/templates/index.html'
    //         return args;
    //     })
    // }
    chainWebpack: () => {},

    // the easiest way to tweak the webpack config is provide an object
    // to the configureWebpack option in vue.config.js
    // configureWebpack: {
    //     plugins: [
    //         new MyAwesomeWebpackPlugin(),
    //     ]
    // }
    // If you need conditional behavior based on the environment,
    // or want to directly mutate the config, use a function
    // the function receives the resolved config as the argument.
    // Inside the function, you can either mutate the config directly
    // or return an object which will be merged
    // configureWepack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         // mutate config for production
    //     } else {
    //         // mutate for development
    //     }
    // }
    configureWebpack: () => {},

    css: {
        // extract CSS in components into a single CSS file(only in production)
        // can also be an object of options to pass to extract-text-webpack-plugin
        extract: true,

        // enable CSS source maps?
        sourceMap: false,

        // pass custom options to pre-processor loaders
        // sass-loader, use { sass: { ... } }
        loaderOptions: {},

        // Enable CSS modules for all css/pre-processor files.
        // This option does not affect *.vue files
        modules: false
    },

    // options for the PWA plugin
    pwa: {},

    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => {}
    },

    pluginOptions: {}
}