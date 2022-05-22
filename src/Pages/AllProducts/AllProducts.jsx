import React from "react";
import Footer from "../../Components/Footer/Footer";
import ProductCard from "../../Components/ProductCard/ProductCard";

const products = [
  {
    name: "MRF car tyre",
    image: "https://i.ibb.co/zxKTHdz/11.jpg",
    details:
      "MRF car typre, dimantion 117/30. It's made of a nice curbor fiber to prevent the accidient.",
    price: 260,
    availableQuantity: 127000,
    minOrderQuantity: 5000,
    madeFor: ["Toyota", "BMW", "Lamborgini", "Audi", "Range Rover"],
  },
  {
    name: "Digital side mirror",
    image: "https://i.ibb.co/ThcsyVq/21.jpg",
    details:
      "Digital mirror, made of pure silicon glass, touch sensitive, show the speed of behind car, alarm on close call.",
    price: 85,
    availableQuantity: 247000,
    minOrderQuantity: 20000,
    madeFor: [
      "Axio",
      "Corola",
      "Lamborgini",
      "Marcetis",
      "Range Rover",
      "Maclrn",
    ],
  },
  {
    name: "D/76 model engine",
    image: "https://i.ibb.co/FHD85g1/31.jpg",
    details:
      "340 horse power engine, match with all D/76 model chesis no. Fuel efficient, made of pure metal, rpm up to 30000",
    price: 85,
    availableQuantity: 85000,
    minOrderQuantity: 200,
    madeFor: ["all D/76 chesis"],
  },
];

const AllProducts = () => {
  return (
    <>
      {" "}
      <div className="container px-3 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-20 capitalize">
          Our All manufacturel products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
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
