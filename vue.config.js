module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/take-me-home'
    : '/',
  outputDir: 'take-me-home'
}