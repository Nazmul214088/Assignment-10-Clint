import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./AuthContext/AuthContext";
import { toast } from "react-toastify";
import useTheme from "../Hooks/useTheme";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { user, signOutUser, setUser, setSignUpUser, signUpUser } =
    use(AuthContext);
  const { theme, themeToggle } = useTheme();

  const handleSignOutBtn = () => {
    signOutUser()
      .then(() => {
        toast.success("User sign out is successfully done.", {
          position: "top-center",
        });
        setUser(null);
        setSignUpUser(null);
      })
      .catch(() => {
        toast.error("Error!");
      });
  };
  const links = (
    <>
      <li className="font-semibold text-lg">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold text-lg">
        <NavLink to={"/ExploreArtworks"}>Explore Artworks</NavLink>
      </li>
    </>
  );
  const privateLinks = (
    <>
      <li className="font-semibold text-lg">
        <NavLink to={"/AddArtwork"}>Add Artwork</NavLink>
      </li>
      <li className="font-semibold text-lg">
        <NavLink to={"/MyGallery"}>My Gallery</NavLink>
      </li>
      <li className="font-semibold text-lg">
        <NavLink to={"/MyFavorites"}>My Favorites</NavLink>
      </li>
    </>
  );

  const login = (
    <>
      <li className="font-semibold text-lg">
        <NavLink to={"/registration"}>Registration</NavLink>
      </li>
    </>
  );
  const registration = (
    <>
      <li className="font-semibold text-lg">
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm dark:bg-[#333]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiMenu className="text-2xl" />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content dark:bg-[#2b364d] bg-base-100 rounded-box z-999 mt-3 w-52 p-2 shadow"
          >
            {links}
            {privateLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-lg text-center font-extrabold bg-linear-to-r from-[#900101] to-[#00188e] dark:from-[#3a9dff] bg-clip-text text-transparent" to={"/"}>
          ARTIFY
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
          {privateLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 items-center">
          {user ? (
            <li className="dropdown">
              <div tabIndex={0} role="button" className=" cursor-pointer">
                <img
                  className="w-15 h-15 rounded-full p-0"
                  src={user.photoURL}
                  alt="userPhoto"
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box w-40 p-2 shadow-sm z-50 -ml-17"
              >
                <li>
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <button onClick={handleSignOutBtn}>Logout</button>
                </li>
              </ul>
            </li>
          ) : signUpUser ? (
            registration
          ) : (
            login
          )}
          <li className="w-15 h-15 rounded-full ">
            <button
              className="btn mx-2 md:w-14 md:h-14 dark:bg-[#747d8c] "
              onClick={themeToggle}
            >
              {theme === "dark" ? (
                <MdDarkMode className="text-white text-2xl md:text-4xl" />
              ) : (
                <CiLight className="text-2xl md:text-4xl text-[#ffa600] font-black" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
