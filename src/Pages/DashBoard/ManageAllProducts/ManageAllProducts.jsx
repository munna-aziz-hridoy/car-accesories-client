import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { ServerUrlContext } from "../../..";
import CustomTitle from "../../../Components/CustomTitle/CustomTitle";
import Spinner from "../../../Components/Spinner/Spinner";
import auth from "../../../firebase.init";

const ManageAllProducts = () => {
  const serverUrl = useContext(ServerUrlContext);
  const [user] = useAuthState(auth);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["products"], () => {
    return fetch("https://sleepy-cove-71214.herokuapp.com/products").then(
      (res) => res.json()
    );
  });

  if (isLoading) {
    return <Spinner />;
  }

  const handleDeleteProduct = async (id) => {
    const url = `${serverUrl}/deleteOneProduct?id=${id}&email=${user?.email}`;
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
    <div>
      <CustomTitle page="Manage All Product" />
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
        Manage all Products
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Available Quantity</th>
              <th>Minimun Order</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              const {
                _id,
                price,
                name,
                availableQuantity,
                minOrderQuantity,
                image,
              } = item;
              return (
                <tr key={index} class="hover">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex justify-start items-center gap-3">
                      <div className="avatar">
                        <div className="w-8 rounded">
                          <img
                            src={image}
                            alt="Tailwind-CSS-Avatar-component"
                          />
                        </div>
                      </div>
                      <p>{name}</p>
                    </div>
                  </td>
                  <td>{availableQuantity}</td>
                  <td>{minOrderQuantity}</td>
                  <td>{price}</td>
                  <td>
                    <div>
                      <label
                        htmlFor={`deleteConfirmModal-${index}`}
                        className="btn bg-red-600 border-red-600
                                     font-semibold px-2 text-white capitalize rounded-lg"
                      >
                        Delete
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
                              You are trying to delete {name}
                            </h3>
                            <p className="py-4">
                              Are you sure you want to delete?
                            </p>
                            <div className="modal-action">
                              <label
                                onClick={() => handleDeleteProduct(_id)}
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
    </div>
  );
};

export default ManageAllProducts;
