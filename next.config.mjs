import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  typescript: {
    ignoreBuildErrors: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  experimental: {
    serverComponentsExternalPackages: []
  }
})
