import { request } from "graphql-request";

export default async (req, res) => {
  try {
    const servicesPage = await request(
      "https://xrddhs1w.api.sanity.io/v1/graphql/production/default",
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
