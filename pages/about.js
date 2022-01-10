import Layout from 'comps/layout'
import {fetcher} from 'lib/fetch'
import Image from 'next/image'

export default function About({siteSettings, aboutPage}) {
  return (
    <Layout siteSettings={siteSettings}>
      <div className='container'>
        <h1>About</h1>
        <div className='cover-image'>
          <Image
            src={aboutPage.coverImage.asset.url}
            alt={aboutPage.coverImage.asset.altText}
            layout='responsive'
            width={900}
            height={250}
          />
        </div>
          <div className='prose'>
            {aboutPage.contentRaw.map((child, i) => {
              return (
                <p key={i}>
                  {child.children[0].text}
                </p>
              )
            })}
          </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await fetcher("http://localhost:3000/api/settings")
  const aboutPage = await fetcher("http://localhost:3000/api/about")

  return {
    props: {
      siteSettings,
      aboutPage
    }
  }
}
