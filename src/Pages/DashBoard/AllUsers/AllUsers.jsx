import React from "react";
import CustomTitle from "../../../Components/CustomTitle/CustomTitle";

const AllUsers = () => {
  return (
    <div>
      <CustomTitle page="All Users" />
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
        All Users
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Order Quantity</th>
            <th>Total Price</th>
            <th>Shipping Status</th>
            <th>Transaction ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Product</td>
            <td>Price</td>
            <td>Order Quantity</td>
            <td>Total Price</td>
            <td>Shipping Status</td>
            <td>Transaction ID</td>
            <td>Action</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
