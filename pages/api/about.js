import {request} from 'graphql-request'

export default async (req, res) => {
  try {
    const aboutPage = await request(
      'https://xrddhs1w.api.sanity.io/v1/graphql/production/default',
      `{
        AboutPage(id: "aboutPage") {
          coverImage {
            asset {
              url
            }
          }
          heading
          contentRaw
        }
      }`
    )
    res.status(200).json(aboutPage.AboutPage)
  } catch (e) {
    res.status(500).json(e)
  }
}
