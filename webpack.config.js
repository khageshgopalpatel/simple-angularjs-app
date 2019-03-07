const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const rules = [
    {
        test: /^(?!.*\.spec\.js$).*\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ng-annotate-loader',
                options: {
                    add: true
                }
            }
        ]
    },
    {
        test: /\.(html)$/,
        use: [{
            loader: 'html-loader',
            options: {
                minimize: false,
                collapseWhitespace: false
            }
        }]
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: [
                        require('autoprefixer')
                    ],
                    sourceMap: true
                }
            }
        ]
    },
    {
        test: /\.woff(\?.*)?$/,
        use: ["url-loader?limit=10000&mimetype=application/font-woff"]
    },
    {
        test: /\.woff2(\?.*)?$/,
        use: ["url-loader?limit=10000&mimetype=application/font-woff"]
    },
    {
        test: /\.ttf(\?.*)?$/,
        use: ["url-loader?limit=10000&mimetype=application/octet-stream"]
    },
    {
        test: /\.eot(\?.*)?$/,
        use: ["file-loader?name=./assets/fonts/[path][name].[ext]"]
    },
    {
        test: /\.svg(\?.*)?$/,
        use: ["file-loader?name=./assets/images/[path][name].[ext]"]
    },
    {
        test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
        use: ["url-loader?limit=10000&mimetype=image/gif+xml"]
    },
    {
        test: /\.(jpg|png)$/,
        use: ["file-loader?./assets/images/name=[path][name].[ext]"]
    }
];

const plugins = [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
        minify: false,
        template: path.join(__dirname, 'src/index.html'),
        inject: 'body',
        hash: false
    })
];

if (process.env.NODE_ENV === 'development') {
    plugins.push(
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );
}

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    );
}

module.exports = {
    mode: process.env.NODE_ENV,
    cache: true,
    context: __dirname,
    performance: {
        hints: false
    },
    devtool: 'sourcemap',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        inline: true,
        hot: true,
        quiet: false,
        port: 4000,
        historyApiFallback: true,
        stats: {
            chunks: false,
            chunkModules: false
        }
    },
    entry: {
        style: [
            'node_modules/angular-material/angular-material.css',
            'node_modules/angular-material-data-table/dist/md-data-table.min.css'
        ],
        app: [
            'node_modules/angular/angular.js',
            'node_modules/angular-aria/angular-aria.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-messages/angular-messages.js',
            'node_modules/angular-material/angular-material.js',
            'node_modules/angular-material-data-table/dist/md-data-table.min.js',
            'src/app/app.module.js',
            'src/app/post/post.module.js',
            'src/app/post/post.controller.js',
            'src/app/post/post.component.js',
            'src/app/post/post.service.js'
        ]
    },
    output: {
        filename: '[name].bundle-[hash].js',
        chunkFilename: '[name].chunk-[hash].js',
        sourceMapFilename: '[name].bundle-[hash].map',
        path: path.join(__dirname, 'build')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
        minimizer: [new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ie8: false,
                mangle: true,
                toplevel: false,
                compress: {
                    booleans: true,
                    conditionals: true,
                    dead_code: true,
                    drop_debugger: true,
                    drop_console: true,
                    evaluate: true,
                    sequences: true,
                    unused: true,
                    warnings: false
                },
                output: {
                    comments: false,
                    beautify: false,
                }
            }
        })]
    },
    module: {
        rules
    },
    node: {
        fs: 'empty',
        global: true,
        crypto: 'empty'
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', __dirname]
    },
    plugins
};