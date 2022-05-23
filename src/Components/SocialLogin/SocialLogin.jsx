import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, , error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (user) {
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
