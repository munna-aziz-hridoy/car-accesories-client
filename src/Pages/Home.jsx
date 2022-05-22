import React from "react";
import BusinessSummury from "./Home/BusinessSummury/BusinessSummury";
import Capabilities from "./Home/Capabilities/Capabilities";
import HomeBanner from "./Home/HomeBanner/HomeBanner";
import HomeProducts from "./Home/HomeProducts/HomeProducts";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Capabilities />
      <HomeProducts />
      <BusinessSummury />
    </>
  );
};

export default Home;
