import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ServerUrlContext } from "../..";
import auth from "../../firebase.init";

const CheckoutForm = ({ order }) => {
  const { price, user, email, _id } = order;
  const serverUrl = useContext(ServerUrlContext);
  const [loggedInUser] = useAuthState(auth);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [errorText, setErrorText] = useState("");
  const [clientSecret, setclientSecret] = useState("");

  useEffect(() => {
    const url = `${serverUrl}/create-payment-intent?email=${loggedInUser?.email}`;
    axios
      .post(
        url,
        { price: price },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((data) => {
        if (data.status === 401 || data.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          return;
        }
        setclientSecret(data.data.clientSecret);
      });
  }, [order, serverUrl, loggedInUser, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const card = elements.getElement(CardElement);

    if (!elements || !stripe) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setErrorText(error?.message || "");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user,
            email: email,
          },
        },
      });
    if (!paymentIntent) return;
    if (intentError) {
      return setErrorText(intentError.message);
    }
    const data = await axios.patch(
      `${serverUrl}/updateSignleOrder?id=${_id}&email=${loggedInUser?.email}`,
      { transactionId: paymentIntent?.id },
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
    toast.success("Your Payment is successful");
    navigate("/dashboard/order");
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="bg-base-200 p-5 rounded-md shadow" />
      {errorText && (
        <p className="text-sm font-semibold text-red-300 mt-5">{errorText}</p>
      )}
      <button
        className={`text-white hover:text-accent border-2 border-accent bg-accent hover:bg-white w-full h-11 rounded-lg mt-6 cursor-pointer duration-200 disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed disabled:hover:text-white`}
        type="submit"
        disabled={!stripe || !elements || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
