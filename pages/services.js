import Layout from "comps/layout";
import {siteSettingsQuery, servicesPageQuery} from 'lib/queries';

export default function Services({ siteSettings, servicesPage }) {
  return (
    <Layout title="Services" siteSettings={siteSettings}>
      <div className="container">
        <h1>Services</h1>
        <div className="list">
          <ul className="list-group">
            {servicesPage.list.slice(0, 3).map((item, i) => (
              <li key={i} className="list-group-item">
                <h2>{item}</h2>
              </li>
            ))}
          </ul>
          <ul className="list-group">
            {servicesPage.list.slice(3).map((item, i) => (
              <li key={i} className="list-group-item">
                <h2>{item}</h2>
              </li>
            ))}
          </ul>
        </div>
        <div className="prose">
          {servicesPage.contentRaw.map((child, i) => {
            return <p key={i}>{child.children[0].text}</p>;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const siteSettings = await siteSettingsQuery();
  const servicesPage = await servicesPageQuery();

  return {
    props: {
      siteSettings,
      servicesPage,
    },
  };
}
