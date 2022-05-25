import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import CustomTitle from "../../../Components/CustomTitle/CustomTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
import { ServerUrlContext } from "../../..";

const AddReview = () => {
  const serverUrl = useContext(ServerUrlContext);
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const userImg =
    user?.photoURL ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

  const handleAddReview = (data) => {
    const rating = data.rating;
    if (rating < 0 || rating > 5) {
      toast.error("Please enter a value between 0 to 5");
      return;
    }

    const review = { ...data, image: userImg, name: user?.displayName };

    axios.post(`${serverUrl}/reviews`, { ...review }).then((data) => {
      toast.success("Your Review has been successfully posted");
      reset();
    });
  };
  return (
    <>
      <CustomTitle page="Add Review" />
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-20 capitalize">
          add a review
        </h2>
        <form onSubmit={handleSubmit(handleAddReview)}>
          <label className="label">
            <span className="label-text capitalize text-neutral">
              your name
            </span>
          </label>
          <input
            value={user?.displayName}
            disabled
            type="text"
            className="input input-bordered input-accent rounded-md w-full"
          />
          <label className="label">
            <span className="label-text capitalize text-neutral">rating</span>
          </label>

          <input
            {...register("rating", { required: "Rating is require" })}
            type="number"
            placeholder="rating"
            className="input input-bordered input-accent rounded-md  w-full"
          />
          {errors.rating ? (
            <p className="text-xs text-red-300 my-2">
              {errors?.rating?.message}
            </p>
          ) : (
            ""
          )}
          <label className="label">
            <span className="label-text capitalize text-neutral">Message</span>
          </label>
          <textarea
            {...register("text")}
            className="textarea textarea-accent w-full"
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            value="Post Review"
            className="capitalize text-white bg-[#333] hover:bg-white hover:text-[#333] border-2 border-primary hover:border-white cursor-pointer duration-200 rounded-lg font-semibold px-10 py-3 mt-5"
          />
        </form>
      </div>
    </>
  );
};

export default AddReview;
