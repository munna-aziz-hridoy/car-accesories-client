import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
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

  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
        My Profile
      </h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-10 w-full">
          <div className="w-full lg:w-1/2 rounded-full p-3 bg-white">
            <img
              src={user.image}
              className="w-full rounded-full shadow-2xl"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold capitalize my-7">
              <span className="text-accent">name: </span>
              {user.name}
            </h1>
            <p className="my-4 text-primary font-semibold capitalize text-lg">
              email:{"  "}
              <span className="text-accent text-sm sm:text-xl  font-bold">
                {user.email}
              </span>
            </p>
            <p className="my-4 text-primary font-semibold capitalize text-lg">
              phone:{"  "}
              <span className="text-accent text-sm sm:text-xl  font-bold">
                {user.phone}
              </span>
            </p>

            <p className="my-4 text-primary font-semibold capitalize text-lg">
              address:{"  "}
              <span className="text-accent text-sm sm:text-xl  font-bold">
                {user.address}
              </span>
            </p>
            <p className="my-4 text-primary font-semibold capitalize text-lg">
              country:{"  "}
              <span className="text-accent text-sm sm:text-xl  font-bold">
                {user.country}
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
