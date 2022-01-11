import { fetcher } from "lib/fetch";
import Layout from "comps/layout";
import Link from "next/link";
import Image from "next/image";

function ArtistCard({ name, displayImage, slug }) {
  return (
    <Link href={`/artists/${slug.current}`}>
      <div className="card">
        <Image
          src={displayImage.asset.url}
          alt={displayImage.asset.altText}
          width={300}
          height={500}
        />
      </div>
    </Link>
  );
}

export default function Artists({ siteSettings, artists }) {
  return (
    <Layout title="Artists" siteSettings={siteSettings}>
      <div className="container">
        <h1>Artists</h1>
        <div className="card-grid">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const siteSettings = await fetcher("http://localhost:3000/api/settings");
  const artists = await fetcher("http://localhost:3000/api/artists");

  return {
    props: {
      siteSettings,
      artists,
    },
  };
}
