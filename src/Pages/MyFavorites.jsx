import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import FavoriteData from "../Components/FavoriteData";

const MyFavorites = () => {
  const { user } = use(AuthContext);
  const [myFavoritesArts, setMyFavoritesArts] = useState([]);

  useEffect(() => {
    // Fetches artworks sorted from newest to oldest
    if(!user) return;
    fetch("http://localhost:5000/favorite")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((d) => d.myEmail === user.email);
        setMyFavoritesArts(filterData);
      });
  }, [user]);

  // Remove function
  const handleRemoveFavorite = (id) => {
    setMyFavoritesArts(myFavoritesArts.filter((item) => item._id !== id));
  };
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-5xl font-black py-5 my-2 bg-[#0f12b936]">
        MyFavorites
      </h1>
      <div>
        {myFavoritesArts.map((art) => (
          <FavoriteData
            art={art}
            key={art._id}
            onRemove={handleRemoveFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
