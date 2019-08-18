const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

/**
 * NextJS configs
 * @see https://github.com/zeit/next.js/#custom-configuration
 */
module.exports = withCSS(withLess({
  useFileSystemPublicRoutes: false,
  poweredByHeader: false,

  webpack(configs) {
    configs.node = {
      fs: 'empty'
    }

    return configs
  }
}))
