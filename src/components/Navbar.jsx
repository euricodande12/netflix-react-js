import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="capitalize text-red-600 text-4xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>
      <div>
        <Link to='/login'>
        <button className="text-white pr-4">Sign In</button>
        </Link>
        <Link to='/signup'>
        <button className="bg-red-600 hover:bg-red-700 transition-all px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
