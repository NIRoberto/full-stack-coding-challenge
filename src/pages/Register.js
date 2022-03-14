import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="bg-main min-h-screen flex items-center flex-col content-center py-32  p-0 box-border">
      <Link to="/">
        <div className="flex mb-8 ">
          <HiMenuAlt1 color="#038858" className="text-3xl" />
          <span className=" text-xl sm:text-2xl font-bold"> PayStack</span>
        </div>
      </Link>
      <div className="flex item-center flex-col content-center justify-center">
        <div className="bg-w shadow-lg w-full md:w-full rounded-lg p-2 md:p-8">
          <h1 className="text-xl md:text-2xl text-center p-2  md:p-8">
            Create a free account
          </h1>
          <form className="flex flex-col ">
            <input
              type="text"
              className="border-2 border-grey w-full md:w-96  rounded-md sm:rounded-lg my-4 border-solid py-2  md:py-3 px-4"
              placeholder="Enter email"
            />
            <input
              type="text"
              className="border-2 border-grey w-full md:w-96  rounded-md sm:rounded-lg my-4 border-solid py-2 md:py-3 px-4"
              placeholder="Enter password"
            />
            <div className='flex'>
              <input
                type="text"
                className="border-2 basis-1/5 border-grey w-full md:w-96  rounded-md sm:rounded-lg my-4 border-solid py-2  md:py-3 px-4"
                placeholder="Enter email"
              />
              <input
                type="text"
                className="border-2 basis-4/5 border-grey w-full md:w-96  rounded-md sm:rounded-lg my-4 border-solid py-2 md:py-3 px-4"
                placeholder="Enter password"
              />
            </div>
            <input
              type="text"
              className="border-2 border-grey w-full md:w-96  rounded-md sm:rounded-lg my-4 border-solid py-2  md:py-3 px-4"
              placeholder="Enter email"
            />
            <input
              type="text"
              className="border-2 border-grey w-full md:w-96  rounded-md sm:rounded-lg my-4 border-solid py-2 md:py-3 px-4"
              placeholder="Enter password"
            />

            <button className="bg-btn px-2 my-4 sm:px-4 lg:px-6  py-2 sm:py-2 lg:py-3 w-full mdL:w-96 rounded-md md:rounded-lg  mt-1 text-black">
              Create your account
            </button>
          </form>
        </div>
      </div>
      <div className="p-4 text-base md:text-xl">
        <p>
          New to paystack{" "}
          <Link to="/login">
            <span className="font-bold">Login</span>
          </Link>
          <br />
        </p>
      </div>
    </div>
  );
}

export default Register