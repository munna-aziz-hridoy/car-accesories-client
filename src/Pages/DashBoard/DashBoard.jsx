import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import CustomTitle from "../../Components/CustomTitle/CustomTitle";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <>
      <CustomTitle page="Dashboard" />
      <label htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
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

      <div className="drawer drawer-mobile  h-fit">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-base-100 p-5">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <div className="w-80 bg-base-100 ">
            <h2 className="text-3xl font-bold text-primary capitalize px-8 py-4">
              Dashboard
            </h2>
            <ul className="menu p-4 overflow-y-auto text-base-content">
              <li className="bg-white hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg duration-300 capitalize font-medium text-accent shadow rounded-lg my-2">
                <Link to="/dashboard">Profile</Link>
              </li>

              {!isAdmin && (
                <>
                  <li className="bg-white hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg duration-300 capitalize font-medium text-accent shadow rounded-lg my-2">
                    <Link to="/dashboard/order">Order</Link>
                  </li>
                  <li className="bg-white hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg duration-300 capitalize font-medium text-accent shadow rounded-lg my-2">
                    <Link
                      to="/dashboard/addreview
                "
                    >
                      Add Review
                    </Link>
                  </li>
                </>
              )}

              {isAdmin && (
                <>
                  <li className="bg-white hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg duration-300 capitalize font-medium text-accent shadow rounded-lg my-2">
                    <Link to="/dashboard/manageOrder">manage order</Link>
                  </li>
                  <li className="bg-white hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg duration-300 capitalize font-medium text-accent shadow rounded-lg my-2">
                    <Link to="/dashboard/allUsers">All Users</Link>
                  </li>
                  <li className="bg-white hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg duration-300 capitalize font-medium text-accent shadow rounded-lg my-2">
                    <Link to="/dashboard/addproduct">add product</Link>
                  </li>
                  <li className="bg-white hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg duration-300 capitalize font-medium text-accent shadow rounded-lg my-2">
                    <Link to="/dashboard/manageProducts">Manage product</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
