import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ServerUrlContext } from "../..";
import auth from "../../firebase.init";

const UpdateProfileModal = ({ refetch, setOpenModal }) => {
  const serverUrl = useContext(ServerUrlContext);
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleUpdateProfile = async (inputData) => {
    const data = await axios.patch(
      `${serverUrl}/updateProfile?email=${user?.email}`,
      inputData,
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
    reset();
    refetch();
    toast.success("Your Profile has been updated");
    setOpenModal(false);
  };

  return (
    <>
      <input type="checkbox" id="update-profile" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="update-profile"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form onSubmit={handleSubmit(handleUpdateProfile)}>
              <label className="label">
                <span className="label-text capitalize text-neutral">
                  phone
                </span>
              </label>

              <input
                {...register("phone", { required: "phone is require" })}
                type="number"
                placeholder="phone"
                className="input input-bordered input-accent rounded-md  w-full"
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
                  Address
                </span>
              </label>
              <input
                {...register("address", { required: "address is require" })}
                type="text"
                placeholder="address"
                className="input input-bordered input-accent rounded-md  w-full"
              />
              {errors.address ? (
                <p className="text-xs text-red-300 my-2">
                  {errors?.address?.message}
                </p>
              ) : (
                ""
              )}
              <label className="label">
                <span className="label-text capitalize text-neutral">
                  Country
                </span>
              </label>
              <input
                {...register("country", { required: "country is require" })}
                type="text"
                placeholder="country"
                className="input input-bordered input-accent rounded-md  w-full"
              />
              {errors.country ? (
                <p className="text-xs text-red-300 my-2">
                  {errors?.country?.message}
                </p>
              ) : (
                ""
              )}
              <input
                type="submit"
                value="Update Profile"
                className="capitalize text-white bg-[#333] hover:bg-white hover:text-[#333] border-2 border-primary hover:border-white cursor-pointer duration-200 rounded-lg font-semibold px-10 py-3 mt-5"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileModal;
