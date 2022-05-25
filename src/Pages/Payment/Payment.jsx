import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ServerUrlContext } from "../..";
import CheckoutForm from "../../Components/CheckoutFrom/CheckoutForm";
import Spinner from "../../Components/Spinner/Spinner";

const stripePromise = loadStripe(
  "pk_test_51L1uNJFwLOKoh01CCS9qXRUMMyLfpPSmGNGCuytfehODVTvoNROZNGCcoGWHcJg9rJEHy2Zz3EWrJoWIUvSNnAAz00ggzNgcNs"
);

const Payment = () => {
  const serverUrl = useContext(ServerUrlContext);
  //   const [user] = useAuthState(auth);
  //   const [selectedService, setSelectedService] = useState({});
  //   const { id } = useParams();
  //   useEffect(() => {
  //     const url = `http://localhost:5000/singleService/${id}?email=${user?.email}`;
  //     fetch(url, {
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => setSelectedService(data));
  //   }, [id, user]);
  //   const { service, timeSlot, bookingDate, price } = selectedService;

  const { id } = useParams();

  const url = `${serverUrl}/singleOrder?id=${id}`;
  const { data: order, isLoading } = useQuery(["product", url], () => {
    return fetch(url).then((res) => res.json());
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-accent capitalize my-5">
        pay for <span className="text-primary">{order.product}</span>{" "}
      </h1>
      <div className="flex justify-center items-center gap-10 my-16">
        <div className="card  bg-base-100 shadow-xl w-full">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold my-5 text-primary">
              {order.product}
            </h2>
            <p className="text-lg font-semibold text-accent capitalize">
              Price: {order.price}
            </p>
            <p className="text-lg font-semibold text-accent capitalize">
              2. booking date: bookingDate
            </p>
            <p className="text-lg font-semibold text-accent capitalize">
              2. Appointment fee: price
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl w-full p-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
