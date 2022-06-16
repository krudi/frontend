const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

const config = {
    entry: {
        app: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    isDevelopment
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelopment,
                            modules: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment,
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['autoprefixer']]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    isDevelopment
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['autoprefixer']]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new ProgressBarPlugin(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: __dirname + '/src/images',
                    to: path.resolve(__dirname, 'dist/images')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        })
    ]
}

module.exports = (env) => {
    if (env.mode === 'development') {
        config.devtool = 'inline-source-map'
        config.mode = 'development'
    }
    if (env.mode === 'production') {
        config.mode = 'production'
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        type: 'css/mini-extract',
                        chunks: 'all',
                        enforce: true
                    }
                }
            },
            minimizer: [new CssMinimizerPlugin()]
        }
    }
    return config
}
