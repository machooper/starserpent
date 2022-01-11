import { request } from "graphql-request";

const handler = async (req, res) => {
  try {
    const servicesPage = await request(
      process.env.GRAPHQL_URL,
      `{
  ServicesPage(id:"servicesPage") {
    list
    contentRaw
  }
}`
    );
    res.status(200).json(servicesPage.ServicesPage);
  } catch (e) {
    res.status(500).json(e);
  }
};

export default handler;
