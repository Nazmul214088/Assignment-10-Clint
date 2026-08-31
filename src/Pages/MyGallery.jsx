import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import GalleryCard from "../Components/GalleryCard";
import { toast } from "react-toastify";

const MyGallery = () => {
  const { user } = useContext(AuthContext);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all artworks
  useEffect(() => {
    setLoading(true);
    fetch("https://assignment-10-server-kappa-henna.vercel.app/artworks")
      .then((res) => res.json())
      .then((data) => setArtworks(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // user may be null initially
  const userEmail = user?.email;

  const userArtworks = userEmail
    ? artworks.filter((art) => art.email === userEmail)
    : [];

  // Delete artwork
  const handleDelete = (id) => {
    fetch(
      `https://assignment-10-server-kappa-henna.vercel.app/artworks/${id}`,
      {
        method: "DELETE",
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Deleted successfully!", { position: "top-center" });
          setArtworks((prev) => prev.filter((art) => art._id !== id));
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

  // Update artwork
  const handleUpdate = (id, updatedData) => {
    fetch(
      `https://assignment-10-server-kappa-henna.vercel.app/artworks/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      },
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          toast.success("Artwork updated successfully!", {
            position: "top-center",
          });

          setArtworks((prev) =>
            prev.map((art) =>
              art._id === id ? { ...art, ...updatedData } : art,
            ),
          );
        } else {
          toast.info("No changes made", { position: "top-center" });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Update failed", { position: "top-center" });
      });
  };

  if (!userEmail) {
    return (
      <div className="p-6">
        <h2 className="text-center text-2xl font-semibold">
          Please login to see your gallery
        </h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6 text-center">
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }

  return (
    <div className="dark:bg-[#3c3d4d]">
      <div className="dark:bg-[#242531] py-4 rounded-sm flex justify-center">
        <h1 className="text-center lg:text-left text-5xl py-4 font-bold bg-linear-to-r from-[#900101] to-[#0c29bb] dark:from-[#4ca2f8] bg-clip-text text-transparent">
          MyGallery
        </h1>
      </div>

      {userArtworks.length === 0 ? (
        <h2 className="text-center text-3xl font-semibold py-3 my-1 bg-[#b90f0f8c]">
          You don’t have any artwork.
        </h2>
      ) : (
        <div className="grid lg:grid-cols-2 gap-4 px-[2%]">
          {userArtworks.map((data) => (
            <GalleryCard
              key={data._id}
              data={data}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGallery;
