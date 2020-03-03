/**
 * NextJS configs.
 * @see https://github.com/zeit/next.js/#custom-configuration
 */
module.exports = {
  poweredByHeader: false,

  webpack (configs) {
    configs.node = {
      fs: 'empty'
    }

    return configs
  }
}
