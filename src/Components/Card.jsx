import React from "react";
import { Link } from "react-router";

const Card = ({ artwork }) => {
  const { _id, artworkTitle, artworkPhotoUrl, artistName, category } = artwork;

  return (
    <div className="card border border-[#70000025] dark:bg-[#141d38] transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4] hover:translate-y-[-5px]">
      <figure>
        <img
          className="w-full aspect-video object-cover rounded-lg"
          src={artworkPhotoUrl}
        />
      </figure>
      <div className="card-body">
        <h2
          className=" md:text-4xl font-black text-lg bg-linear-to-r from-[#900101] to-[#00188e] dark:from-[#3a9dff] bg-clip-text text-transparent"
          to={"/"}
        >
          {artworkTitle}
        </h2>
        <h2 className="text-xl -mt-2 italic">{artistName}</h2>
        <div className="flex justify-between py-2 my-2 border border-[#2a01e056] dark:border-[#568ee4ab] rounded-lg p-2">
          <h2 className="text-xl font-bold md:text-2xl">{category}</h2>
        </div>
        <div className="card-actions justify-center">
          <Link
            to={`/AddArtwork/${artwork._id}`}
            state={{ artworkData: artwork }}
            className="btn text-2xl font-semibold mt-5 w-full border-none py-6 text-white bg-[#2093e0]  transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4] hover:translate-y-[-5px]"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
