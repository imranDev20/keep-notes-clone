import React from "react";
import { FaBeer } from "react-icons/fa";
import { BsFileEarmarkLockFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full py-5 border-b">
      <div className="container mx-auto px-10">
        <h1 className="text-neutral-600 text-xl flex items-center">
          <BsFileEarmarkLockFill className="text-yellow-400 mr-2 text-3xl" />
          Rakhun
        </h1>
        {/* <div>avatar</div> */}
      </div>
    </header>
  );
};

export default Header;
