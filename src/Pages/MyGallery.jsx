import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import GalleryCard from "../Components/GalleryCard";
const MyGallery = () => {
  const { user } = use(AuthContext);
  const [allArtworks, setAllArtworks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/artworks")
      .then((res) => res.json())
      .then((data) => {
        setAllArtworks(data);
      });
  }, []);
  const filterData = allArtworks.filter(
    (artwork) => artwork.email === user.email
  );
  return (
    <div>
      <h1 className="text-center text-5xl font-black py-5 my-2 bg-[#0f12b936]">
        MyGallery
      </h1>
      <div>
        {filterData.length === 0 ? (
          <h2 className="text-center text-3xl font-semibold py-3 my-1 bg-[#b90f0f8c]">
            No Artwork
          </h2>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {filterData.map((data) => (
                <GalleryCard data={data} key={data._id}></GalleryCard>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyGallery;
