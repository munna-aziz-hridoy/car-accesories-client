import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ServerUrlContext } from "../../..";
import CustomTitle from "../../../Components/CustomTitle/CustomTitle";
import Spinner from "../../../Components/Spinner/Spinner";
import auth from "../../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const serverUrl = useContext(ServerUrlContext);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", user], () => {
    return fetch(`${serverUrl}/UsersOrders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        return;
      }
      return res.json();
    });
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner />;
  }

  const handleDeleteOrder = async (id) => {
    const url = `${serverUrl}/deleteOneOrder?id=${id}&email=${user?.email}`;
    const data = await axios.delete(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (data.status === 401 || data.status === 403) {
      signOut(auth);
      localStorage.removeItem("accessToken");
      return;
    }
    toast.warning("Successfully delete order");
    refetch();
  };

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
                  <td>{quantity} units</td>
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
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        onClick={() => navigate(`/payment/${_id}`)}
                        disabled={paid}
                        className="btn btn-xs bg-green-600 border-green-600
                        font-semibold px-2 text-white capitalize rounded-lg disabled:text-accent"
                      >
                        {paid ? "Paid" : "Pay"}
                      </button>
                      <label
                        htmlFor={`deleteConfirmModal-${index}`}
                        disabled={paid}
                        className="btn btn-xs bg-red-600 border-red-600
                        font-semibold px-2 text-white capitalize rounded-lg"
                      >
                        <span>Cancel</span>
                      </label>
                      {/* modal */}
                      <div>
                        <input
                          type="checkbox"
                          id={`deleteConfirmModal-${index}`}
                          className="modal-toggle"
                        />
                        <div className="modal modal-bottom sm:modal-middle">
                          <div className="modal-box">
                            <label
                              htmlFor={`deleteConfirmModal-${index}`}
                              className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                              ✕
                            </label>
                            <h3 className="font-bold text-lg mt-8">
                              You are trying to delete {product}
                            </h3>
                            <p className="py-4">
                              Are you sure you want to delete?
                            </p>
                            <div className="modal-action">
                              <label
                                onClick={() => handleDeleteOrder(_id)}
                                htmlFor={`deleteConfirmModal-${index}`}
                                className="btn bg-red-600 border-red-600
                                     font-semibold px-2 text-white capitalize rounded-lg"
                              >
                                Delete
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* modal */}
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
