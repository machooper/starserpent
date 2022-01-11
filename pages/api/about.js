import { request } from "graphql-request";

export default async (req, res) => {
  try {
    const aboutPage = await request(
      process.env.GRAPHQL_URL,
      `{
        AboutPage(id: "aboutPage") {
          coverImage {
            asset {
              url
              altText
            }
          }
          heading
          contentRaw
        }
      }`
    );
    res.status(200).json(aboutPage.AboutPage);
  } catch (e) {
    res.status(500).json(e);
  }
};
