import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const ExploreArtworks = () => {
  const [allArtworks, setAllArtworks] = useState([]); // original data
  const [artworks, setArtworks] = useState([]); // filtered + searched data

  useEffect(() => {
    fetch("http://localhost:5000/artworks")
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
        artwork.artworkTitle.toLowerCase().includes(searchValue)
    );

    setArtworks(filtered);
  };
  // console.log(allArtworks);
  return (
    <div>
      <h1 className="text-center text-5xl font-black py-5 my-2 bg-[#0f12b936]">
        Explore Artworks:
      </h1>

      <label className="input w-[calc(100%-80px)] mx-10 my-5">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>

        <input
          onChange={handleSearchBtn}
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
