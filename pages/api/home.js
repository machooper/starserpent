import { request } from "graphql-request";

export default async (req, res) => {
  try {
    const homePage = await request(
      process.env.GRAPHQL_URL,
      `{
        HomePage(id: "homePage") {
          heading
          subheading
        }
      }`
    );
    res.status(200).json(homePage.HomePage);
  } catch (e) {
    res.status(500).json(e);
  }
};
