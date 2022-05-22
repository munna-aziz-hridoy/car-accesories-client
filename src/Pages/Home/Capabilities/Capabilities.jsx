import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faIndustry,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import capabilities from "../../../Assets/images/capabilites.jpg";

import React from "react";

const serviceProcces = [
  {
    title: "We Design",
    details: `We design our product with our own designer and engineer. They
              design the product as the car need. If you are looking for custom
              design for your company, you can contact with us.`,
    icon: faPaintBrush,
  },
  {
    title: "We Build",
    details: `We build our product with our mechine and worker. They
              manufacture the product as the car need. If you are looking for custom
              system for your company, you can contact with us.`,
    icon: faIndustry,
  },
  {
    title: "We Shipped",
    details: `Within 24 hours of your order, we shipped our product in your country. You can have your product after ordering 72 hours(sometime it takes more time for custom checking in your country, it's generally depend on your country sitation). After that you can see what product we provide you.`,
    icon: faTruckRampBox,
  },
];

const Capabilities = () => {
  return (
    <div className="my-32">
      <div className="hero  bg-base-100">
        <div className="hero-content flex-col-reverse lg:flex-row gap-16">
          <img
            src={capabilities}
            className="w-full lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-bold text-neutral">
              Our Capabilities
            </h1>
            <p className="py-6 w-1/2">
              Stop by today; our talented staff will be happy to help you find
              what you’re searching for!
              <span className="block my-3">CEO: Munna Aziz</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container px-3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {serviceProcces.map((item, index) => {
          const { title, details, icon } = item;
          return (
            <div
              key={index}
              className="card bg-white hover:bg-primary hover:text-white shadow-lg duration-300 hover:-translate-y-5 hover:shadow-2xl service-proccess-card"
            >
              <figure className="px-10 pt-10">
                <FontAwesomeIcon
                  className="text-5xl text-primary"
                  icon={icon}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Capabilities;
