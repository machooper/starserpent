import NextHead from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

function Head({
  url = 'https://link.com',
  site = 'Site',
  title = 'Page',
  locale = 'en_GB',
  description = 'An awesome description',
  keywords = 'Website, Next.js, Web Development'
}) {
  return (
    <NextHead>
      <title>
        {title} | {site}
      </title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.svg' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={site} />
      <meta name='copyright' content={site} />
      <meta property='og:title' content={`${title} | ${site}`} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/og.jpg' />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={site} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content={locale} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@site' />
      <meta name='twitter:title' content={`${title} | ${site}`} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='/og.jpg' />
      <meta name='twitter:url' content={url} />
    </NextHead>
  )
}
function Logo({site}) {
  return (
    <>
      {site ? (
        <h1>{site}</h1>
      ) : (
        <Image src='/logo.svg' alt='Logo' layout='responsive' />
      )}
    </>
  )
}

export function MenuButton({open, click}) {
  return (
    <svg
      onClick={() => click(!open)}
      viewBox='0 0 100 80'
      width='40'
      height='40'>
      <rect y='25' width='70' height='5'></rect>
      <rect y='50' width='70' height='5'></rect>
    </svg>
  )
}

export function Menu({open, click}) {
  const navigation = ['Home,', 'About', 'Contact']
  return (
    <nav>
      <ul>
        {navigation.map(item => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`}>
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Header({site}) {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <header>
      <Logo site={site} />
      <MenuButton open={menuVisible} click={setMenuVisible} />
      {menuVisible && <Menu open={menuVisible} click={setMenuVisible} />}
    </header>
  )
}

function Footer({site}) {
  return (
    <footer>
      <p>
        &copy; <Link href='#'>{site}</Link> {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default function Layout({children, title, description, keywords}) {
  const site = 'Site'
  return (
    <>
      <Head
        site={site}
        title={title}
        description={description}
        keywords={keywords}
      />
      <Header site={site} />
      <main>{children}</main>
      <Footer site={site} />
    </>
  )
}
