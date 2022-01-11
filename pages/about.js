import Layout from "comps/layout";
import Image from "next/image";
import {siteSettingsQuery, aboutPageQuery} from 'lib/queries';

export default function About({ siteSettings, aboutPage }) {
  return (
    <Layout title='About' siteSettings={siteSettings}>
      <div className="container">
        <h1>About</h1>
        <div className="cover-image">
          <Image
            src={aboutPage.coverImage.asset.url}
            alt={aboutPage.coverImage.asset.altText}
            layout="responsive"
            width={900}
            height={250}
          />
        </div>
        <div className="prose">
          {aboutPage.contentRaw.map((child, i) => {
            return <p key={i}>{child.children[0].text}</p>;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const siteSettings = await siteSettingsQuery();
  const aboutPage = await aboutPageQuery();
  console.log(siteSettings);
  console.log(aboutPage);

  return {
    props: {
      siteSettings,
      aboutPage,
    },
  };
}
