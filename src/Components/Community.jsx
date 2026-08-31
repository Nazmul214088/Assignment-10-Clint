import React from "react";

const Community = () => {
  return (
    <div className="mx-8">
      <div>
        <div className="dark:bg-[#333] py-4 rounded-sm">
          <h1 className="text-6xl text-center font-bold bg-linear-to-r from-[#900101] to-[#00188e] dark:from-[#3a9dff] bg-clip-text text-transparent">
            Ours Community
          </h1>
        </div>
        <div className="sm:flex gap-6 my-4">
          <p className="text-justify basis-1/2 text-[#3a4a50] py-2 px-4 dark:text-white/90 bg-[#7eb7dd1c]">
            ARTIFY is a user-friendly creative space designed for artists,
            users, companies, and clients. Our community is very strong for any
            art-related help, offering quick support, inspiration, and
            meaningful connections. Artists can easily showcase their work,
            users can explore and appreciate new creations, and companies or
            clients can discover talented individuals for collaborations or
            projects. Together, we create a supportive environment where
            creativity grows and everyone feels welcome.
          </p>
          <div className="basis-1/2 bg-[#7eb7dd1c] rounded-md">
            <div className="border-b border-[#1637af59] py-2 px-6 my-2">
              <h1 className="text-2xl font-bold">
                <i className="fa-solid fa-globe"></i> 150K+
              </h1>
              <p className="text-[#918080]">Total Members </p>
            </div>
            <div className="border-b border-[#1637af59] py-2 px-6 my-2">
              <h1 className="text-2xl font-bold">
                <i className="fa-solid fa-trophy"></i> 100+
              </h1>
              <p className="text-[#918080]">Total Award</p>
            </div>
            <div className="border-b border-[#1637af59]  py-2 px-6 my-2">
              <h1 className="text-2xl font-bold">
                <i className="fa-solid fa-paintbrush"></i>3500K+
              </h1>
              <p className="text-[#918080]">Total Arts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
