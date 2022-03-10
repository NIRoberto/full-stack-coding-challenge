import React from "react";
// import { BiMenuAltLeft } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";

const NavBar = () => {
  return (
    <>
      <header className="flex p-2 sm:p-6  justify-between  content-center ">
        <div className="flex">
          <HiMenuAlt1 color="#038858" className="text-3xl" />
          <span className=" text-xl sm:text-2xl font-bold"> PayStack</span>
        </div>
        <nav>
          <ul className="flex">
            <li className="mr-2 sm:mr-6">
              <a href="#Link" className=" text-sm sm:text-xl lg:text-xl">
                Login
              </a>
            </li>
            <li>
              <a
                href="#link"
                className="bg-btn px-2 sm:px-4 lg:px-6  py-1 sm:py-2 lg:py-3  rounded-lg  mt-1 text-black"
              >
                <button className=" text-sm sm:text-base">Create account</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
