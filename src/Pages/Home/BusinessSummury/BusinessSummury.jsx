import React from "react";
import businessImg from "../../../Assets/images/business.jpg";

const BusinessSummury = () => {
  return (
    <div className="container mx-auto my-44">
      <h2 className="text-5xl font-bold text-neutral text-center my-20">
        Business Summury
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center items-center gap-4">
          <div className=" flex justify-center items-center flex-col gap-10 w-full">
            <div className="w-[285px] h-[285px] bg-white rounded-xl shadow-lg p-3 flex flex-col justify-center items-center">
              <h2 className="text-5xl font-bold text-primary">100+</h2>
              <p className="text-2xl font-bold capitalize text-neutral mt-5">
                customer
              </p>
            </div>
            <div className="w-[285px] h-[285px] bg-white rounded-xl shadow-lg p-3 flex flex-col justify-center items-center">
              <h2 className="text-5xl font-bold text-primary">120M+</h2>
              <p className="text-2xl font-bold capitalize text-neutral mt-5">
                Annual revenue
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-col gap-10 w-full">
            <div className="w-[285px] h-[285px] bg-white rounded-xl shadow-lg p-3 flex flex-col justify-center items-center">
              <h2 className="text-5xl font-bold text-primary">33K+</h2>
              <p className="text-2xl font-bold capitalize text-neutral mt-5">
                Reviews
              </p>
            </div>
            <div className="w-[285px] h-[285px] bg-white rounded-xl shadow-lg p-3 flex flex-col justify-center items-center">
              <h2 className="text-5xl font-bold text-primary">50+</h2>
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
