import Layout from "comps/layout";
import Link from "next/link";
import Image from "next/image";
import { siteSettingsQuery, allArtistsQuery } from "lib/queries";

function ArtistCard({ name, displayImage, slug }) {
  return (
    <Link href={`/artists/${slug.current}`} passHref>
      <a className="card">
        <Image
          src={displayImage.asset.url}
          alt={displayImage.asset.altText}
          width={300}
          height={500}
        />
      </a>
    </Link>
  );
}

export default function Artists({ siteSettings, artists }) {
  return (
    <Layout title="Releases" siteSettings={siteSettings}>
      <div className="container">
        <h1>Releases</h1>
        <div className="card-grid">
          {artists.map((artist) => (
            <ArtistCard key={artist.slug.current} {...artist} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const siteSettings = await siteSettingsQuery();
  const artists = await allArtistsQuery();

  return {
    props: {
      siteSettings,
      artists,
    },
  };
}
