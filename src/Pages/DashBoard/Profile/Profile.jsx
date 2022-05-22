import React from "react";

const Profile = () => {
  const user = {
    name: "Munna Aziz",
    email: "munna.aziz.hridoy@gmail.com",
    image: "https://i.ibb.co/FxfB2sN/12.png",
    phone: "123 456 789",
    address: "12/A, Block D, 2342 California, USA",
    country: "United States",
  };
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
        My Profile
      </h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-10">
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
              <span className="text-accent text-xl font-bold">
                {user.email}
              </span>
            </p>
            <p className="my-4 text-primary font-semibold capitalize text-lg">
              phone:{"  "}
              <span className="text-accent text-xl font-bold">
                {user.phone}
              </span>
            </p>

            <p className="my-4 text-primary font-semibold capitalize text-lg">
              address:{"  "}
              <span className="text-accent text-xl font-bold">
                {user.address}
              </span>
            </p>
            <p className="my-4 text-primary font-semibold capitalize text-lg">
              country:{"  "}
              <span className="text-accent text-xl font-bold">
                {user.country}
              </span>
            </p>

            <button className="btn btn-primary my-10">update profile</button>
          </div>
        </div>
      </div>
      <div>
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
