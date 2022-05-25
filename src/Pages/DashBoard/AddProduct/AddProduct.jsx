import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ServerUrlContext } from "../../..";
import CustomTitle from "../../../Components/CustomTitle/CustomTitle";
import auth from "../../../firebase.init";

const AddProduct = () => {
  const serverUrl = useContext(ServerUrlContext);
  const [user] = useAuthState(auth);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddProduct = async (inputData) => {
    const { productImg, ...rest } = inputData;
    const uploadedImg = productImg[0];
    const formData = new FormData();
    formData.append("image", uploadedImg);

    const imgbbAPIkey = "52ad69453d156ba9876338195fd1a8a5";
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`;
    const { data: imgData } = await axios.post(url, formData);
    const image = imgData.data.url;
    const product = { ...rest, image };
    const data = await axios.post(
      `${serverUrl}/addProducts?email=${user?.email}`,
      product,
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
    if (data.data.acknowledged) {
      toast.success("Product has been uploaded");
    }
    reset();
  };

  return (
    <div>
      <CustomTitle page="Add Product" />
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-20 capitalize">
        add a product
      </h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <label className="label">
          <span className="label-text capitalize text-neutral">
            product name
          </span>
        </label>
        <input
          {...register("name", { required: "Please Enter Product Name" })}
          type="text"
          placeholder="Name"
          className="input input-bordered input-accent rounded-md  w-full"
        />
        {errors.name ? (
          <p className="text-xs text-red-300 my-2">{errors?.name?.message}</p>
        ) : (
          ""
        )}

        <label className="label">
          <span className="label-text capitalize text-neutral">price</span>
        </label>
        <input
          {...register("price", { required: "Please Enter Product Price" })}
          type="number"
          placeholder="price"
          className="input input-bordered input-accent rounded-md  w-full"
        />
        {errors.price ? (
          <p className="text-xs text-red-300 my-2">{errors?.name?.message}</p>
        ) : (
          ""
        )}

        <label className="label">
          <span className="label-text capitalize text-neutral">
            available quantity
          </span>
        </label>
        <input
          {...register("availableQuantity", {
            required: "How much product you have?",
          })}
          type="number"
          placeholder="Available Quantity"
          className="input input-bordered input-accent rounded-md w-full"
        />
        {errors.availableQuantity ? (
          <p className="text-xs text-red-300 my-2">
            {errors?.availableQuantity?.message}
          </p>
        ) : (
          ""
        )}

        <label className="label">
          <span className="label-text capitalize text-neutral">
            minimun order
          </span>
        </label>
        <input
          {...register("minOrderQuantity", {})}
          type="number"
          placeholder="Minimum Order Quantity"
          className="input input-bordered input-accent rounded-md  w-full"
        />
        {errors.minOrderQuantity ? (
          <p className="text-xs text-red-300 my-2">
            {errors?.minOrderQuantity?.message}
          </p>
        ) : (
          ""
        )}

        <label className="label">
          <span className="label-text capitalize text-neutral">made for</span>
        </label>
        <input
          {...register("madeFor")}
          type="text"
          placeholder="Made For"
          className="input input-bordered input-accent rounded-md w-full"
        />

        <label className="label">
          <span className="label-text capitalize text-neutral">
            Upload Image
          </span>
        </label>
        <input
          {...register("productImg", { required: "Please upload any image" })}
          type="file"
          className="w-fit p-2 border-2 border-neutral text-neutral font-bold rounded-lg"
        />
        {errors.productImg ? (
          <p className="text-xs text-red-300 my-2">
            {errors?.productImg?.message}
          </p>
        ) : (
          ""
        )}

        <label className="label">
          <span className="label-text capitalize text-neutral">
            Description
          </span>
        </label>
        <textarea
          {...register("details", { required: "Description is needed" })}
          className="textarea textarea-accent w-full"
          placeholder="Description"
        ></textarea>
        {errors.details ? (
          <p className="text-xs text-red-300 my-2">
            {errors?.details?.message}
          </p>
        ) : (
          ""
        )}
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
