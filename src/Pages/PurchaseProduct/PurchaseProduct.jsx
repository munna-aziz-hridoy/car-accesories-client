import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import PurchaseModal from "../../Components/PurchaseModal/PurchaseModal";
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
  const [openModal, setOpenModal] = useState(false);
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
          <label
            onClick={() => setOpenModal(true)}
            htmlFor="purchase-modal"
            className="text-semibold capitalize bg-primary hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-primary border-2 border-primary my-5 inline-block"
          >
            Order Now
          </label>
        </div>
      </div>
      {openModal && <PurchaseModal setOpenModal={setOpenModal} />}
      <Footer />
    </>
  );
};

export default PurchaseProduct;
