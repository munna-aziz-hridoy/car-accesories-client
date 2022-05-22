import React from "react";
import Footer from "../../Components/Footer/Footer";
import BusinessSummury from "./BusinessSummury/BusinessSummury";
import Capabilities from "./Capabilities/Capabilities";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeContact from "./HomeContact/HomeContact";
import HomeProducts from "./HomeProducts/HomeProducts";
import Reviews from "./Reviews/Reviews";

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
