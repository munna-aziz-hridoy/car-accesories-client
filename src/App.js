import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Components/Header/Header";
import AppRoutes from "./Routes/Routes";

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
