import React from "react";
import { toast } from "react-toastify";

const FavoriteData = ({ art, onRemove }) => {
  const { _id, artworkPhotoUrl, artistName, artworkTitle } = art;
  const handleRemoveBtn = async () => {
    const res = await fetch(`http://localhost:5000/favorite/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      toast.success("Removed from favorites!", { position: "top-center" });
      onRemove(_id);
    } else {
      toast.error("Failed to remove!", { position: "top-center" });
    }
  };
  return (
    <div className="sm:flex gap-4 border my-6 rounded-xl p-4">
      <figure className="basis-1/3">
        <img className="rounded-xl w-full" src={artworkPhotoUrl} alt="" />
      </figure>
      <div className="grid content-between">
        <h1 className="text-3xl font-bold">Title: {artworkTitle} </h1>
        <h4>Artist Name: {artistName}</h4>
        <div className="text-center">
          <button
            className="btn mt-4 text-xl w-[60%] min-w-[250px] transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]"
            onClick={handleRemoveBtn}
          >
            Remove Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteData;
