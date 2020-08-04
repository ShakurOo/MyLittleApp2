const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const postcssPresetEnv = require('postcss-preset-env')
const precss = require('precss')

module.exports = {
  entry: './src/index.tsx',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { 
        exclude: /node_modules/,
        test: /\.ts(x?)$/, 
        loader: 'ts-loader'
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]_[hash:base64]'
            }
          },
          {
            loader: 'postcss-loader',
            ident: 'postcss',
            options: {
              sourceMap: true,
              plugins: () => [
                precss(),
                postcssPresetEnv({
                  browsers: ['last 2 versions', 'ie >= 9'],
                  compress: true
                })
              ]
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src')
    },
    extensions: ['.css', '.ts', '.tsx', '.js', '.json']
  }
}