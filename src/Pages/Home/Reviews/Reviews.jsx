import React, { useContext, useEffect, useState } from "react";
import { Pagination, FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { ServerUrlContext } from "../../..";

const Reviews = () => {
  const serverUrl = useContext(ServerUrlContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`${serverUrl}/reviews`).then((data) => setReviews(data.data));
  }, [serverUrl]);

  return (
    <div className="container px-3 mx-auto mt-44">
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-20">
        Customer Reviews
      </h2>
      <div className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 3500 }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper h-[420px]"
        >
          {reviews?.map((review, index) => {
            const { name, text, rating, image } = review;
            return (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-start flex-col gap-3 p-3 rounded-lg shadow-lg h-[360px] bg-white">
                  <div className="w-[80px] h-[80px] p-1 flex justify-center items-center">
                    <img
                      src={image}
                      alt=""
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <p className="text-accent text-sm text-justify">{text}</p>
                  <p className="text-xl font-semibold text-neutral capitalize">
                    name: <span className="text-primary font-bold">{name}</span>
                  </p>
                  <p className="font-semibold text-neutral capitalize">
                    rating:{" "}
                    <span className="text-primary font-bold">{rating}</span>
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => {
          const { name, text, rating, image } = review;
          return (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-start flex-col gap-3 p-3 rounded-lg shadow-lg h-[360px] bg-white">
                <div className="w-[80px] h-[80px] p-1 flex justify-center items-center">
                  <img src={image} alt="" className="rounded-full w-full" />
                </div>
                <p className="text-accent text-sm text-justify">{text}</p>
                <p className="text-xl font-semibold text-neutral capitalize">
                  name: <span className="text-primary font-bold">{name}</span>
                </p>
                <p className="font-semibold text-neutral capitalize">
                  rating:{" "}
                  <span className="text-primary font-bold">{rating}</span>
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
