import { request } from "graphql-request";

export default async (req, res) => {
  try {
    const artist = await request(
      "https://xrddhs1w.api.sanity.io/v1/graphql/production/default",
      `
      {
    allArtist(where: {slug: {current: {eq: "${req.query.slug}"}}}) {
    	name
      coverImage {
        asset {
          url 
          altText
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
  } 
    `
    );
    res.status(200).json(artist);
  } catch (e) {
    res.status(500).json({ error: e.message });
    console.log(e);
  }
};
