import React from "react";
import CustomTitle from "../../Components/CustomTitle/CustomTitle";
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
      <CustomTitle page="Home" />
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
