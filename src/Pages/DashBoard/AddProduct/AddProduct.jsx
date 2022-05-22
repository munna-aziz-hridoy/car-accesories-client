import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-20 capitalize">
        add a product
      </h2>
      <form>
        <label className="label">
          <span className="label-text capitalize text-neutral">
            product name
          </span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-accent rounded-md  w-full"
        />

        <label className="label">
          <span className="label-text capitalize text-neutral">price</span>
        </label>
        <input
          type="number"
          placeholder="price"
          className="input input-bordered input-accent rounded-md  w-full"
        />

        <label className="label">
          <span className="label-text capitalize text-neutral">
            available quantity
          </span>
        </label>
        <input
          type="number"
          placeholder="Available Quantity"
          className="input input-bordered input-accent rounded-md w-full"
        />

        <label className="label">
          <span className="label-text capitalize text-neutral">
            minimun order
          </span>
        </label>
        <input
          type="number"
          placeholder="Minimum Order Quantity"
          className="input input-bordered input-accent rounded-md  w-full"
        />

        <label className="label">
          <span className="label-text capitalize text-neutral">made for</span>
        </label>
        <input
          type="text"
          placeholder="Made For"
          className="input input-bordered input-accent rounded-md w-full"
        />

        <label className="label">
          <span className="label-text capitalize text-neutral">Message</span>
        </label>
        <textarea
          className="textarea textarea-accent w-full"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          value="Add Product"
          className="capitalize text-white bg-[#333] hover:bg-white hover:text-[#333] border-2 border-primary hover:border-white cursor-pointer duration-200 rounded-lg font-semibold px-10 py-3 mt-5"
        />
      </form>
    </div>
  );
};

export default AddProduct;
