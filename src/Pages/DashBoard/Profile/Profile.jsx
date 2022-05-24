import axios from "axios";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { ServerUrlContext } from "../../..";
import Spinner from "../../../Components/Spinner/Spinner";
import UpdateProfileModal from "../../../Components/UpdateProfileModal/UpdateProfileModal";
import auth from "../../../firebase.init";

const Profile = () => {
  const serverurl = useContext(ServerUrlContext);
  const [loggedInUser] = useAuthState(auth);
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery("user", () => {
    return fetch(`${serverurl}/getProfile?email=${loggedInUser?.email}`).then(
      (res) => res.json()
    );
  });

  if (isLoading) {
    return <Spinner />;
  }

  const handleUpdateProfileImage = async (data) => {
    const imgbbAPIkey = "52ad69453d156ba9876338195fd1a8a5";
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // fetch(url, { method: "POST", body: formData });
    const { data: imgData } = await axios.post(url, formData);
    const profileImg = imgData.data.url;

    await axios.patch(
      `${serverurl}/updateProfileImage?email=${loggedInUser?.email}`,
      {
        image: profileImg,
      }
    );

    refetch();
    reset();
  };
  const { name, image, address, phone, country, email } = user;
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
        My Profile
      </h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-10 w-full">
          <div className="w-full lg:w-1/2">
            <div className="avatar">
              <div className="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt="" />
              </div>
            </div>

            <form
              onSubmit={handleSubmit(handleUpdateProfileImage)}
              className="w-full flex flex-col justify-center items-center mt-5"
            >
              <input
                {...register("image", { required: "Please upload any image" })}
                type="file"
                className="w-fit p-2 border-2 border-neutral text-neutral font-bold rounded-lg"
              />
              {errors.image ? (
                <p className="text-xs text-red-300 my-2">
                  {errors?.image?.message}
                </p>
              ) : (
                ""
              )}
              <input
                type="submit"
                value="Update Profile Image"
                className="text-sm font-semibold text-primary border-2 border-primary rounded-lg p-1 my-2"
              />
            </form>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold capitalize my-7">
              <span className="text-accent">name: </span>
              {name}
            </h1>
            <p className="my-4 text-primary font-semibold capitalize text-lg">
              email:{"  "}
              <span className="text-accent text-sm sm:text-xl  font-bold">
                {email}
              </span>
            </p>
            <p className="my-4 text-primary font-semibold capitalize text-lg">
              phone:{"  "}
              <span className="text-accent text-sm sm:text-xl  font-bold">
                {phone}
              </span>
            </p>

            <p className="my-4 text-primary font-semibold capitalize text-lg">
              address:{"  "}
              <span className="text-accent text-sm sm:text-xl  font-bold">
                {address}
              </span>
            </p>
            <p className="my-4 text-primary font-semibold capitalize text-lg">
              country:{"  "}
              <span className="text-accent text-sm sm:text-xl  font-bold">
                {country}
              </span>
            </p>

            <label
              onClick={() => setOpenModal(true)}
              htmlFor="update-profile"
              className="btn btn-primary my-10"
            >
              update profile
            </label>
            {openModal && (
              <UpdateProfileModal
                refetch={refetch}
                setOpenModal={setOpenModal}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-neutral my-10 capitalize">
          Purchase History
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
