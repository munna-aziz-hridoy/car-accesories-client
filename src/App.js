import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import AllProducts from "./Pages/AllProducts/AllProducts";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Home from "./Pages/Home/Home";
import PurchaseProduct from "./Pages/PurchaseProduct/PurchaseProduct";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/purchaseItem" element={<PurchaseProduct />} />
      </Routes>
    </>
  );
};

export default App;
