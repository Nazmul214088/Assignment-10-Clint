import React, { useEffect, useState } from "react";
import Card from "./Card";

const FeaturedArtworks = () => {
  const [allArtworks, setAllArtworks] = useState([]); // original data
  useEffect(() => {
    // Fetches artworks sorted from newest to oldest
    fetch("http://localhost:3000/artworks/recent")
      .then((res) => res.json())
      .then((data) => setAllArtworks(data));
  }, []);
  return (
    <div>
      <div className="dark:bg-[#333] py-4 rounded-sm">
        <h1 className="text-6xl text-center font-bold bg-linear-to-r from-[#900101] to-[#00188e] dark:from-[#3a9dff] bg-clip-text text-transparent">
          Featured Artworks
        </h1>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-10 my-4">
        {allArtworks.map((artwork) => (
          <Card key={artwork._id} artwork={artwork}></Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtworks;
