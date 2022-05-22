import React from "react";

const AddReview = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-20 capitalize">
        add a review
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="label">
          <span className="label-text capitalize text-neutral">your name</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered rounded-md input-primary w-full"
        />
        <label className="label">
          <span className="label-text capitalize text-neutral">rating</span>
        </label>

        <input
          type="number"
          placeholder="rating"
          className="input input-bordered rounded-md input-primary w-full"
        />
        <label className="label">
          <span className="label-text capitalize text-neutral">Message</span>
        </label>
        <textarea
          className="textarea textarea-primary w-full"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          value="Post Review"
          className="capitalize text-white bg-[#333] hover:bg-white hover:text-[#333] border-2 border-primary hover:border-white cursor-pointer duration-200 rounded-lg font-semibold px-10 py-3 mt-5"
        />
      </form>
    </div>
  );
};

export default AddReview;
