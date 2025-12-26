import React from "react";

const FavoriteData = ({ art, onDelete }) => {
  const { _id, artworkPhotoUrl, artistName, artworkTitle } = art;

  return (
    <div className="border rounded-lg p-4 sm:flex justify-around gap-4 w-full mx- ">
      <figure className="basis-1/2">
        <img
          className="w-full aspect-video object-cover rounded-lg"
          src={artworkPhotoUrl}
          alt=""
        />
      </figure>
      <div className="grid content-between basis-1/2">
        <h1 className="text-2xl font-bold">Title: {artworkTitle} </h1>
        <h4>Artist Name: {artistName}</h4>

        <div className="text-center">
          <button
            className="btn mt-4 text-xl  font-semibold transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]"
            onClick={() => onDelete(_id)}
          >
            Remove Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteData;
