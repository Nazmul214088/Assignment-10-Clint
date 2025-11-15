import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import GalleryCard from "../Components/GalleryCard";
const MyGallery = () => {
  const { user } = use(AuthContext);
  const [allArtworks, setAllArtworks] = useState([]);
  console.log(user.email);
  useEffect(() => {
    fetch("http://localhost:5000/artworks")
      .then((res) => res.json())
      .then((data) => {
        setAllArtworks(data);
      });
  }, []);
  console.log(allArtworks);
  const filterData = allArtworks.filter(
    (artwork) => artwork.email === user.email
  );
  console.log(filterData);
  return (
    <div>
      <h1>MyGallery</h1>
      <div>
        {filterData.length === 0 ? (
          <h2>no artwork</h2>
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
