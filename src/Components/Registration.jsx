import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
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
    <div className="card bg-base-100 mx-auto my-8 w-full max-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-center lg:text-left text-5xl font-semibold py-4">
          Registration now!
        </h1>
        <form onSubmit={(e) => handleRegistrationBtn(e)}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
            />
            <label className="label">Photo URL</label>
            <input
              type="url"
              className="input w-full"
              name="photoUrl"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showEye ? "text" : "password"}
                className="input w-full"
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
            <button className="btn btn-neutral mt-4">Registration</button>
          </fieldset>
        </form>
        {/* Google */}
        <button
          onClick={handleSignUpWithGoogleBtn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          SignUp with Google
        </button>
        <p className="text-xl">
          Don't have any account?
          <Link
            className="text-[#472dd4] font-semibold hover:underline"
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
