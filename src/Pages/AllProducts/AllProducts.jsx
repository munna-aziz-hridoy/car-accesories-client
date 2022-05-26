import React from "react";
import CustomTitle from "../../Components/CustomTitle/CustomTitle";
import Footer from "../../Components/Footer/Footer";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";

const AllProducts = () => {
  const [products] = useProducts();

  return (
    <>
      <CustomTitle page="All Products" />
      <div className="container px-3 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-20 capitalize">
          Our All manufacturel products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
