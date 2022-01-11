import Link from "next/link";
import Layout from "../comps/layout";
import { siteSettingsQuery, homePageQuery } from "lib/queries";

export default function Home({ siteSettings, homePage }) {
  return (
    <Layout
      title="Home"
      description="An awesome page"
      siteSettings={siteSettings}
    >
      <div className="container">
        <h1>{homePage.heading}</h1>
        <p>{homePage.subheading}</p>
        <Link href="/about" passHref>
          <button className="btn-primary">Find Out More</button>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const siteSettings = await siteSettingsQuery();
  const homePage = await homePageQuery();

  return {
    props: {
      siteSettings,
      homePage,
    },
  };
}
