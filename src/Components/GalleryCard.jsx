import React from "react";

const GalleryCard = ({ data }) => {
  const {
    _id,
    artworkPhotoUrl,
    artistName,
    artworkTitle,
    mediumTools,
    artworkDescription,
  } = data;
  console.log(_id);
  return (
    <div className="card bg-base-100 w-full px-10 shadow-sm grid items-center">
      <div>
        <div className="w-full">
          <figure className="basis-1/2">
            <img
              className="w-full aspect-[16/9] rounded-xl"
              src={artworkPhotoUrl}
              alt="Shoes"
            />
          </figure>
          <div className="px-5 py-2">
            <h2 className="text-3xl font-bold">Title: {artworkTitle}</h2>
            <h2 className="text-2xl">
              <span className="font-semibold">Artist Name: </span> {artistName}
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">Medium/Tools:</span> <br />
              {mediumTools.map((m, index) => (
                <p key={index} className="ml-4">
                  {index + 1}. {m}
                </p>
              ))}
            </h2>
          </div>
        </div>
        <p className="text-justify px-5 pb-2">
          <span className="font-bold">Description:</span> {artworkDescription}
        </p>
      </div>
      <div className="flex justify-between mt-4 p-2">
        <button className="btn transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]">
          Edit Artwork
        </button>
        <button className="btn transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]">
          Delete Artwork
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
