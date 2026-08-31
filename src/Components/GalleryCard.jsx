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
      form.querySelectorAll('input[name="mediumTools"]:checked'),
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

    // close modal after submit
    const modal = document.getElementById(modalId);
    if (modal) modal.close();
  };

  return (
    <div className="card bg-base-100 shadow-sm grid items-center dark:bg-[#414753]">
      <div>
        <div className="w-full lg:flex">
          <figure className="basis-1/2">
            <img
              className="w-full aspect-video rounded-xl"
              src={artworkPhotoUrl}
              alt={artworkTitle}
            />
          </figure>

          <div className="px-8 py-6">
            <h2 className="lg:text-left text-4xl font-extrabold bg-linear-to-r from-[#900101] to-[#0c29bb] dark:from-[#4ca2f8] bg-clip-text text-transparent">
              {artworkTitle}
            </h2>
            <h2 className="text-2xl italic">{artistName}</h2>
            <h2 className="text-lg mt-4">
              <span className="font-semibold">Medium/Tools:</span> <br />
              {mediumTools.map((m, index) => (
                <p key={index} className="ml-4">
                  {index + 1}. {m}
                </p>
              ))}
            </h2>
          </div>
        </div>

        <p className="text-justify dark:bg-[#24345e] px-2 py-4 rounded-md">
          <span className="font-bold">Description:</span> {artworkDescription}
        </p>
      </div>

      <div className="flex justify-between mt-4 p-4">
        <button
          onClick={() => document.getElementById(modalId)?.showModal()}
          className="btn transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4] dark:text-white dark:bg-[#042591d2] border-none"
        >
          Edit Artwork
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="btn transition duration-500 hover:shadow-[0_4px_15px_#b30202] dark:text-white border-none dark:bg-[#dd0202]"
        >
          Delete Artwork
        </button>
      </div>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box dark:bg-[#303641]">
          <form onSubmit={handleUpdateSubmit}>
            <fieldset className="fieldset">
              <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
                Artwork Photo URL
              </label>
              <input
                type="url"
                name="photoUrl"
                defaultValue={artworkPhotoUrl}
                className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
                required
              />

              <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
                Artwork Title
              </label>
              <input
                type="text"
                name="artworkTitle"
                className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
                defaultValue={artworkTitle}
                required
              />

              <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
                Artwork Description
              </label>
              <textarea
                name="artworkDescription"
                className="w-full border border-[#0000002c] rounded-lg p-3 dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
                rows="5"
                defaultValue={artworkDescription}
                required
              />

              <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
                Visibility
              </label>
              <select
                name="visibility"
                className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
                defaultValue={visibility || "Public"}
                required
              >
                <option>Public</option>
                <option>Private</option>
              </select>

              <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
                Category
              </label>
              <select
                className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
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
                      name="mediumTools"
                      type="checkbox"
                      value={tool}
                      defaultChecked={mediumTools.includes(tool)}
                      className="checkbox dark:bg-white/80 dark:text-[#000dbd] font-semibold"
                    />
                    <label className="cursor-pointer" htmlFor={`${tool}`}>
                      {tool}
                    </label>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="btn btn-neutral mt-4 hover:bg-linear-to-r from-[#1B1464] to-[#5759bb83] transition duration-500 hover:shadow-[0_4px_15px_#0c17b8b4] bg-blue-600 border-none"
              >
                Update Artwork
              </button>
            </fieldset>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-red-500 text-white border-none text-xl">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GalleryCard;
