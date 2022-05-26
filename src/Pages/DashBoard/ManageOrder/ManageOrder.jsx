import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { ServerUrlContext } from "../../..";
import CustomTitle from "../../../Components/CustomTitle/CustomTitle";
import Spinner from "../../../Components/Spinner/Spinner";
import auth from "../../../firebase.init";

const ManageOrder = () => {
  const [user] = useAuthState(auth);
  const serverUrl = useContext(ServerUrlContext);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () => {
    return fetch(`${serverUrl}/allOrders?email=${user?.email}`, {
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

  if (isLoading) {
    return <Spinner />;
  }

  const handleShipping = async (id) => {
    const url = `${serverUrl}/updateDeliveryStatus?email=${user?.email}`;

    const data = await axios.patch(
      url,
      { id },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (data.status === 401 || data.status === 403) {
      signOut(auth);
      localStorage.removeItem("accessToken");
      return;
    }
    toast.success("Order Successfully Delivered");
    refetch();
  };

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
    refetch();
  };

  return (
    <>
      <CustomTitle page="Manage Order" />
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
        Manage all order
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>User</th>
              <th>Pay Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order, index) => {
              const {
                _id,
                product,
                quantity,
                price,
                email,
                paid,
                deliveryStatus,
              } = order;
              return (
                <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td>{product}</td>
                  <td>{quantity} units</td>
                  <td>${price * parseFloat(quantity)}</td>
                  <td>{email}</td>
                  <td>
                    {paid ? (
                      <span className="text-green-600">Paid</span>
                    ) : (
                      <span className="text-red-400">Unpaid</span>
                    )}
                  </td>
                  <td>
                    <div className="flex justify-end items-center gap-2">
                      {deliveryStatus ? (
                        <button className="btn-xs  font-semibold px-2 bg-green-600 border-green-600  text-white capitalize rounded-lg disabled:text-accent">
                          Delivered
                        </button>
                      ) : (
                        <button
                          onClick={() => handleShipping(_id)}
                          disabled={!paid && !deliveryStatus}
                          className="btn btn-xs  font-semibold px-2  text-white capitalize rounded-lg disabled:text-accent
                             bg-orange-400 border-orange-400"
                        >
                          Ship now
                        </button>
                      )}
                      <label
                        htmlFor={`deleteConfirmModal-${index}`}
                        disabled={paid}
                        className="btn btn-xs bg-red-600 border-red-600
                        font-semibold px-2 text-white capitalize rounded-lg"
                      >
                        Cancel
                      </label>
                      <div>
                        {/* <label
                          htmlFor={`deleteConfirmModal-${index}`}
                          className="btn modal-button"
                        >
                          open modal
                        </label> */}

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
                                Confirm Delete
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

            {/* <tr className="hover">
              <th> 1</th>
              <td>Product</td>
              <td>Order Quantity</td>
              <td>Total price</td>
              <td>munna.aziz.hridoy@gmail.com</td>
              <td>unpaid</td>
              <td>
                <div>
                  <button className="btn btn-xs border-green-600 font-semibold px-2 bg-green-600 text-white capitalize rounded-lg">
                    Pay
                  </button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageOrder;
