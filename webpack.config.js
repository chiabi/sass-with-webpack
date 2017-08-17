'use strict';

const path = require('path');
const glob = require('glob');
// 번들 또는 번들의 텍스트를 별도의 파일로 추출한다.
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OUT_PATH = path.resolve('./dist');
const CSS_LOADER_CONFIG = [
  {
    loader: 'css-loader',
    options: {
      //sourceMap: GENERATE_SOURCE_MAPS,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      //sourceMap: GENERATE_SOURCE_MAPS,
      plugins: () => [require('autoprefixer')({grid: false})],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      //sourceMap: GENERATE_SOURCE_MAPS,
      includePaths: glob.sync('packages/*/node_modules').map((d) => path.join(__dirname, d)),
    },
  },
];
module.exports = {
  // entry: './src/app.js',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js',
  // },
  module: {
    rules: [{
      test: /\.(css|scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        // css-loader : @import와 url ()을 import / require ()와 같이 해석한다.
        use: [
          'css-loader', 
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')()
              ]
            }
          }
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ] 

}