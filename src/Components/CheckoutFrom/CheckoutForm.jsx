import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { ServerUrlContext } from "../..";
import auth from "../../firebase.init";

import Spinner from "../Spinner/Spinner";

const CheckoutForm = ({ order }) => {
  const serverUrl = useContext(ServerUrlContext);
  const [user] = useAuthState(auth);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [errorText, setErrorText] = useState("");
  const [clientSecret, setclientSecret] = useState("");

  useEffect(() => {
    const url = `${serverUrl}/create-payment-intent`;
    axios
      .post(url, { price: order.price })
      .then((data) => setclientSecret(data.data.clientSecret));
  }, [order, serverUrl]);

  console.log(clientSecret);

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
            name: order.user,
            email: order.email,
          },
        },
      });

    setErrorText(intentError?.message || "");
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