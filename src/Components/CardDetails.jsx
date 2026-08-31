import React, { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "./AuthContext/AuthContext";
import { toast } from "react-toastify";

const CardDetails = () => {
  const { setLoading, user } = useContext(AuthContext);
  const location = useLocation();
  const { artworkData } = location.state || {};
  const artworkId = useMemo(() => artworkData?._id, [artworkData?._id]);

  const [artwork, setArtwork] = useState(artworkData || null);
  const [like, setLike] = useState(Number(artworkData?.totalLike ?? 0));

  const [totalWork, setTotalWork] = useState(0);
  useEffect(() => {
    fetch("https://assignment-10-server-kappa-henna.vercel.app/artworks")
      .then((res) => res.json())
      .then((data) => {
        const userEmail = artwork.email;
        const filterData = data.filter((d) => d.email === userEmail);
        setTotalWork(filterData.length);
      });
  }, [artwork.email]);

  useEffect(() => {
    if (!artworkId) return;

    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://assignment-10-server-kappa-henna.vercel.app/artworks/${artworkId}`,
          {
            signal: controller.signal,
          },
        );

        if (!res.ok) {
          setArtwork(artworkData || null);
          setLike(Number(artworkData?.totalLike ?? 0));
          return;
        }

        const data = await res.json();
        setArtwork(data);
        setLike(Number(data?.totalLike ?? 0));
      } catch (err) {
        console.log(err.message);
        setArtwork(artworkData || null);
        setLike(Number(artworkData?.totalLike ?? 0));
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [artworkId, artworkData, setLoading]);

  if (!artwork) return <div className="p-6">No artwork data found.</div>;

  const {
    _id,
    artworkPhotoUrl,
    artistPhotoUrl,
    artistName,
    artworkTitle,
    mediumTools = [],
    artworkDescription,
  } = artwork;
  const handleAddToFavoriteBtn = async () => {
    try {
      const payload = { ...artwork, myEmail: user?.email };

      const res = await fetch(
        `https://assignment-10-server-kappa-henna.vercel.app/favorite/${user.email}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const result = await res.json();
      if (result.insertedId) {
        toast.success("Added to your favorite successfully!", {
          position: "top-center",
        });
      } else if (result.alreadyAdded) {
        toast.info("You are already added to favorite", {
          position: "top-center",
        });
      } else {
        toast.error("Error!", { position: "top-center" });
      }
    } catch {
      toast.error("Error!", { position: "top-center" });
    }
  };

  const handleLikeBtn = async () => {
    const prev = like;
    setLike(prev + 1);

    try {
      const res = await fetch(
        `https://assignment-10-server-kappa-henna.vercel.app/artworks/${_id}/like`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userEmail: user.email }),
        },
      );

      const data = await res.json();

      if (res.status === 409) {
        // already liked -> show server count
        setLike(Number(data?.totalLike ?? prev));
        toast.info("You have already liked!", { position: "top-center" });
        return;
      }

      if (!data?.modifiedCount) {
        setLike(prev);
        toast.error("Like not update", { position: "top-center" });
        return;
      }

      setLike(Number(data?.totalLike ?? prev + 1));
      toast.success("Like Successfully!", { position: "top-center" });
    } catch {
      setLike(prev);
      toast.error("Server error!", { position: "top-center" });
    }
  };

  return (
    <div className="card bg-base-100 w-full mt-6 px-10 shadow-sm dark:bg-[#141d38]">
      <div className="md:flex md:justify-between w-full my-4 rounded-lg dark:bg-[#24345e]">
        <figure className="basis-1/2">
          <img className="w-full rounded-xl" src={artworkPhotoUrl} alt="art" />
        </figure>

        <div className="card-body grid content-between ">
          <div>
            <h2 className=" text-4xl font-black bg-linear-to-r from-[#900101] to-[#00188e] dark:from-[#3a9dff] bg-clip-text text-transparent">
              {artworkTitle}
            </h2>
            <h2 className="text-xl italic mb-6">{artistName}</h2>

            <h2 className="text-lg">
              <span className="font-semibold">Medium/Tools:</span> <br />
              {mediumTools.map((m, index) => (
                <p key={index} className="ml-4">
                  {index + 1}. {m}
                </p>
              ))}
            </h2>
          </div>

          <div className="text-center flex justify-between">
            <button
              onClick={handleAddToFavoriteBtn}
              className="btn btn-lg mt-4 text-xl dark:text-white dark:bg-[#004688] transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4] border-none"
            >
              Add to Favorite
            </button>

            <div className="flex items-center gap-2">
              <span className="mt-4 text-xl">{like}</span>
              <button
                className="btn btn-lg mt-4 text-xl transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4] dark:text-white dark:bg-[#15008b] border-none"
                onClick={handleLikeBtn}
              >
                Like
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-justify dark:bg-[#24345e] px-2 py-4 rounded-md">
          <span className="font-bold">Description:</span> {artworkDescription}
        </p>
        <div className="dark:bg-[#24345e] mt-4">
          <h1 className="text-4xl font-extrabold bg-[#be0d0d1f] py-4 text-center  bg-linear-to-r from-[#900101] to-[#00188e] dark:from-[#3a9dff] bg-clip-text text-transparent">
            Artist Info:
          </h1>
        </div>
        <div className="sm:flex items-center justify-around gap-6 mt-4">
          <div>
            <h2 className="text-2xl">
              <span className="font-bold">Name:</span> {artistName}
            </h2>
            <p className=" text-xl my-2">
              <span className="font-semibold">Total work:</span> {totalWork}
            </p>
          </div>
          <img
            className="h-25 rounded-md my-2 border-2 border-[#73040460]"
            src={artistPhotoUrl}
            alt="ArtistPhoto"
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
