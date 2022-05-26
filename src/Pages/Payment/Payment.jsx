import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ServerUrlContext } from "../..";
import CheckoutForm from "../../Components/CheckoutFrom/CheckoutForm";
import CustomTitle from "../../Components/CustomTitle/CustomTitle";
import Spinner from "../../Components/Spinner/Spinner";
import auth from "../../firebase.init";

const stripePromise = loadStripe(
  "pk_test_51L1uNJFwLOKoh01CCS9qXRUMMyLfpPSmGNGCuytfehODVTvoNROZNGCcoGWHcJg9rJEHy2Zz3EWrJoWIUvSNnAAz00ggzNgcNs"
);

const Payment = () => {
  const serverUrl = useContext(ServerUrlContext);
  const [user] = useAuthState(auth);

  const { id } = useParams();

  const url = `${serverUrl}/singleOrder?id=${id}&email=${user?.email}`;
  const { data: order, isLoading } = useQuery(["order", url], () => {
    return fetch(url, {
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

  const { product, price, quantity } = order;

  return (
    <>
      <CustomTitle page="Payment" />{" "}
      <div className="container mx-auto px-10">
        <h1 className="text-center text-3xl font-bold text-accent capitalize my-5">
          pay for <span className="text-primary">{product}</span>{" "}
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-16">
          <div className="card  bg-base-100 shadow-xl w-full">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold my-5 text-primary">
                {product}
              </h2>
              <p className="text-lg font-semibold text-accent capitalize">
                Price: ${price}
              </p>
              <p className="text-lg font-semibold text-accent capitalize">
                Quantity: {quantity} units
              </p>
              <p className="text-lg font-semibold text-accent capitalize">
                Total Price: ${parseInt(price) * parseInt(quantity)}
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
    </>
  );
};

export default Payment;
