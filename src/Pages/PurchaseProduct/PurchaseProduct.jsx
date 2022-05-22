import React from "react";
import Footer from "../../Components/Footer/Footer";
const product = {
  name: "D/76 model engine",
  image: "https://i.ibb.co/FHD85g1/31.jpg",
  details:
    "340 horse power engine, match with all D/76 model chesis no. Fuel efficient, made of pure metal, rpm up to 30000",
  price: 85,
  availableQuantity: 85000,
  minOrderQuantity: 200,
  madeFor: ["all D/76 chesis"],
};
const PurchaseProduct = () => {
  const {
    name,
    image,
    details,
    price,
    availableQuantity,
    minOrderQuantity,
    madeFor,
  } = product;
  return (
    <>
      <div className="container p-5  mx-auto md:flex justify-between items-center gap-16 my-40">
        <img src={image} alt="" className="md:w-1/2 rounded-xl shadow-xl" />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#211036] capitalize my-4 mt-5">
            {name}
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-lg text-neutral capitalize">{details}</p>
            <p className="text-xl text-neutral capitalize font-semibold">
              price: <span className="text-primary">${price}</span>
            </p>
            <p className="text-lg text-neutral capitalize font-semibold">
              available quantity:{" "}
              <span className="text-primary">{availableQuantity}</span>
            </p>
            <p className="text-lg text-neutral capitalize font-semibold">
              minimun order:{" "}
              <span className="text-primary">{minOrderQuantity}</span>
            </p>

            <p className="text-accent capitalize font-medium">
              made for:{" "}
              {madeFor.map((item, index) => (
                <span key={index}>{item}, </span>
              ))}
            </p>
          </div>
          <form className="flex flex-col md:flex-row justify-start items-start md:items-center gap-3 mt-6">
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Order Quantity"
              className="p-3 rounded-lg my-2 border-primary border-2 placeholder:text-lg placeholder:text-medium placeholder:text-primary placeholder:capitalize text-lg ptext-medium text-primary capitalize"
            />
            <input
              type="submit"
              value="Order Now"
              className="text-semibold capitalize bg-primary hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-primary border-2 border-primary my-3"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PurchaseProduct;
