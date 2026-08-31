import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const Registration = () => {
  const [showEye, setShowEye] = useState(false);
  const { createUser, signUpWithGoogle, setSignUpUser } = use(AuthContext);
  const navigate = useNavigate();
  //create user
  const handleRegistrationBtn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // if (!RegExp.test(password)) {
    //   toast.error(
    //     " Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."
    //   );
    //   return;
    // }
    createUser(email, password)
      .then((createUser) => {
        const user = createUser.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            // console.log(user);
          })
          .catch((error) => {
            toast.error(error.message);
          });
        toast.success("Create user is successful!", {
          position: "top-center",
        });
        setSignUpUser(user);
        navigate("/login");
      })
      .catch((error) => toast.error(error.message));
  };
  //Create user with google
  const handleSignUpWithGoogleBtn = () => {
    signUpWithGoogle()
      .then(() => {
        toast.success("User SignUp Successful!", {
          position: "top-center",
        });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleEyeBtn = () => {
    setShowEye(!showEye);
  };
  return (
    <div className="card bg-base-100 mx-auto my-8 w-full max-w-md shrink-0 shadow-2xl dark:bg-[#303b50]">
      <div className="card-body">
        <h1 className="text-center lg:text-left text-5xl py-4 font-bold bg-linear-to-r from-[#900101] to-[#0c29bb] dark:from-[#4ca2f8] bg-clip-text text-transparent">
          Registration now!
        </h1>
        <form onSubmit={(e) => handleRegistrationBtn(e)}>
          <fieldset className="fieldset">
            <label className="label  mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              placeholder="Name"
            />
            <label className="label mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Photo URL
            </label>
            <input
              type="url"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              name="photoUrl"
              placeholder="Photo URL"
            />
            <label className="label mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
              placeholder="Email"
            />
            <label className="label mt-4 text-[#0F172A] text-[14px] dark:text-white font-semibold">
              Password
            </label>
            <div className="relative">
              <input
                type={showEye ? "text" : "password"}
                className="input w-full dark:bg-[#1a1f2c]  dark:text-white/80 dark:placeholder:text-white/90 outline-none dark:focus:border-[#a6acb6] focus:border-[#5e86c7]"
                name="password"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={handleEyeBtn}
                className=" absolute top-[15px] right-[25px] z-40"
              >
                {showEye ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button className="btn btn-neutral mt-4 dark:bg-[#132dbd] text-xl border-none">
              Registration
            </button>
          </fieldset>
        </form>
        {/* Google */}
        <button
          onClick={handleSignUpWithGoogleBtn}
          className="btn bg-white dark:bg-[#182549] dark:text-white dark:border-none text-black border-[#e5e5e5]"
        >
          <FcGoogle className="text-xl" />
          SignUp with Google
        </button>
        <p className="text-xl flex gap-2">
          <span>Don't have any account?</span>
          <Link
            className="text-[#2d54d4] font-semibold hover:underline"
            to={"/login"}
          >
            Login Now!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
