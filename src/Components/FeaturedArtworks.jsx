import React, { useEffect, useState } from "react";
import Card from "./Card";

const FeaturedArtworks = () => {
  const [allArtworks, setAllArtworks] = useState([]); // original data
  useEffect(() => {
    // Fetches artworks sorted from newest to oldest
    fetch("https://artify-server-site-six.vercel.app/artworks/recent")
      .then((res) => res.json())
      .then((data) => setAllArtworks(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl font-black py-5 my-5 bg-[#0f12b936]">
        Featured Artworks
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-10">
        {allArtworks.map((artwork) => (
          <Card key={artwork._id} artwork={artwork}></Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtworks;
