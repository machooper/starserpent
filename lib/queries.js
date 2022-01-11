import {request} from 'graphql-request';

export async function siteSettingsQuery() {
const siteSettingsRes = await request(process.env.GRAPHQL_URL, `
  {
  SiteSettings(id: "siteSettings") {
    title
    description
    keywords
    logo {
      asset {
        url
        altText
      }
    }
    logoDark {
      asset {
        url
        altText
      }
    }
    icon {
      asset {
        url
      }
    }
    metaImage {
      asset {
        url
      }
    }
  }
}
`);
  return siteSettingsRes.SiteSettings;
}

export async function homePageQuery() {
  const homePageRes = await request(process.env.GRAPHQL_URL, `
  {
    HomePage(id: "homePage") {
     heading
     subheading
    }
  }
  `);
  return homePageRes.HomePage;
}

export async function aboutPageQuery() {
  const aboutPageRes = await request(process.env.GRAPHQL_URL, `
  {
    AboutPage(id: "aboutPage") {
      heading
      coverImage {
        asset {
          url
        }
      }
      contentRaw
    }
  }
`);
  return aboutPageRes.AboutPage;
}

export async function allArtistsQuery() {
  const allArtistsRes = await request(process.env.GRAPHQL_URL, `
  {
    allArtist {
      name
      slug {
        current
      }
      displayImage {
        asset {
          url
        }
      }
    } 
  }`);
  return allArtistsRes.allArtist
}

export async function allArtistSlugs() {
  const allArtistsRes = await request(process.env.GRAPHQL_URL, `
  {
    allArtist {
      slug {
        current
      }
    } 
  }`);
  return allArtistsRes.allArtist
}

export async function artistBySlug(slug) {
  const allArtistRes = await request(process.env.GRAPHQL_URL, `
  {
    allArtist(where: {slug: {current: {eq: "${slug}"}}}) {
      name
      coverImage {
        asset {
          url
        }
      }
      biographyRaw
      releases {
        title
        artwork {
          asset {
            url
            altText
          }
        }
        url
      }
    }
  }`);

  return allArtistRes.allArtist[0]
}

export async function servicesPageQuery() {
  const servicesPageRes = await request(process.env.GRAPHQL_URL, `
  {
    ServicesPage(id: "servicesPage") {
      list
      contentRaw
    }
  }
`);

  return servicesPageRes.ServicesPage;
}
