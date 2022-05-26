import React from "react";
import CustomTitle from "../../Components/CustomTitle/CustomTitle";
import myPhoto from "../../Assets/images/aboutImg.png";

const Portfolio = () => {
  return (
    <div className="container mx-auto p-3">
      <CustomTitle page="Portfolio" />
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
        My portfolio
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-10">
        <div className="w-full md:w-1/2 rounded-lg">
          <img src={myPhoto} alt="" className="w-2/3 rounded-lg mx-auto" />
        </div>
        <div className="w-full md:w-1/2 rounded-lg">
          <h2 className="text-2xl md:text-4xl text-primary my-4 font-bold">
            Munna Aziz
          </h2>
          <p className="font-semibold text-neutral my-3 text-lg">
            <span className="font-bold text-primary my-4">Email: </span>
            munna.aziz.hridoy@gmail.com
          </p>
          <p className="font-semibold text-neutral my-3 text-lg">
            <span className="font-bold text-primary my-4">Phone: </span>
            +8801312356293
          </p>
        </div>
      </div>

      <div className="my-14 p-4">
        <h2 className="text-3xl font-bold text-primary my-7">Career Object</h2>
        <p className="text-lg font-semibold text-neutral">
          Currently, I am developing with the MERN stack. When it comes to my
          responsibilities, I am dedicated and passionate. I find it very
          enjoyable to take on new challenges since it makes me more bold and
          self-confident. In my job as a developer, I'm always eager to learn
          new things.
        </p>
      </div>

      <div className="my-14 p-4">
        <h2 className="text-3xl font-bold text-primary my-7">Skiils</h2>
        <p className="text-lg font-semibold text-neutral my-7">
          <span className="text-xl font-bold text-black">#Experties: </span>
          HTML, CSS, JavaScript (ES6), React JS, DaisyUI
        </p>
        <p className="text-lg font-semibold text-neutral my-7">
          <span className="text-xl font-bold text-black">#Comfortable: </span>
          Node JS, Express JS, MongoDB, Axios, Stripe
        </p>
        <p className="text-lg font-semibold text-neutral my-7">
          <span className="text-xl font-bold text-black">#Fimiliar: </span>
          Material UI, Ant Design
        </p>
      </div>

      <div className="my-14 p-4">
        <h2 className="text-3xl font-bold text-primary my-7">Project</h2>
        <p className="text-lg font-semibold text-neutral my-7">
          <span className="text-xl font-bold text-black mb-7 block">
            #Ephoneo - Inventory management system:{" "}
          </span>
          <span className="block">
            1. User can see all product that stock on inventory
          </span>
          <span className="block">
            2. User can update and delete stock if want
          </span>
          <span className="block">
            3. User can add any product and it will show in the product page
          </span>
        </p>
        <p className="text-lg font-semibold text-neutral my-7">
          <span className="text-xl font-bold text-black mb-7 block">
            #Tour guide - Tour guide app:{" "}
          </span>
          <span className="block">1. User can select any tour plan</span>
          <span className="block">
            2. To purchase a tour plan user must have to login
          </span>
          <span className="block">
            3. User will redirect to the checkout page after purchase a plan
          </span>
        </p>
        <p className="text-lg font-semibold text-neutral my-7">
          <span className="text-xl font-bold text-black mb-7 block">
            #Doctors Portal - Hospital management app{" "}
          </span>
          <span className="block">
            1. Patient can login and book any appointment
          </span>
          <span className="block">
            2. Admin can add doctor's and Mange any user
          </span>
          <span className="block">3. Payment gateway (Stripe)</span>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
