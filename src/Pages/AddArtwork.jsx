import React, { use, useState } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";
import { toast } from "react-toastify";

const AddArtwork = () => {
  const { user } = use(AuthContext);
  const [visibility, setVisibility] = useState("");
  const [category, setCategory] = useState("");
  const [selectedTools, setSelectedTools] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedTools([...selectedTools, value]);
    } else {
      setSelectedTools(selectedTools.filter((tool) => tool !== value));
    }
  };

  const handleAddBtn = (e) => {
    e.preventDefault(); // prevent page reload
    const time = new Date();
    const currentTime = time.getTime();
    const form = e.target;
    const artData = {
      artistName: form.name.value,
      artistPhotoUrl: form.artistPhotoURL.value,
      email: form.email.value,
      artworkPhotoUrl: form.photoUrl.value,
      artworkTitle: form.artworkTitle.value,
      artworkDescription: form.artworkDescription.value,
      visibility: visibility,
      category: category,
      mediumTools: selectedTools,
      uploadTime: currentTime,
      totalLike: 0,
    };
    // Send data to server
    fetch("https://assignment-10-server-kappa-henna.vercel.app/artworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Artwork added successfully.", {
            position: "top-center",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="card bg-base-100 mx-auto my-8 w-full md:w-3/4 shrink-0 shadow-2xl dark:bg-[#333]">
      <div className="card-body">
        <div className="dark:bg-[#242531] py-4 rounded-sm">
          <h1 className="text-center lg:text-left text-5xl py-4 font-bold bg-linear-to-r from-[#900101] to-[#0c29bb] dark:from-[#4ca2f8] bg-clip-text text-transparent">
            Adding your artwork data
          </h1>
        </div>
        <form onSubmit={handleAddBtn}>
          <fieldset className="fieldset">
            {/* Name */}{" "}
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              defaultValue={user?.displayName}
              readOnly
            />
            {/* PhotoURL */}
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Artist PhotoURL
            </label>
            <input
              type="url"
              name="artistPhotoURL"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              defaultValue={user.photoURL}
              readOnly
            />
            {/* Email */}
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              defaultValue={user?.email}
              readOnly
            />
            {/* Artwork Photo URL */}
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Artwork Photo URL
            </label>
            <input
              type="url"
              name="photoUrl"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              placeholder="Artwork Photo URL"
              required
            />
            {/* Artwork Title */}
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Artwork Title
            </label>
            <input
              type="text"
              name="artworkTitle"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              placeholder="Artwork Title"
              required
            />
            {/* Artwork Description */}
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Artwork Description
            </label>
            <textarea
              name="artworkDescription"
              className="w-full border border-[#0000002c] rounded-lg p-3 dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              rows="5"
              placeholder="Artwork Description"
              required
            ></textarea>
            {/* Visibility */}
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Visibility
            </label>
            <select
              onChange={(e) => setVisibility(e.target.value)}
              defaultValue="Visibility"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              required
            >
              <option disabled>Visibility</option>
              <option>Public</option>
              <option>Private</option>
            </select>
            {/* Category */}
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              defaultValue="Category"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              required
            >
              <option disabled>Category</option>
              <option>Abstract expressionism</option>
              <option>Impressionism</option>
              <option>Painting</option>
              <option>Sculpture</option>
              <option>Architecture</option>
              <option>Literature</option>
            </select>
            {/* Medium / Tools */}
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Medium/Tools
            </label>
            <div className="w-full grid grid-cols-2 gap-1 ml-4">
              {[
                "Digital Tools",
                "Pencils & Charcoal",
                "Ink & Pens",
                "Painting",
                "Sculpting Materials",
                "Others",
              ].map((tool) => (
                <div key={tool} className="flex items-center gap-1">
                  <input
                    id={`${tool}`}
                    type="checkbox"
                    value={tool}
                    onChange={handleCheckboxChange}
                    className="checkbox dark:bg-white/80 dark:text-[#000dbd] font-semibold"
                  />
                  <label className="cursor-pointer" htmlFor={`${tool}`}>
                    {tool}
                  </label>
                </div>
              ))}
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Add Artwork
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddArtwork;
