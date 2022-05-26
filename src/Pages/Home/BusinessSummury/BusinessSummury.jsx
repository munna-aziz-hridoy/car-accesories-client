import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleArrowsLeftRight,
  faMoneyCheckDollar,
  faFlagCheckered,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import businessImg from "../../../Assets/images/business.jpg";

const BusinessSummury = () => {
  return (
    <div className="container px-3 mx-auto my-44">
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-20">
        Business Summury
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="sm:flex justify-center items-center gap-4">
          <div className=" flex justify-center items-center flex-col gap-10 w-full">
            <div className="w-[285px] h-[285px] bg-white rounded-xl shadow-lg p-3 flex flex-col justify-center items-center">
              <FontAwesomeIcon
                className="text-4xl md:text-6xl text-primary my-2"
                icon={faPeopleArrowsLeftRight}
              />
              <h2 className="text-3xl  font-bold text-neutral">100+</h2>
              <p className="text-2xl font-bold capitalize text-neutral mt-5">
                customer
              </p>
            </div>
            <div className="w-[285px] h-[285px] bg-white rounded-xl shadow-lg p-3 flex flex-col justify-center items-center">
              <FontAwesomeIcon
                className="text-4xl md:text-6xl text-primary my-2"
                icon={faMoneyCheckDollar}
              />
              <h2 className="text-3xl  font-bold text-neutral">120M+</h2>
              <p className="text-2xl font-bold capitalize text-neutral mt-5">
                Annual revenue
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-col gap-10 w-full mt-5 sm:mt-0">
            <div className="w-[285px] h-[285px] bg-white rounded-xl shadow-lg p-3 flex flex-col justify-center items-center">
              <FontAwesomeIcon
                className="text-4xl md:text-6xl text-primary my-2"
                icon={faFlagCheckered}
              />
              <h2 className="text-3xl  font-bold text-neutral">33K+</h2>
              <p className="text-2xl font-bold capitalize text-neutral mt-5">
                Reviews
              </p>
            </div>
            <div className="w-[285px] h-[285px] bg-white rounded-xl shadow-lg p-3 flex flex-col justify-center items-center">
              <FontAwesomeIcon
                className="text-4xl md:text-6xl text-primary my-2"
                icon={faScrewdriverWrench}
              />
              <h2 className="text-3xl  font-bold text-neutral">50+</h2>
              <p className="text-2xl font-bold capitalize text-neutral mt-5">
                tools
              </p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <img src={businessImg} alt="" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default BusinessSummury;
