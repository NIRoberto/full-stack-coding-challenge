import React from "react";
import NavBar from "../Components/NavBar";
import img from "../assets/undraw_online_payments_re_y8f2.svg";
import img2 from "../assets/undraw_stripe_payments_re_chlm.svg";
import img3 from "../assets/world.svg";
import img4 from "../assets/enterp.svg";
import img5 from "../assets/organ.svg";
import { AiOutlineRight } from "react-icons/ai";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main className="flex p-4 content-center justify-center items-center h-screen">
        <div className="basis-2/4  p-4 h-full pt-32 ">
          <h1 className="font-bold text-6xl py-5 px-1 ">
            Modern online and offline payments
          </h1>
          <p className="text-black  text-xl py-8">
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </p>
          <div className="flex content-center">
            <button className="bg-btn px-10 py-4  rounded-lg  mt-1 text-black">
              Create account
            </button>
            <span className="text-center ml-4 mt-5">Or contact for sales</span>
          </div>
        </div>
        <div className="basis-2/4">
          <img src={img} alt="" className="w-4/5 h-4/5" />
        </div>
      </main>
      <div className="bg-w h-screen p-4 flex flex-col">
        <div>
          <h1 className="font-bold text-4xl py-5 px-1 ">
            Simple, easy payments
          </h1>
          <p className="text-black  text-xl py-8 px-1">
            Building a business is hard. Getting paid shouldn't be.
          </p>
        </div>
        <div className="flex">
          <div className="basis-2/4">
            <img src={img2} alt="" />
          </div>
          <div className="basis-2/4 flex flex-col">
            <h1 className="font-bold text-4xl py-5 px-1 ">
              Delight customers with a seamless payments experience
            </h1>
            <p className="text-black  text-xl py-8 px-1">
              Give your customers the gift of modern, frictionless, painless
              payments. Integrate Paystack once and let your customers pay you
              however they want.
            </p>
            <ul className="grid-cols-2  grid  list-disc px-6">
              <li>Mobile Money</li>
              <li>Aitel Money</li>
              <li>Bank Transfer</li>
              <li>Card</li>
            </ul>
            <h1 className="font-bold text-4xl py-5 px-1 ">
              Enjoy phenomenal transaction success rates
            </h1>
            <p className="text-black  text-xl py-8 px-1">
              We automatically route payments through the most optimal channels,
              ensuring the highest transaction success rates in the market.
            </p>
          </div>
        </div>
      </div>
      <main className="p-4">
        <h1 className="font-bold text-4xl py-5 px-1 ">
          Trusted by 60,000+ businesses
        </h1>
        <p className="text-black  text-xl py-8 px-1">
          Thousands of organizations of all sizes trust Paystack to grow their
          business.
        </p>
        <section className="grid grid-cols-3 gap-4 grid-rows-1 my-20">
          <article className="flex flex-col p-4 item-center justify-between shadow-lg rounded-lg bg-w">
            <div className="basis-2/5">
              <img src={img3} alt="" className="h-40 w-40" />
            </div>
            <div className="basis-2/5">
              <h1 className="font-bold text-2xl py-5 px-1 ">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-black  text-xl py-4 px-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, saepe.
              </p>
            </div>
            <div className="basis">
              <a href="#link" className="basis flex text-btn">
                {/* <span> */}
                <AiOutlineRight className="mt-5 border-2 text-2xl border-btn border-solid rounded-full" />
                {/* </span> */}

                <span className="text-black  text-xl py-4 ml-2 mt-1 underline px-1">
                  Learn more
                </span>
              </a>
            </div>
          </article>
          <article className="flex flex-col p-4 item-center justify-between shadow-lg rounded-lg bg-w">
            <div className="basis-2/5">
              <img src={img4} alt="" className="h-40 w-40" />
            </div>
            <div className="basis-2/5">
              <h1 className="font-bold text-2xl py-5 px-1 ">
                Lorem, ipsum dolor.
              </h1>

              <p className="text-black  text-xl py-4 px-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, saepe.
              </p>
            </div>
            <div>
              <a href="#link" className="basis flex text-btn">
                {/* <span> */}
                <AiOutlineRight className="mt-5 border-2 text-2xl border-btn border-solid rounded-full" />
                {/* </span> */}

                <span className="text-black  text-xl py-4 ml-2 mt-1 underline px-1">
                  Learn more
                </span>
              </a>
            </div>
          </article>
          <article className="flex flex-col p-4 item-center justify-between shadow-lg rounded-lg  bg-w">
            <div className="basis-2/5">
              <img src={img5} alt="" className="h-40 w-40" />
            </div>
            <div className="basis-2/5">
              <h1 className="font-bold text-2xl py-5 px-1 ">
                Lorem, ipsum dolor.
              </h1>

              <p className="text-black  text-xl py-4 px-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, saepe.
              </p>
            </div>
            <div>
              <a href="#link" className="basis flex text-btn">
                {/* <span> */}
                <AiOutlineRight className="mt-5 border-2 text-2xl border-btn border-solid rounded-full" />
                {/* </span> */}

                <span className="text-black  text-xl py-4 ml-2 mt-1 underline px-1">
                  Learn more
                </span>
              </a>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
