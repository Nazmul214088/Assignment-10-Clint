import React from "react";
import { Link } from "react-router";

const Card = ({ artwork }) => {
  const { _id, artworkTitle, artworkPhotoUrl, artistName, category } = artwork;

  return (
    <div className="card border border-[#70000025] transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4] hover:translate-y-[-5px]">
      <figure>
        <img
          className="w-full aspect-video object-cover rounded-lg"
          src={artworkPhotoUrl}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-black">Title: {artworkTitle}</h2>
        <h2 className="text-xl font-bold">Artist Name: {artistName}</h2>
        <div className="flex justify-between py-2 my-2 border border-[#2a01e056] rounded-lg p-2">
          <h2 className="text-lg font-semibold">Category: {category}</h2>
        </div>
        <div className="card-actions justify-center">
          <Link
            to={`/AddArtwork/${artwork._id}`}
            state={{ artworkData: artwork }}
            className="btn text-2xl font-semibold mt-5 w-full"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
