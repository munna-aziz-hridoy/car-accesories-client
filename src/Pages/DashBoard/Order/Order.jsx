import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { ServerUrlContext } from "../../..";
import CustomTitle from "../../../Components/CustomTitle/CustomTitle";
import Spinner from "../../../Components/Spinner/Spinner";
import Payment from "../../Payment/Payment";

const Order = () => {
  const serverUrl = useContext(ServerUrlContext);

  const { data: orders, isLoading } = useQuery("orders", () => {
    return fetch(`${serverUrl}/allOrders`).then((res) => res.json());
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <CustomTitle page="Order" />
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
              <th>Shipping Status</th>
              <th>Transaction ID</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => {
              const {
                _id,
                product,
                price,
                quantity,
                deliveryStatus,
                paid,
                transactionId,
              } = order;
              return (
                <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td>{product}</td>
                  <td>${price}</td>
                  <td>{quantity}</td>
                  <td>${price * parseInt(quantity)}</td>
                  <td>
                    {deliveryStatus ? (
                      <span className="text-green-600 font-semibold">
                        Shipped
                      </span>
                    ) : (
                      <span className="text-orange-600 font-semibold">
                        Pending
                      </span>
                    )}
                  </td>
                  <td>
                    {transactionId ? transactionId : "You haven't paid yet"}
                  </td>
                  <td>
                    <div>
                      <button
                        onClick={() => navigate(`/payment/${_id}`)}
                        disabled={paid}
                        className={`btn btn-xs ${
                          paid
                            ? "bg-blue-600 border-blue-600"
                            : "bg-green-600 border-green-600"
                        }   font-semibold px-2  text-white capitalize rounded-lg disabled:text-accent`}
                      >
                        {paid ? "Paid" : "Pay"}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
