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
    fetch("https://artify-server-site-navy.vercel.app/artworks", {
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
    <div className="card bg-base-100 mx-auto my-8 w-full max-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-center lg:text-left text-5xl font-semibold py-4">
          Adding your artwork data.
        </h1>
        <form onSubmit={handleAddBtn}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              defaultValue={user?.displayName}
              readOnly
            />

            {/* PhotoURL */}
            <label className="label">Artist PhotoURL</label>
            <input
              type="url"
              name="artistPhotoURL"
              className="input w-full"
              defaultValue={user.photoURL}
              readOnly
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              defaultValue={user?.email}
              readOnly
            />

            {/* Artwork Photo URL */}
            <label className="label">Artwork Photo URL</label>
            <input
              type="url"
              name="photoUrl"
              className="input w-full"
              placeholder="Artwork Photo URL"
              required
            />

            {/* Artwork Title */}
            <label className="label">Artwork Title</label>
            <input
              type="text"
              name="artworkTitle"
              className="input w-full"
              placeholder="Artwork Title"
              required
            />

            {/* Artwork Description */}
            <label className="label">Artwork Description</label>
            <textarea
              name="artworkDescription"
              className="textarea w-full"
              rows="5"
              placeholder="Artwork Description"
              required
            ></textarea>

            {/* Visibility */}
            <label className="label">Visibility</label>
            <select
              onChange={(e) => setVisibility(e.target.value)}
              defaultValue="Visibility"
              className="select select-md w-full"
              required
            >
              <option disabled>Visibility</option>
              <option>Public</option>
              <option>Private</option>
            </select>

            {/* Category */}
            <label className="label">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              defaultValue="Category"
              className="select select-md w-full"
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
            <label className="label">Medium/Tools</label>
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
                    type="checkbox"
                    value={tool}
                    onChange={handleCheckboxChange}
                    className="checkbox"
                  />
                  <label>{tool}</label>
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
