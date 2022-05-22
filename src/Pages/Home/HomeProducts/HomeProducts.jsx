import React from "react";

const products = [
  {
    name: "MRF car tyre",
    image: "https://i.ibb.co/zxKTHdz/11.jpg",
    details:
      "MRF car typre, dimantion 117/30. It's made of a nice curbor fiber to prevent the accidient.",
    price: 260,
    availableQuantity: 127000,
    minOrderQuantity: 5000,
    madeFor: ["Toyota", "BMW", "Lamborgini", "Audi", "Range Rover"],
  },
  {
    name: "Digital side mirror",
    image: "https://i.ibb.co/ThcsyVq/21.jpg",
    details:
      "Digital mirror, made of pure silicon glass, touch sensitive, show the speed of behind car, alarm on close call.",
    price: 85,
    availableQuantity: 247000,
    minOrderQuantity: 20000,
    madeFor: [
      "Axio",
      "Corola",
      "Lamborgini",
      "Marcetis",
      "Range Rover",
      "Maclrn",
    ],
  },
  {
    name: "D/76 model engine",
    image: "https://i.ibb.co/FHD85g1/31.jpg",
    details:
      "340 horse power engine, match with all D/76 model chesis no. Fuel efficient, made of pure metal, rpm up to 30000",
    price: 85,
    availableQuantity: 85000,
    minOrderQuantity: 200,
    madeFor: ["all D/76 chesis"],
  },
];

const HomeProducts = () => {
  return (
    <div className="container px-3 mx-auto my-40">
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 ">
        {products.map((product, index) => (
          <div
            key={index}
            class="card card-compact bg-base-100 hover:bg-white shadow hover:-translate-y-8 border-8 border-transparent hover:border-primary hover:shadow-2xl hover:shadow-[#ff075541] duration-300"
          >
            <div className="p-5">
              <img
                src={product.image}
                alt="Shoes"
                className="w-full rounded-lg"
              />
            </div>
            <div class="card-body mt-3">
              <h2 class="card-title font-bold text-neutral capitalize">
                {product.name}
              </h2>
              <div className="w-32 h-1 rounded-3xl bg-primary"></div>
              <p className="text-sm text-accent mt-4">{product.details}</p>
              <p className="text-[15px] text-neutral capitalize font-medium">
                available quantity:
                <span className="text-primary font-bold text-lg">
                  {product.availableQuantity}{" "}
                </span>
                units
              </p>
              <p className="text-[15px] text-neutral capitalize font-medium">
                minimun order:
                <span className="text-primary font-bold text-lg">
                  {product.minOrderQuantity}{" "}
                </span>
                units
              </p>
              <p className="text-[15px] text-neutral capitalize font-medium">
                price:{" "}
                <span className="text-primary font-bold text-lg">
                  ${product.price}
                </span>
                /per units
              </p>
              <p className="text-accent capitalize font-medium">
                made for:{" "}
                {product.madeFor.map((item, index) => (
                  <span key={index}>{item}, </span>
                ))}
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary text-white hover:bg-[#333] hover:text-white px-8">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-16">
        <button class="btn btn-outline text-primary capitalize px-12">
          all products
        </button>
      </div>
    </div>
  );
};

export default HomeProducts;

/*
https://i.ibb.co/zxKTHdz/11.jpg
https://i.ibb.co/ThcsyVq/21.jpg
https://i.ibb.co/FHD85g1/31.jpg
*/
