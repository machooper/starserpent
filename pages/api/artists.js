import { request } from "graphql-request";

export default async (req, res) => {
  try {
    const artists = await request(
      "https://xrddhs1w.api.sanity.io/v1/graphql/production/default",
      `
      {
  allArtist {
    name
    slug {
      current
    }
    displayImage {
      asset {
        url
        altText
      }
    }
  }
}
      `
    );
    res.status(200).json(artists.allArtist);
  } catch (e) {
    res.status(500).json(e);
  }
};
