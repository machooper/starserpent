import {request} from 'graphql-request'

export default async (req, res) => {
  try {
    const homePage = await request(
      'https://xrddhs1w.api.sanity.io/v1/graphql/production/default',
      `{
        HomePage(id: "homePage") {
          heading
          subheading
        }
      }`
    )
    res.status(200).json(homePage.HomePage)
  } catch (e) {
    res.status(500).json(e)
  }
}
