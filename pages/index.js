import Layout from '../comps/layout'

export default function Home({fallback}) {
  return (
      <Layout title='Home' description='An awesome page'>
        <h1>Welcome</h1>
      </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await fetch()
}