import React from "react";

const GalleryCard = ({ data, onUpdate, onDelete }) => {
  const {
    _id,
    artworkPhotoUrl,
    artistName,
    artworkTitle,
    mediumTools = [],
    artworkDescription,
    visibility,
    category,
  } = data;

  const modalId = `edit_modal_${_id}`;

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const checkedTools = Array.from(
      form.querySelectorAll('input[name="mediumTools"]:checked')
    ).map((el) => el.value);

    const updatedData = {
      artworkPhotoUrl: form.photoUrl.value,
      artworkTitle: form.artworkTitle.value,
      artworkDescription: form.artworkDescription.value,
      visibility: form.visibility.value,
      category: form.category.value,
      mediumTools: checkedTools,
    };

    onUpdate(_id, updatedData);

    // ✅ close modal after submit
    const modal = document.getElementById(modalId);
    if (modal) modal.close();
  };

  return (
    <div className="card bg-base-100 w-full px-10 shadow-sm grid items-center">
      <div>
        <div className="w-full lg:flex">
          <figure className="basis-1/2">
            <img
              className="w-full aspect-video rounded-xl"
              src={artworkPhotoUrl}
              alt={artworkTitle}
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
          onClick={() => document.getElementById(modalId)?.showModal()}
          className="btn transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]"
        >
          Edit Artwork
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="btn transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]"
        >
          Delete Artwork
        </button>
      </div>

      {/* ✅ unique modal id per card */}
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleUpdateSubmit}>
            <fieldset className="fieldset">
              <label className="label">Artwork Photo URL</label>
              <input
                type="url"
                name="photoUrl"
                defaultValue={artworkPhotoUrl}
                className="input w-full"
                required
              />

              <label className="label">Artwork Title</label>
              <input
                type="text"
                name="artworkTitle"
                className="input w-full"
                defaultValue={artworkTitle}
                required
              />

              <label className="label">Artwork Description</label>
              <textarea
                name="artworkDescription"
                className="textarea w-full"
                rows="5"
                defaultValue={artworkDescription}
                required
              />

              <label className="label">Visibility</label>
              <select
                name="visibility"
                className="select select-md w-full"
                defaultValue={visibility || "Public"}
                required
              >
                <option>Public</option>
                <option>Private</option>
              </select>

              <label className="label">Category</label>
              <select
                className="select select-md w-full"
                name="category"
                defaultValue={category || "Painting"}
                required
              >
                <option>Abstract expressionism</option>
                <option>Impressionism</option>
                <option>Painting</option>
                <option>Sculpture</option>
                <option>Architecture</option>
                <option>Literature</option>
              </select>

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
                      name="mediumTools"
                      type="checkbox"
                      value={tool}
                      defaultChecked={mediumTools.includes(tool)}
                      className="checkbox"
                    />
                    <label>{tool}</label>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="btn btn-neutral mt-4 hover:bg-linear-to-r from-[#1B1464] to-[#5759bb83] transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4]"
              >
                Update Artwork
              </button>
            </fieldset>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GalleryCard;
