import Layout from 'comps/layout'
import {fetcher} from 'lib/fetch'
import Image from 'next/image'

export default function About({siteSettings, aboutPage}) {
  return (
    <Layout title='About' siteSettings={siteSettings}>
      <div className='container'>
        <h1>About</h1>
        <div className='cover-image'>
          <Image
            src={aboutPage.coverImage.asset.url}
            alt=ab

        <h2>{aboutPage.heading}</h2>
        {aboutPage.contentRaw.map((item, index) => (
          <p key={index}>{item.children.text}</p>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await fetcher('http://localhost:3000/api/settings')
  const aboutPage = await fetcher('http://localhost:3000/api/about')

  return {
    props: {
      siteSettings,
      aboutPage
    }
  }
}
