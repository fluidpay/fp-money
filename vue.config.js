module.exports = {
  // parallel: false,
  outputDir: 'docs',
  configureWebpack: {
    // optimization: {
    //   splitChunks: false, // We split our chunks manually
    //   mergeDuplicateChunks: false
    // },
    output: {
      filename: '[name].js',
      chunkFilename: 'js/[name].js'
    }
  }
}
