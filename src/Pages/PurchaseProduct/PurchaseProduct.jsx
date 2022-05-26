import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ServerUrlContext } from "../..";
import Footer from "../../Components/Footer/Footer";
import PurchaseModal from "../../Components/PurchaseModal/PurchaseModal";
import Spinner from "../../Components/Spinner/Spinner";
import auth from "../../firebase.init";

const PurchaseProduct = () => {
  const [user] = useAuthState(auth);
  const [openModal, setOpenModal] = useState(false);
  const serverUrl = useContext(ServerUrlContext);
  const { id } = useParams();
  const url = `${serverUrl}/singleProduct?id=${id}&email=${user?.email}`;

  const { data: product, isLoading } = useQuery(["product", url], () => {
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

  const {
    name,
    image,
    details,
    price,
    availableQuantity,
    minOrderQuantity,
    madeFor,
  } = product;

  return (
    <>
      <div className="container p-5  mx-auto md:flex justify-between items-center gap-16 my-40">
        <img src={image} alt="" className="md:w-1/2 rounded-xl shadow-xl" />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#211036] capitalize my-4 mt-5">
            {name}
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-lg text-neutral capitalize">{details}</p>
            <p className="text-xl text-neutral capitalize font-semibold">
              price: <span className="text-primary">${price}</span>
            </p>
            <p className="text-lg text-neutral capitalize font-semibold">
              available quantity:{" "}
              <span className="text-primary">{availableQuantity}</span>
            </p>
            <p className="text-lg text-neutral capitalize font-semibold">
              minimun order:{" "}
              <span className="text-primary">{minOrderQuantity}</span>
            </p>

            <p className="text-accent capitalize font-medium">
              made for: {madeFor}
            </p>
          </div>
          <label
            onClick={() => setOpenModal(true)}
            htmlFor="purchase-modal"
            className="text-semibold capitalize bg-primary hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-primary border-2 border-primary my-5 inline-block cursor-pointer"
          >
            Order Now
          </label>
        </div>
      </div>
      {openModal && (
        <PurchaseModal setOpenModal={setOpenModal} product={product} />
      )}
      <Footer />
    </>
  );
};

export default PurchaseProduct;
