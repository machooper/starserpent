import {request} from 'graphql-request'

export default async (req, res) => {
  try {
    const siteSettings = await request(
      'https://xrddhs1w.api.sanity.io/v1/graphql/production/default',
      `
{
	SiteSettings(id: "siteSettings") {
    title
    description
    logo {
      asset {
        url
      }
    }
    logoDark {
      asset {
        url
      }
    }
    icon {
      asset {
        url
      }
    }
  }
}
    `
    )
    res.status(200).json(siteSettings)
  } catch (e) {
    res.status(500).json(e)
  }
}
