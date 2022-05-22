import React from "react";

const Order = () => {
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
        My all order
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>Transaction ID</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover">
              <th> 1</th>
              <td>Product</td>
              <td>Price</td>
              <td>Order Quantity</td>
              <td>Total price</td>
              <td>Transaction ID</td>
              <td>
                <div>
                  <button className="btn btn-xs border-green-600 font-semibold px-2 bg-green-600 text-white capitalize rounded-lg">
                    Pay
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
