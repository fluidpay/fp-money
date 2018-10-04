module.exports = {
  parallel: false,
  outputDir: 'docs',
  configureWebpack: {
    output: {
      filename: '[name].js'
    }
  }
}
