import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomTitle from "../../Components/CustomTitle/CustomTitle";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Spinner from "../../Components/Spinner/Spinner";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const [signInWithEmailAndPassword, , signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user?.email);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password).then(() => {
      reset();
    });
  };

  const from = location.state?.from?.pathname || "/";

  if (loading || signInLoading) {
    return <Spinner />;
  }

  if (token) {
    localStorage.setItem("accessToken", token);
    navigate(from);
  }

  return (
    <>
      <CustomTitle page="Login" />
      <div className="h-[90vh] w-full flex justify-center items-center">
        <div className="w-[92%] max-w-[390px] mx-auto rounded-xl shadow-md px-4 py-5 ">
          <h2 className="text-xl font-semibold text-primary capitalize text-center mb-8">
            login
          </h2>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <label className="label">
              <span className="label-text text-gray-300 font-semibold">
                Email
              </span>
            </label>
            <input
              {...register("email", {
                required: "Please Enter Your Email",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please Enter a Valid Email",
                },
              })}
              type="text"
              placeholder="Your email"
              className="input input-bordered input-accent w-full rounded-lg"
            />
            {errors.email ? (
              <p className="text-xs text-red-300 my-2">
                {errors?.email?.message}
              </p>
            ) : (
              ""
            )}
            <label className="label">
              <span className="label-text text-gray-300 font-semibold">
                Password
              </span>
            </label>
            <input
              {...register("password", {
                required: "Please Enter Your Password",
                pattern: {
                  value: /^(?=.*\d).{6,}$/,
                  message: "Password must be at least 6 character",
                },
              })}
              type="password"
              placeholder="Your password"
              className="input input-bordered input-accent  w-full rounded-lg"
            />
            {errors.password ? (
              <p className="text-xs text-red-300 my-2">
                {errors?.password?.message}
              </p>
            ) : (
              ""
            )}
            <p className="capitalize text-neutral font-medium text-xs mt-5">
              forgot password?
            </p>
            {signInError ? (
              <p className="text-xs text-red-300">
                {signInError.message.split("/")[1]}
              </p>
            ) : (
              ""
            )}
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
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
