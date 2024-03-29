const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: {
    'fp-money': './fp-money.ts',
    'fp-money-vue': './component.vue',
    'fp-money-css': './fp-money.scss'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'fp-money.css'
    })
  ],
  resolve: {
    extensions: [ '.vue', '.ts', '.js' ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  output: {
    library: 'FPMoney',
    libraryTarget: 'umd',
    // libraryExport: 'default',
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist')
  }
}