import S from '@sanity/desk-tool/structure-builder'
import {AiOutlineHome} from 'react-icons/ai'
import {BsVinylFill} from 'react-icons/bs'
import {GoSettings} from 'react-icons/go'
import {MdMusicNote} from 'react-icons/md'
import {RiFolderMusicLine, RiPagesLine} from 'react-icons/ri'

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .icon(GoSettings)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Pages')
        .icon(RiPagesLine)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(AiOutlineHome)
                .child(
                  S.document().schemaType('homePage').documentId('homePage')
                ),
              S.listItem()
                .title('About')
                .icon(RiPagesLine)
                .child(
                  S.document().schemaType('aboutPage').documentId('aboutPage')
                )
            ])
        ),
      S.listItem()
        .title('Content')
        .icon(BsVinylFill)
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Artists')
                .icon(MdMusicNote)
                .child(S.documentTypeList('artist').title('Artists').child()),
              S.listItem()
                .title('Releases')
                .icon(RiFolderMusicLine)
                .child(S.documentTypeList('release').title('Releases').child())
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'siteSettings',
            'media.tag',
            'homePage',
            'aboutPage',
            'artist',
            'release'
          ].includes(listItem.getId())
      )
    ])
