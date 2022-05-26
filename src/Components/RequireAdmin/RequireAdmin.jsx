import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Spinner from "../Spinner/Spinner";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, adminLoading] = useAdmin(user?.email);

  if (loading || adminLoading) {
    return <Spinner />;
  }

  if (!isAdmin) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    toast.error("You are admin. You dont have users page access");
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAdmin;
