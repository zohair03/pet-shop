import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-orange-300 flex justify-around p-4">
      <div className="w-full flex justify-between gap-6 text-white font-medium text-lg">
        <div>
          <Link to="/">
            <img
              src="/images/logo.jpeg"
              alt="pet shop logo"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className="flex justify-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <div className="flex justify-center gap-6">
          <Link className="bg-orange-100 border-r-8" to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
