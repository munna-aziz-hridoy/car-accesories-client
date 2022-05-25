import axios from "axios";
import React, { useContext } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { ServerUrlContext } from "../..";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, , error] = useSignInWithGoogle(auth);
  const [token] = useToken(user?.user?.email);
  const serverUrl = useContext(ServerUrlContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    const email = user.user.email;
    const name = user.user.displayName;
    const image = user.user.photoURL;
    axios.put(`${serverUrl}/addUser`, {
      name,
      email,
      image,
      address: "",
      phone: "",
      country: "",
    });
  }

  if (token) {
    localStorage.setItem("accessToken", token);
    navigate(from, { replace: true });
  }

  return (
    <>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-accent rounded-md uppercase w-full"
      >
        continue with google
      </button>
      {error ? (
        <p className="text-xs font-medium text-red-300 text-center my-2">
          {error?.message.split("/")[1]}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default SocialLogin;
