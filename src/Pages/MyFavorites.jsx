import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import FavoriteData from "../Components/FavoriteData";
import { toast } from "react-toastify";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [myFavoritesArts, setMyFavoritesArts] = useState([]);

  useEffect(() => {
    // Fetches artworks sorted from newest to oldest
    if (!user) return;
    fetch("https://assignment-10-server-kappa-henna.vercel.app/favorite")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((d) => d.myEmail === user.email);
        setMyFavoritesArts(filterData);
      });
  }, [user]);

  // Delete favorites
  const handleDelete = (id) => {
    fetch(
      `https://assignment-10-server-kappa-henna.vercel.app/favorite/${id}`,
      {
        method: "DELETE",
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Deleted successfully!", { position: "top-center" });
          setMyFavoritesArts((prev) => prev.filter((art) => art._id !== id));
        } else {
          toast.error(data.message || "Deletion failed", {
            position: "top-center",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Server error", { position: "top-center" });
      });
  };
  return (
    <div className="w-[90%] mx-auto">
      <div className="dark:bg-[#1d264d] my-4 rounded-sm mt-4">
        <h1 className="text-6xl text-center font-bold bg-linear-to-r pb-8 py-4 from-[#900101] to-[#00188e] dark:from-[#3a9dff] bg-clip-text text-transparent">
          MyFavorites
        </h1>
      </div>
      {myFavoritesArts.length === 0 ? (
        <h2 className="text-center text-3xl font-semibold py-3 my-1 bg-[#b90f0f8c]">
          You haven’t added any favorites.
        </h2>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {myFavoritesArts.map((art) => (
            <FavoriteData art={art} key={art._id} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
