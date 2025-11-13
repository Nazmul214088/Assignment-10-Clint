import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser, setUser, setSignUpUser, signUpUser } =
    use(AuthContext);

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
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/ExploreArtworks"}>Explore Artworks</NavLink>
      </li>
    </>
  );
  const privateLinks = (
    <>
      <li>
        <NavLink to={"/AddArtwork"}>Add Artwork</NavLink>
      </li>
      <li>
        <NavLink to={"/MyGallery"}>My Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/MyFavorites"}>My Favorites</NavLink>
      </li>
    </>
  );

  const login = (
    <>
      <li>
        <NavLink to={"/registration"}>Registration</NavLink>
      </li>
    </>
  );
  const registration = (
    <>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
            {privateLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to={"/"}>
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
        <ul className="menu menu-horizontal px-1">
          {user ? (
            <li className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1">
                <img
                  className="w-15 rounded-full"
                  src={user.photoURL}
                  alt="userPhoto"
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
