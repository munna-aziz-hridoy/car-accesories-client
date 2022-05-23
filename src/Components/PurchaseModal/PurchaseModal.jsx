import React from "react";

const PurchaseModal = ({ setOpenModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };
  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h2 className="font-bold text-lg">Purchase {}</h2>

          <form onClick={handleSubmit} className="mt-10">
            <label className="label">
              <span className="label-text capitalize text-neutral">name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered  rounded-md input-primary w-full"
            />

            <label className="label">
              <span className="label-text capitalize text-neutral">email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered  rounded-md input-primary w-full"
            />

            <label className="label">
              <span className="label-text capitalize text-neutral">
                shipping address
              </span>
            </label>
            <input
              type="text"
              placeholder="Shipping Address"
              className="input input-bordered  rounded-md input-primary w-full"
            />

            <label className="label">
              <span className="label-text capitalize text-neutral">
                quantity
              </span>
            </label>
            <input
              type="number"
              placeholder="quantity"
              className="input input-bordered  rounded-md input-primary w-full"
            />

            <input
              type="submit"
              value="Order Now"
              className="text-semibold capitalize bg-primary hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-primary border-2 border-primary mt-8 mb-10"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
