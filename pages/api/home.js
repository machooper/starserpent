import { request } from "graphql-request";

const handler = async (req, res) => {
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

export default handler;
