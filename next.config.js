const nextra = require('nextra').default

const withNextra = nextra({})

module.exports = withNextra({
  typescript: {
    ignoreBuildErrors: true
  }
})