import React from "react";
import topArtist from "../assets/04.png";

const TopArtist = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-black py-5 my-2 bg-[#0f12b936]">
        Top Artist of the Week
      </h1>
      <div className="p-4 flex flex-col gap-4 lg:flex-row">
        <div className="basis-1/2">
          <img src={topArtist} className="w-full rounded-lg shadow-2xl" />
        </div>
        <div className=" basis-1/2 grid content-between">
          <div>
            <h1 className="text-4xl font-bold">Artist Name: Elena Marlowe</h1>
            <div className="flex gap-4 py-4 px-2 border border-[#2900df5e] my-4">
              <p>
                <i className="fa-solid fa-earth-americas"></i>
                <span className="text-lg"> Digital Art</span>
              </p>
              <p>
                <i className="fa-brands fa-line"></i>15K
              </p>
              <p>
                <i className="fa-solid fa-comment-dots"></i>
                2.5K
              </p>
            </div>
            <p className="text-justify">
              <span className="font-semibold">About: </span>Elena Marlowe is a
              passionate visual artist who loves creating expressive and
              colorful paintings. Her work focuses on capturing everyday
              emotions through soft textures and vibrant tones. She enjoys
              experimenting with different brushes and techniques to bring her
              ideas to life. For her, art is a way to relax, explore creativity,
              and share beauty with others.
            </p>
          </div>
          <div className="flex justify-around my-5">
            <button className="btn btn-primary btn-lg text-xl w-[40%] max-w-[250px]">
              Click Here
            </button>
            <button className="btn btn-soft btn-lg w-[40%] max-w-[250px]">
              Follow Artist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtist;
