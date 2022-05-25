import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const resolve = useResolvedPath(to);
  const match = useMatch({ path: resolve.pathname, end: true });
  return (
    <li
      className={`capitalize  hover:bg-[#333] hover:text-slate-100 duration-200 rounded-lg font-semibold ${
        match ? "bg-primary text-white" : "text-primary"
      }`}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default CustomLink;
