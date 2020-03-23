const autoprefixer = require('autoprefixer')
const path = require('path')
const sass = require('sass')
const webpack = require('webpack')

const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  mode: process.env.NODE_ENV || 'development',
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules', 'src']
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js'
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true
      })
    ]
  },
  plugins: getPlugins(),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /index\.jsx?$/,
        loader: 'baggage-loader?style.sass'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer],
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['node_modules'],
              },
              implementation: sass,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.ttf|eot|woff|woff2/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: !isProduction,
              optipng: {
                optimizationLevel: 7
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: isProduction,
          interpolate: true
        }
      }
    ]
  }
}

function getPlugins() {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    })
  ]

  if (isProduction) {
    plugins.push(
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } }
      })
    )
  }

  return plugins
}
