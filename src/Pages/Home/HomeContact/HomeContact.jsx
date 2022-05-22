import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const HomeContact = () => {
  return (
    <div className="container px-3 mx-auto my-36">
      <div className="lg:flex justify-center items-center gap-16 mb-24">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral mb-20">
            Office Contact
          </h2>
          <p className="text-sm text-accent ">
            We are the manufacturer of car tyres, engine parts, mirror and more.
            You can find your desire product for your company from us.
          </p>
          <p
            className="text-neutral text-lg
           font-medium my-6"
          >
            Please contact us for any enquiry
          </p>
          <div className="flex justify-start items-center my-3 gap-6">
            <FontAwesomeIcon
              className="text-3xl text-primary"
              icon={faLocation}
            />
            <p className="text-neutral font-bold text-lg">
              350 Flatbush ave New York
              <br />{" "}
              <span className="text-accent font-normal">NY 10018 USA.</span>
            </p>
          </div>
          <div className="flex justify-start items-center my-3 gap-6">
            <FontAwesomeIcon
              className="text-3xl text-primary"
              icon={faEnvelope}
            />
            <p className="text-neutral font-bold text-lg">
              caraccesories@gmail.com
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-primary p-8 rounded-xl shadow-xl mt-10 lg:mt-0">
          <h2 className="text-2xl font-bold text-white capitalize">
            Send us a message
          </h2>
          <form>
            <label className="label">
              <span className="label-text capitalize text-white">
                your email
              </span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-accent rounded-md input-primary w-full"
            />
            <label className="label">
              <span className="label-text capitalize text-white">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-accent rounded-md input-primary w-full"
            />
            <label className="label">
              <span className="label-text capitalize text-white">Message</span>
            </label>
            <textarea
              className="textarea textarea-primary w-full"
              placeholder="Message"
            ></textarea>
            <input
              type="submit"
              value="send"
              className="capitalize text-white bg-[#333] hover:bg-white hover:text-[#333] border-2 border-primary hover:border-white cursor-pointer duration-200 rounded-lg font-semibold px-10 py-3 mt-5"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
