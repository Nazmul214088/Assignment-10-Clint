import React, { useState } from "react";

const Card = ({ artwork }) => {
  const { artworkTitle, artworkPhotoUrl, artistName, category } = artwork;
  const [like, setLike] = useState(0);
  const handleLikeBtn = () => {
    setLike(like + 1);
  };
  return (
    <div className="card border border-[#70000025] transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4] hover:translate-y-[-5px]">
      <figure>
        <img
          className="w-full aspect-[16/9] object-cover rounded-lg"
          src={artworkPhotoUrl}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-black">Title: {artworkTitle}</h2>
        <h2 className="text-xl font-bold">Artist Name: {artistName}</h2>
        <div className="flex justify-between py-2 my-2 border border-[#2a01e056] rounded-lg p-2">
          <h2 className="text-lg font-semibold">Category: {category}</h2>
          <div className="flex gap-2">
            <p className="text-2xl font-bold">{like}</p>
            <button onClick={handleLikeBtn} className="btn">
              <i className="fa-regular fa-thumbs-up text-2xl"></i>
            </button>
          </div>
        </div>
        <div className="card-actions justify-center">
          <button className="btn text-2xl font-semibold mt-5 w-full">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
