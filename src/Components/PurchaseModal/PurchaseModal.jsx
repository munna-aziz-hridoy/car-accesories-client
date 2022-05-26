import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ServerUrlContext } from "../..";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Spinner from "../Spinner/Spinner";

const PurchaseModal = ({ setOpenModal, product }) => {
  const serverUrl = useContext(ServerUrlContext);
  const [user] = useAuthState(auth);
  const [isAdmin, loading] = useAdmin(user?.email);
  const [errorText, setErrorText] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { _id, name, price, availableQuantity, minOrderQuantity } = product;

  if (loading) {
    return <Spinner />;
  }

  const handlePurchaseProduct = async (inputData) => {
    const inputQuantity = parseInt(inputData.quantity);
    if (
      inputQuantity < parseInt(minOrderQuantity) ||
      inputQuantity > parseInt(availableQuantity)
    ) {
      setErrorText(
        `You can order at most ${availableQuantity} units and minimum ${minOrderQuantity} units`
      );
      return;
    }

    const orderedItem = {
      user: user?.displayName,
      email: user?.email,
      product: name,
      productId: _id,
      price,
      ...inputData,
      paid: false,
      deliveryStatus: false,
      transactionId: "",
    };

    const url = `${serverUrl}/purchaseProduct?email=${user?.email}`;
    if (isAdmin) {
      return toast.error("You are admin, you can't purchase a product");
    }
    const data = await axios.post(url, orderedItem, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (data.status === 401 || data.status === 403) {
      signOut(auth);
      localStorage.removeItem("accessToken");
      return;
    }
    if (data.data.acknowledged) {
      toast.success("Your order has been success fully placed");
      reset();
    }
    setErrorText("");
    setOpenModal(false);
  };
  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="font-bold text-lg">
            Purchase <span className="text-primary">{name}</span>
          </h2>

          <form
            onSubmit={handleSubmit(handlePurchaseProduct)}
            className="mt-10"
          >
            <label className="label">
              <span className="label-text capitalize text-neutral">name</span>
            </label>
            <input
              value={user?.displayName}
              disabled
              type="text"
              className="input input-bordered  rounded-md input-primary w-full"
            />

            <label className="label">
              <span className="label-text capitalize text-neutral">email</span>
            </label>
            <input
              value={user?.email}
              disabled
              type="text"
              className="input input-bordered  rounded-md input-primary w-full"
            />

            <label className="label">
              <span className="label-text capitalize text-neutral">
                shipping address
              </span>
            </label>
            <input
              {...register("shippingAddress", {
                required: "You must have to add a shipping address",
              })}
              type="text"
              placeholder="Shipping Address"
              className="input input-bordered  rounded-md input-primary w-full"
            />
            {errors.shippingAddress ? (
              <p className="text-xs text-red-300 my-2">
                {errors?.shippingAddress?.message}
              </p>
            ) : (
              ""
            )}

            <label className="label">
              <span className="label-text capitalize text-neutral">Phone</span>
            </label>
            <input
              {...register("phone", {
                required: "You must have to add a shipping address",
              })}
              type="number"
              placeholder="Phone Number"
              className="input input-bordered  rounded-md input-primary w-full"
            />
            {errors.phone ? (
              <p className="text-xs text-red-300 my-2">
                {errors?.phone?.message}
              </p>
            ) : (
              ""
            )}

            <label className="label">
              <span className="label-text capitalize text-neutral">
                quantity
              </span>
            </label>
            <input
              {...register("quantity", {
                required: "How much unit you want to buy?",
              })}
              type="number"
              placeholder={minOrderQuantity}
              className="input input-bordered  rounded-md input-primary w-full"
            />
            {errors.shippingAddress ? (
              <p className="text-xs text-red-300 my-2">
                {errors?.shippingAddress?.message}
              </p>
            ) : (
              ""
            )}
            {errorText && (
              <p className="text-xs text-red-300 my-2">{errorText}</p>
            )}

            <input
              type="submit"
              value="Order Now"
              className="text-semibold capitalize bg-primary hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-primary border-2 border-primary mt-8 mb-10 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
