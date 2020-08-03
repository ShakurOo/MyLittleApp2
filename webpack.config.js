const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: 'source-map',
  module: {
    rules: [{ 
      exclude: /node_modules/,
      test: /\.ts(x?)$/, 
      loader: 'ts-loader'
    }]
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
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}