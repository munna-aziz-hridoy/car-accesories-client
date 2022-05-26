import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import useProducts from "../../../hooks/useProducts";

const HomeProducts = () => {
  const [products] = useProducts(3);
  const navigate = useNavigate();
  return (
    <div className="container px-3 mx-auto my-40">
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center my-16">
        <button
          onClick={() => navigate("/allProducts")}
          className="btn btn-outline text-primary capitalize px-12"
        >
          all products
        </button>
      </div>
    </div>
  );
};

export default HomeProducts;

/*
https://i.ibb.co/zxKTHdz/11.jpg
https://i.ibb.co/ThcsyVq/21.jpg
https://i.ibb.co/FHD85g1/31.jpg
*/
