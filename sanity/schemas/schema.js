import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import {aboutPage, artist, homePage, release, siteSettings} from './types'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    siteSettings,
    aboutPage,
    homePage,
    artist,
    release
  ])
})
