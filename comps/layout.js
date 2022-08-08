import NextHead from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Head({ title, siteSettings }) {
  const url = "https://starserpentrecords.com";

  return (
    <NextHead>
      <title>
        {title} | {siteSettings.title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href={siteSettings.icon.asset.url} />
      <meta name="description" content={siteSettings.description} />
      <meta name="keywords" content={siteSettings.keywords} />
      <meta name="author" content={siteSettings.title} />
      <meta name="copyright" content={siteSettings.title} />
      <meta property="og:title" content={`${title} | ${siteSettings.title}`} />
      <meta property="og:description" content={siteSettings.description} />
      <meta property="og:image" content={siteSettings.metaImage.asset.url} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteSettings.title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@starserpentrecords" />
      <meta name="twitter:title" content={`${title} | ${siteSettings.title}`} />
      <meta name="twitter:description" content={siteSettings.description} />
      <meta name="twitter:image" content={siteSettings.metaImage.asset.url} />
      <meta name="twitter:url" content={url} />
    </NextHead>
  );
}

function Logo({ logo, logoDark }) {
  return (
    <>
      <Link href="/">
        <a>
          <Image src={logo} alt="Logo" width={116} height={93} />
        </a>
      </Link>
    </>
  );
}

export function MenuButton({ open, click }) {
  return (
    <button
      aria-label="Menu Button"
      className="btn-no-styles"
      onClick={() => click(!open)}
    >
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect y="25" x="25" width="110" height="5"></rect>
        <rect y="50" x="25" width="110" height="5"></rect>
      </svg>
    </button>
  );
}

export function Menu({ open, click }) {
  const navigation = ["Home", "About", "Releases", "Services", "Contact"];
  const router = useRouter();
  const active = router.asPath;
  return (
    <nav>
      <span id="close" onClick={() => click(!open)}>
        &times;
      </span>
      <ul>
        {navigation.map((item) => (
          <li key={item}>
            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              <a className={active === item && "active"}>{item}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        nav {
          transform: translateX(${open ? "0" : "130%"});
        }
      `}</style>
    </nav>
  );
}

function Header({ logo, logoDark, menuVisible, setMenuVisible }) {
  return (
    <header>
      <Logo logo={logo.asset.url} logoDark={logoDark.asset.url} />
      <MenuButton open={menuVisible} click={setMenuVisible} />
      <Menu open={menuVisible} click={setMenuVisible} />
    </header>
  );
}

function Footer({ site }) {
  return (
    <footer>
      <p>
        &copy; <Link href="https://starserpentrecords.com">{site}</Link>{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default function Layout({ children, title, description, siteSettings }) {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>
      <Head
        title={title}
        description={description}
        siteSettings={siteSettings}
      />
      <Header
        logo={siteSettings.logo}
        logoDark={siteSettings.logoDark}
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <main>{children}</main>
      <Footer site={siteSettings.title} />
      <style jsx>{`
        main {
          opacity: ${menuVisible ? "0.3" : "1"};
        }
      `}</style>
    </>
  );
}
