// 分离css代码
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts?|js)$/,
                use: ["babel-loader","ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(html|khtml|ftl)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 0,
                        name:'[name].[hash:8].[ext]',
                        outputPath:'img/'
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test:/\.(ttf|eot|woff|svg)$/,
                use:{
                    loader:'file-loader',
                    options: {
                        outputPath:'font/'
                    }
                }
            },
            {
                test: /\.dot$/,
                exclude: /node_modules/,
                use: {
                    loader: 'dot-loader',
                    options: {

                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js','.css','.ttf','.eot','.woff','.svg','.jpeg','.png','.gif']
    }
};