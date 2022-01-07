export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image'
    },
    {
      name: 'logoDark',
      title: 'Site Logo Dark',
      type: 'image'
    },
    {
      name: 'icon',
      title: 'Site Icon',
      type: 'image'
    },
    {
      name: 'twitter',
      title: 'Twitter Username',
      type: 'string'
    },
    {
      name: 'facebook',
      title: 'Facebook Username',
      type: 'string'
    },
    {
      name: 'instagram',
      title: 'Instagram Username',
      type: 'string'
    },
    {
      name: 'soundcloud',
      title: 'Soundcloud Username',
      type: 'string'
    },
    {
      name: 'youtube',
      title: 'Youtube Username',
      type: 'string'
    }
  ]
}

export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string'
    }
  ]
}

export const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}

export const servicesPage = {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'list',
      title: 'List',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      validation: Rule => Rule.required().min(2).max(6)
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}

export const artist = {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      description: 'This image displays on the artist page',
      type: 'image'
    },
    {
      name: 'displayImage',
      title: 'Display Image',
      description: 'This image displays on the all artists page',
      type: 'image'
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'releases',
      title: 'Releases',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'release'
            }
          ]
        }
      ]
    }
  ]
}

export const release = {
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'artwork',
      title: 'Artwork',
      type: 'image'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [
        {
          type: 'artist'
        }
      ]
    }
  ]
}
