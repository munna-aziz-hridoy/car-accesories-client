import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AddProduct from "./Pages/DashBoard/AddProduct/AddProduct";
import AddReview from "./Pages/DashBoard/AddReview/AddReview";
import DashBoard from "./Pages/DashBoard/DashBoard";
import ManageOrder from "./Pages/DashBoard/ManageOrder/ManageOrder";
import Order from "./Pages/DashBoard/Order/Order";
import Profile from "./Pages/DashBoard/Profile/Profile";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PurchaseProduct from "./Pages/PurchaseProduct/PurchaseProduct";
import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <>
      <Header />
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
          <Route path="addreview" element={<AddReview />} />
          <Route path="order" element={<Order />} />
          <Route path="manageOrder" element={<ManageOrder />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
        <Route
          path="/purchaseItem"
          element={
            <RequireAuth>
              <PurchaseProduct />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
