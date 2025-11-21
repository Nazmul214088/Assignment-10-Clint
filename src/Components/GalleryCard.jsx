import React from "react";
import { toast } from "react-toastify";

const GalleryCard = ({ data }) => {
  const {
    _id,
    artworkPhotoUrl,
    artistName,
    artworkTitle,
    mediumTools,
    artworkDescription,
  } = data;

  const handleDeleteBtn = (id) => {
    fetch(`http://localhost:5000/artworks/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        toast.success("Deletion complete!", {
          position: "top-center",
        });
        window.location.reload();
        return res.json();
      })
      .then((data) => {
        console.log("Server response data:", data);
      })
      .catch((error) => {
        console.error("Error during delete operation:", error);
        toast.error("An error occurred during deletion.");
      });
  };

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
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]"
        >
          Edit Artwork
        </button>
        <button
          onClick={() => handleDeleteBtn(_id)}
          className="btn transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]"
        >
          Delete Artwork
        </button>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form>
            <fieldset className="fieldset">
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
                // onChange={(e) => setVisibility(e.target.value)}
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
                // onChange={(e) => setCategory(e.target.value)}
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
                      // onChange={handleCheckboxChange}
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
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GalleryCard;
