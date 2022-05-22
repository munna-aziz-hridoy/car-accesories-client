import React from "react";
import Footer from "../Components/Footer/Footer";
import BusinessSummury from "./Home/BusinessSummury/BusinessSummury";
import Capabilities from "./Home/Capabilities/Capabilities";
import HomeBanner from "./Home/HomeBanner/HomeBanner";
import HomeContact from "./Home/HomeContact/HomeContact";
import HomeProducts from "./Home/HomeProducts/HomeProducts";
import Reviews from "./Home/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Capabilities />
      <HomeProducts />
      <BusinessSummury />
      <Reviews />
      <HomeContact />
      <Footer />
    </>
  );
};

export default Home;
