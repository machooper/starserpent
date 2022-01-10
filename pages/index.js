import {fetcher} from 'lib/fetch'
import Layout from '../comps/layout'

export default function Home({siteSettings}) {
  return (
    <Layout
      title='Home'
      description='An awesome page'
      siteSettings={siteSettings}>
      <h1>Welcome</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await fetcher('http://localhost:3000/api/settings')

  return {
    props: {
      siteSettings
    }
  }
}
