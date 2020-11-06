const path = require('path')

module.exports = {
  sassOptions: {
    prependData: `
      @import "~@/styles/mixins.scss";
      @import "~@/styles/variables.scss";
    `
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname)
    }
    return config
  }
}
