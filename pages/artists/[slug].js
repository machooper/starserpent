import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "comps/layout";
import { siteSettingsQuery, allArtistSlugs, artistBySlug } from "lib/queries";

function ReleaseCard({ name, artwork, url }) {
  return (
    <div key={url}>
      <Link href={url}>
        <a className="box">
          <Image
            src={artwork.asset.url}
            alt={artwork.asset.altText}
            width={200}
            height={200}
          />
        </a>
      </Link>
    </div>
  );
}

export default function Artist({ siteSettings, artist }) {
  return (
    <Layout title={artist.name} siteSettings={siteSettings}>
      <Head>
        <title>{artist.name}</title>
      </Head>
      <div className="container">
        <h1>{artist.name}</h1>
        <Image
          src={artist.coverImage.asset.url}
          alt={artist.coverImage.asset.altText}
          width={340}
          height={340}
        />
        <div className="prose">
          {artist.biographyRaw.map((child, i) => {
            return <p key={i}>{child.children[0].text}</p>;
          })}
        </div>
        <h2>Releases</h2>
        <div className="card-grid">
          {artist.releases.map((release) => (
            <ReleaseCard key={release.id} {...release} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const siteSettings = await siteSettingsQuery();
  const artist = await artistBySlug(params.slug);

  return {
    props: {
      siteSettings,
      artist,
    },
  };
}

export async function getStaticPaths() {
  const artists = await allArtistSlugs();

  return {
    paths: artists.map((artist) => {
      return {
        params: {
          slug: artist.slug.current,
        },
      };
    }),
    fallback: false,
  };
}
