import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card card-compact bg-base-100 hover:bg-white shadow hover:-translate-y-8 border-8 border-transparent hover:border-primary hover:shadow-2xl hover:shadow-[#ff075541] duration-300">
      <div className="p-5">
        <img src={product.image} alt="Shoes" className="w-full rounded-lg" />
      </div>
      <div className="card-body mt-3">
        <h2 className="card-title font-bold text-neutral capitalize">
          {product.name}
        </h2>
        <div className="w-32 h-1 rounded-3xl bg-primary"></div>
        <p className="text-sm text-accent mt-4">{product.details}</p>
        <p className="text-[15px] text-neutral capitalize font-medium">
          available quantity:
          <span className="text-primary font-bold text-lg">
            {product.availableQuantity}{" "}
          </span>
          units
        </p>
        <p className="text-[15px] text-neutral capitalize font-medium">
          minimun order:
          <span className="text-primary font-bold text-lg">
            {product.minOrderQuantity}{" "}
          </span>
          units
        </p>
        <p className="text-[15px] text-neutral capitalize font-medium">
          price:{" "}
          <span className="text-primary font-bold text-lg">
            ${product.price}
          </span>
          /per units
        </p>
        <p className="text-accent capitalize font-medium">
          made for:{" "}
          {product.madeFor.map((item, index) => (
            <span key={index}>{item}, </span>
          ))}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-white hover:bg-[#333] hover:text-white px-8">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
