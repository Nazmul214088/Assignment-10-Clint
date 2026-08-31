import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [showEye, setShowEye] = useState(false);
  const { signInWithEmail, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleEyeBtn = () => {
    setShowEye(!showEye);
  };
  //SignIn with Email and password
  const handleLogInBtn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmail(email, password)
      .then((result) => {
        const currentUser = result.user;
        toast.success("User Login Successfully Done!", {
          position: "top-center",
        });
        setUser(currentUser);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, { position: "top-center" });
      });
  };

  return (
    <div className="card bg-base-100 mx-auto my-18 w-full max-w-md shrink-0 shadow-2xl dark:bg-[#303b50]">
      <div className="card-body">
        <h1 className="text-center lg:text-left text-5xl py-4 font-bold bg-linear-to-r from-[#900101] to-[#0c29bb] dark:from-[#4ca2f8] bg-clip-text text-transparent">
          Login now!
        </h1>
        <form onSubmit={(e) => handleLogInBtn(e)}>
          <fieldset className="fieldset">
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              placeholder="Email"
            />
            <label className="label py-1 mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Password
            </label>
            <div className="relative">
              <input
                type={showEye ? "text" : "password"}
                className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
                placeholder="Password"
                name="password"
              />
              <button
                type="button"
                onClick={handleEyeBtn}
                className=" absolute top-[15px] right-[25px] z-40"
              >
                {showEye ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <a className="link link-hover text-red-500">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 dark:bg-[#132dbd] text-xl border-none">Login</button>
          </fieldset>
        </form>
        {/* Google */}
        <button className="btn bg-white dark:bg-[#182549] dark:text-white dark:border-none text-black border-[#e5e5e5]">
          <FcGoogle className="text-xl" />
          Login with Google
        </button>
        <p className="text-xl flex gap-2">
         <span>Don't have any account?</span>
          <Link
            className="text-[#2d54d4] font-semibold hover:underline"
            to={"/registration"}
          >
            Registration Now!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
