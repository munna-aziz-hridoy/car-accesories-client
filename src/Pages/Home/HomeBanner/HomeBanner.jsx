import React from "react";
import { Pagination, Autoplay, Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import banner1 from "../../../Assets/images/banner-(1).jpg";
import banner2 from "../../../Assets/images/banner-(2).jpg";
import banner3 from "../../../Assets/images/banner-(3).jpg";

const HomeBanner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        scrollbar={{ draggable: true }}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay, Navigation, Scrollbar, A11y]}
      >
        {/* slider one */}
        <SwiperSlide className="relative">
          <img src={banner1} alt="" className="w-full" />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
            <h2 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
              we are here to store the product you need
            </h2>
            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
              Our business is to store all the accesories and phones that you
              need in your daily life. We are the distrubutor all over the
              country
            </p>
          </div>
        </SwiperSlide>

        {/* slider two */}
        <SwiperSlide className="relative">
          <img src={banner2} alt="" className="w-full" />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
            <h2 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
              the uniqe of collection
            </h2>
            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
              We are not any casual dealer. Our employee stores the collection
              and supply as wholesale.
            </p>
          </div>
        </SwiperSlide>

        {/* slider three */}
        <SwiperSlide className="relative">
          <img src={banner3} alt="" className="w-full" />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:flex flex-col items-center justify-center gap-5">
            <h2 className="text-slate-100 font-bold text-3xl lg:text-6xl capitalize text-center">
              safe and all product are kept carefully
            </h2>
            <p className="text-slate-300 font-medium text-sm lg:text-xl text-center">
              Our policy is to keep the product as like new. We always try to
              give a best services and quality product for out customer.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBanner;
