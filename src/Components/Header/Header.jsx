import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import demoUserPhoto from "../../Assets/images/profile.png";

const Header = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const [user] = useAuthState(auth);

  const menuItems = (
    <>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/allProducts">All Products</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/portfolio">Portfolio</CustomLink>
      {user && <CustomLink to="/dashboard">dashboard</CustomLink>}

      <li className="capitalize bg-primary  text-slate-100  duration-200 rounded-lg border-2 border-primary font-bold">
        {user ? (
          <div>
            <div className="relative">
              <div
                onClick={() => setOpenInfo(!openInfo)}
                className="bg-slate-200 w-[45px] h-[45px] rounded-full p-1 flex justify-center items-center cursor-pointer"
              >
                <img
                  src={user?.photoURL || demoUserPhoto}
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div
                className={`${
                  openInfo ? "flex" : "hidden"
                } absolute flex-col justify-center items-center gap-5 p-6 rounded-lg bg-base-100 shadow-lg top-16 -left-14 md:-left-16`}
              >
                <p className="text-xl font-bold text-neutral capitalize">
                  {user?.displayName}
                </p>
                <p className="font-semibold text-accent capitalize">
                  {user?.email}
                </p>
              </div>
            </div>
            <p
              className="capitalize  w-full ml-3"
              onClick={() => {
                signOut(auth);
                localStorage.removeItem("accessToken");
              }}
            >
              sign out
            </p>
          </div>
        ) : (
          <>
            <Link to="/login">login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </li>
    </>
  );

  return (
    <div className="shadow-sm sticky top-0 z-50 bg-base-100">
      <div className="navbar  justify-between h-fit container mx-auto">
        <div className="navbar-start w-full lg:w-fit justify-between">
          <div className="dropdown order-2">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2 right-0"
            >
              {menuItems}
            </ul>
          </div>
          <div className="flex flex-row-reverse justify-center items-center">
            <Link
              to="/"
              className="btn btn-ghost text-2xl capitalize font-bold"
            >
              Car Accessories
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-4">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
