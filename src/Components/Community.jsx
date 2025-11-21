import React from "react";

const Community = () => {
  return (
    <div className="mx-8">
      <div>
        <h1 className="text-center text-5xl font-black py-5 my-2 bg-[#0f12b936]">
          Ours Community
        </h1>
        <div className="sm:flex gap-8">
          <p className="text-justify basis-1/2 text-[#918080]">
            ARTIFY is a user-friendly creative space designed for artists,
            users, companies, and clients. Our community is very strong for any
            art-related help, offering quick support, inspiration, and
            meaningful connections. Artists can easily showcase their work,
            users can explore and appreciate new creations, and companies or
            clients can discover talented individuals for collaborations or
            projects. Together, we create a supportive environment where
            creativity grows and everyone feels welcome.
          </p>
          <div className="basis-1/2">
            <div className="border-b border-[#1638af83] p-2 my-2">
              <h1 className="text-2xl font-bold">
                <i className="fa-solid fa-globe"></i> 150K+
              </h1>
              <p className="text-[#918080]">Total Members </p>
            </div>
            <div className="border-b border-[#1638af83] p-2 my-2">
              <h1 className="text-2xl font-bold">
                <i className="fa-solid fa-trophy"></i> 100+
              </h1>
              <p className="text-[#918080]">Total Award</p>
            </div>
            <div className="border-b border-[#1638af83] p-2 my-2">
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
