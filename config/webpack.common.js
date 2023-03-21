const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config();

const isDevelopment = process.env.MODE === 'development';

module.exports = {
  entry: path.join(__dirname, '../src', 'main.jsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.module.css$/,
        exclude: /node_modules/,
        use: [
          isDevelopment
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.module\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          isDevelopment
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: [/node_modules/, /\.module.(s[ac]ss)$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(js)?x$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript'
              }
            }
          }
        }
      }
    ]
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'] },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public', 'index.html')
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment
        ? '[name].css'
        : '[name].[chunkhash].css',
      chunkFilename: isDevelopment
        ? '[id].css'
        : '[id].[chunkhash].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'defaultVendors',
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
