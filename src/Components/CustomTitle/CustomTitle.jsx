import React from "react";
import { Helmet } from "react-helmet-async";

const CustomTitle = ({ page }) => {
  return (
    <Helmet>
      <title>{page} - Car Accesories</title>
    </Helmet>
  );
};

export default CustomTitle;
