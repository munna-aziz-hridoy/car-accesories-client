import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAdmin from "../Components/RequireAdmin/RequireAdmin";
import RequireAuth from "../Components/RequireAuth/RequireAuth";
import RequireUser from "../Components/RequireUser/RequireUser";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Blogs from "../Pages/Blogs/Blogs";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import AddReview from "../Pages/DashBoard/AddReview/AddReview";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../Pages/DashBoard/DashBoard";
import ManageAllProducts from "../Pages/DashBoard/ManageAllProducts/ManageAllProducts";
import ManageOrder from "../Pages/DashBoard/ManageOrder/ManageOrder";
import Order from "../Pages/DashBoard/Order/Order";
import Profile from "../Pages/DashBoard/Profile/Profile";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Payment/Payment";
import Portfolio from "../Pages/Portfolio/Portfolio";
import PurchaseProduct from "../Pages/PurchaseProduct/PurchaseProduct";
import Register from "../Pages/Register/Register";
import FourZeroFour from "../Pages/FourZeroFour/FourZeroFour";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<Profile />} />
          <Route
            path="addreview"
            element={
              <RequireUser>
                <AddReview />
              </RequireUser>
            }
          />
          <Route
            path="order"
            element={
              <RequireUser>
                <Order />
              </RequireUser>
            }
          />
          <Route
            path="manageOrder"
            element={
              <RequireAdmin>
                <ManageOrder />
              </RequireAdmin>
            }
          />
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          />
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageAllProducts />
              </RequireAdmin>
            }
          />
        </Route>
        <Route
          path="/purchaseItem/:id"
          element={
            <RequireAuth>
              <PurchaseProduct />
            </RequireAuth>
          }
        />
        <Route
          path="payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
