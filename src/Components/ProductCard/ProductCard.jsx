import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    image,
    name,
    details,
    availableQuantity,
    minOrderQuantity,
    price,
    madeFor,
  } = product;

  const navigate = useNavigate();

  return (
    <div className="card card-compact bg-base-100 hover:bg-white shadow hover:-translate-y-8 border-8 border-transparent hover:border-primary hover:shadow-2xl hover:shadow-[#ff075541] duration-300">
      <div className="avatar justify-center">
        <div className="p-5">
          <img src={image} alt="Shoes" className="w-full rounded-lg" />
        </div>
      </div>
      <div className="card-body mt-3">
        <h2 className="card-title font-bold text-neutral capitalize">{name}</h2>
        <div className="w-32 h-1 rounded-3xl bg-primary"></div>
        <p className="text-sm text-accent mt-4">{details}</p>
        <p className="text-[15px] text-neutral capitalize font-medium">
          available quantity:
          <span className="text-primary font-bold text-lg">
            {availableQuantity}{" "}
          </span>
          units
        </p>
        <p className="text-[15px] text-neutral capitalize font-medium">
          minimun order:
          <span className="text-primary font-bold text-lg">
            {minOrderQuantity}{" "}
          </span>
          units
        </p>
        <p className="text-[15px] text-neutral capitalize font-medium">
          price:{" "}
          <span className="text-primary font-bold text-lg">${price}</span>
          /per units
        </p>
        <p className="text-accent capitalize font-medium">
          made for: {madeFor}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/purchaseItem/${_id}`)}
            className="btn btn-primary text-white hover:bg-[#333] hover:text-white px-8"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
