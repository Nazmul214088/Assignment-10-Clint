import React, { use, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import { toast } from "react-toastify";

const CardDetails = () => {
  const { setLoading, user } = use(AuthContext);
  const location = useLocation();
  const { artworkData } = location.state || {};
  const {
    _id,
    artworkPhotoUrl,
    artistName,
    artworkTitle,
    mediumTools,
    artworkDescription,
  } = artworkData;

  const [allArtworks, setAllArtworks] = useState([]); // original data

  useEffect(() => {
    fetch("http://localhost:5000/artworks")
      .then((res) => res.json())
      .then((data) => {
        setAllArtworks(data);
        setLoading(false);
      });
  }, []);
  const findData = allArtworks.filter(
    (artwork) => artwork.artistName === artistName
  );
  artworkData.myEmail = user.email;
  console.log(artworkData);
  const handleAddToFavoriteBtn = async () => {
    const res = await fetch("http://localhost:5000/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artworkData),
    });
    const result = await res.json();
    if (result.insertedId) {
      toast.success("Added to your favorite successfully!", {
        position: "top-center",
      });
    } else {
      toast.error("Error!", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="card bg-base-100 w-full px-10 shadow-sm">
      <div className="md:flex md:justify-between w-full">
        <figure className="basis-1/2">
          <img
            className="w-full rounded-xl"
            src={artworkPhotoUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body grid content-between">
          <div>
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
          <div className="text-center">
            <button
              onClick={handleAddToFavoriteBtn}
              className="btn btn-lg mt-4 text-xl w-[60%] min-w-[300px] transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]"
            >
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="text-justify">
          <span className="font-bold">Description:</span> {artworkDescription}
        </p>
        <h1 className=" text-4xl font-bold bg-[#be0d0d1f] py-4 text-center">
          Artist Info:
        </h1>
        <h2 className="text-2xl">
          <span className="font-bold">Artist Name:</span> {artistName}
        </h2>
        <h2 className="text-xl">
          Total Artworks: <span className="font-bold">{findData.length}</span>
        </h2>
      </div>
    </div>
  );
};

export default CardDetails;
