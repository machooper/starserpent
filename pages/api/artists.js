import { request } from "graphql-request";

const handler = async (req, res) => {
  try {
    const artists = await request(
      process.env.GRAPHQL_URL,
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

export default handler;
