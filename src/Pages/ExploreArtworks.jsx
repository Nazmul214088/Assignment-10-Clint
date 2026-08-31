import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { FaSearch } from "react-icons/fa";

const ExploreArtworks = () => {
  const [allArtworks, setAllArtworks] = useState([]); // original data
  const [artworks, setArtworks] = useState([]); // filtered + searched data

  useEffect(() => {
    fetch("https://assignment-10-server-kappa-henna.vercel.app/artworks")
      .then((res) => res.json())
      .then((data) => {
        setAllArtworks(data);
        setArtworks(data);
      });
  }, []);

  const handleSearchBtn = (e) => {
    const searchValue = e.target.value.toLowerCase();

    const filtered = allArtworks.filter(
      (artwork) =>
        artwork.visibility === "Public" &&
        artwork.artworkTitle.toLowerCase().includes(searchValue),
    );

    setArtworks(filtered);
  };
  // console.log(allArtworks);
  return (
    <div>
      <div className="dark:bg-[#333] py-4 rounded-sm mt-4">
        <h1 className="text-6xl text-center font-bold bg-linear-to-r from-[#900101] to-[#00188e] dark:from-[#3a9dff] bg-clip-text text-transparent">
          Explore Artworks:
        </h1>
      </div>
      <label className="input w-[calc(100%-80px)] mx-10 my-5 dark:bg-[#2d3447]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#adbdd6] ">
        <FaSearch />

        <input
          onChange={handleSearchBtn}
          className="input w-full dark:bg-[#2d3447]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#a0bdec]"
          type="search"
          required
          placeholder="Search"
        />
      </label>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-10">
        {artworks
          .filter((art) => art.visibility === "Public")
          .map((art) => (
            <Card key={art._id} artwork={art} />
          ))}
      </div>
    </div>
  );
};

export default ExploreArtworks;
