import React from "react";
import { Link } from "react-router";
import error from "../assets/error.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[90vh]">
      {/* {useTitle("Error Page")} */}
      <figure>
        <img src={error} alt="" />
      </figure>
      <div className="w-[60%] text-center py-6">
        <h2 className="text-3xl font-bold uppercase ">404 - page not found</h2>
        <p className="py-2">
          The page you are looking for might have been remove had its name
          changed or is temporarily unavailable.{" "}
        </p>
        <button className="mt-3 px-8 py-4 bg-[#0000c5] uppercase rounded-full text-2xl text-white font-semibold">
          <Link to={"/"}>go to homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
