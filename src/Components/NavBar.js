import React from "react";
// import { BiMenuAltLeft } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";

const NavBar = () => {
  return (
    <>
      <header className="flex p-6  justify-between  content-center ">
        <div className="flex">
          <HiMenuAlt1 color="#038858" className="text-3xl" />
          <span className="text-2xl font-bold"> PayStack</span>
        </div>
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <a href="#Link" className="text-xl">
                Login
              </a>
            </li>
            <li>
              <a
                href="#link"
                className="bg-btn px-6 py-3  rounded-lg  mt-1 text-black"
              >
                <button className="">Create free account</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
