import { request } from "graphql-request";

export default async (req, res) => {
  try {
    const siteSettings = await request(
      process.env.GRAPHQL_URL,
      `
{
	SiteSettings(id: "siteSettings") {
    title
    description
    keywords
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
    metaImage {
      asset {
        url
      }
    }
  }
}
    `
    );
    res.status(200).json(siteSettings.SiteSettings);
  } catch (e) {
    res.status(500).json(e);
  }
};
