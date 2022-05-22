import React from "react";
import { Pagination, FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const reviews = [
  {
    id: "fca02f18-f4a6-45d3-bf19-540f57179926",
    name: "Sharon Bryant",
    text: "I’m completely in love with this camera, it’s easy to use, the auto focus takes a little time which makes me shift to manual focus but don’t let that be an inconvenient, everything else with this camera is amazing and I couldn’t be happier! I’m a complete beginner and this camera just makes it so easy!",
    rating: 4.5,
    image: "https://i.ibb.co/FxfB2sN/12.png",
  },
  {
    id: "15bda785-ced7-46e1-8343-44608ec2b3c2",
    name: "Jerry Perry",
    text: "This camera would be okay if it wasn’t for the fact that my battery is never sufficiently charged. Be it a battery issue, or a charger issue, it is not good when I’m outdoors trying to photography wildlife and the battery drops so quickly. I will say, the photo quality isn’t terrible, but be aware this camera is very loud.",
    rating: 4.5,
    image: "https://i.ibb.co/P5ryZrq/11.png",
  },
  {
    id: "974be733-4bc9-4ba6-a9a0-502c5cdb2d2d",
    name: "Katherine Green",
    text: "I love this camera, I’m new to photography and it’s easy to learn with camera. I really just have one issue, I wish the camera had an audio input for an external mic other than that it’s awesome thus far.",
    rating: 4.5,
    image: "https://i.ibb.co/bzXJPKz/10.png",
  },
];

const Reviews = () => {
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
