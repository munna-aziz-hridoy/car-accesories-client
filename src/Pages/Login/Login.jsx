import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // const [] = useSignI;
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="w-[92%] max-w-[390px] mx-auto rounded-xl shadow-md px-4 py-5 ">
        <h2 className="text-xl font-semibold text-primary capitalize text-center mb-8">
          login
        </h2>

        <form>
          <label className="label">
            <span className="label-text text-gray-300 font-semibold">
              Email
            </span>
          </label>
          <input
            //   {...register("email", {
            //     required: "Please Enter Your Email",
            //     pattern: {
            //       value:
            //         /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            //       message: "Please Enter a Valid Email",
            //     },
            //   })}
            type="text"
            placeholder="Your emal"
            className="input input-bordered input-accent w-full rounded-lg"
          />
          {/* {errors.email ? (
              <p className="text-xs text-red-300 my-2">
                {errors?.email?.message}
              </p>
            ) : (
              ""
            )} */}
          <label className="label">
            <span className="label-text text-gray-300 font-semibold">
              Password
            </span>
          </label>
          <input
            //   {...register("password", {
            //     required: "Please Enter Your Password", // JS only: <p>error message</p> TS only support string
            //   })}
            type="password"
            placeholder="Your password"
            className="input input-bordered input-accent  w-full rounded-lg"
          />
          {/* {errors.password ? (
              <p className="text-xs text-red-300 my-2">
                {errors?.password?.message}
              </p>
            ) : (
              ""
            )} */}
          <p className="capitalize text-neutral font-medium text-xs mt-5">
            forgot password?
          </p>
          {/* {loggedInError ? (
              <p className="text-xs text-red-300">
                {loggedInError.message.split("/")[1]}
              </p>
            ) : (
              ""
            )} */}
          <input
            type="submit"
            value="Login"
            className="text-white  border-2  bg-primary hover:bg-[#333] w-full h-11 rounded-lg mt-6 cursor-pointer duration-200 border-primary hover:border-[#333]"
          />
          <p className="font-medium text-accent capitalize text-center my-2">
            new to car accesories?{" "}
            <Link to="/register" className="text-neutral">
              create new account
            </Link>
          </p>
        </form>
        <div className="divider mt-10">OR</div>
      </div>
    </div>
  );
};

export default Login;
