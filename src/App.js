import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AddReview from "./Pages/DashBoard/AddReview/AddReview";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Order from "./Pages/DashBoard/Order/Order";
import Profile from "./Pages/DashBoard/Profile/Profile";
import Home from "./Pages/Home/Home";
import PurchaseProduct from "./Pages/PurchaseProduct/PurchaseProduct";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<Order />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/purchaseItem" element={<PurchaseProduct />} />
      </Routes>
    </>
  );
};

export default App;
