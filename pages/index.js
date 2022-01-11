import { fetcher } from "lib/fetch";
import Link from "next/link";
import Layout from "../comps/layout";

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
  const siteSettings = await fetcher(`${process.env.URL}/api/settings`);
  const homePage = await fetcher(`${process.env.URL}/api/home`);

  return {
    props: {
      siteSettings,
      homePage,
    },
  };
}
