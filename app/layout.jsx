import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import themeConfig from '../theme.config'

export const metadata = {
  title: 'Among Us macOS',
  description: 'Install Among Us on macOS'
}

const navbar = (
  <Navbar
    logo={<b>Among Us macOS</b>}
    projectLink="https://github.com/theodorexz/among-us-macos"
  />
)

const footer = <Footer>MIT {new Date().getFullYear()} © theodorexz</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          {...themeConfig}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}