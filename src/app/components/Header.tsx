"use client";
import React from "react";
import { useState } from "react";
export default function Header() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    console.log("hello");
    if (index <= 0) {
      setIndex(1);
      return;
    }
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (index >= 2) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  return (
    <div className="relative max-w-7xl mx-auto ">
      <div
        onClick={() => handlePrev}
        className="cursor-pointer absolute left-4 top-1/2 z-40 text-4xl bg-zinc-900 text-white h-10 w-10 grid place-content-center rounded-full"
      >
        {" "}
        {"<"}{" "}
      </div>
      {index === 0 && <Card1 />} {index === 1 && <Card2 />}{" "}
      {index === 2 && <Card3 />}{" "}
      <div
        onClick={() => handleNext}
        className="cursor-pointer absolute right-4 top-1/2 z-40 text-4xl bg-zinc-900 text-white h-10 w-10 grid place-content-center rounded-full"
      >
        {" "}
        {">"}{" "}
      </div>
    </div>
  );
}

const Card1 = () => {
  return (
    <section className=" relative   z-10 py-24    max-w-7xl  rounded-3xl bg-pink-200   mx-auto   border-black    px-24 ">
      <div className="absolute right-48 top-24 py-24 px-24 bg-green-500 -z-10 rounded-full "></div>

      <div className="absolute right-24 top-24 py-24 px-24 bg-red-500 -z-10 rounded-full "></div>
      <div className="absolute right-36 top-36 py-24 px-24 bg-blue-500 -z-10 rounded-full "></div>

      <h1 className=" text-6xl  font-bold  w-fit px-2   tracking-tighter ">
        Basic Japanse colors
      </h1>
      <p className="poppins text-lg w-fit py-1 text-zinc-700 px-2">
        Pick up on some basic colors for your journey
      </p>

      <button className="hover:bg-black hover:shadow-sm  border text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:text-white hover:border-transparent  transition-all duration-600  font-bold  rounded-lg   px-12 py-2  bg-rose-400   text-lg  border-black mt-8">
        Read Article
      </button>
    </section>
  );
};
const Card2 = () => {
  return (
    <section className=" relative   z-10 py-24    max-w-7xl  rounded-3xl bg-red-200  mx-auto   border-black    p-20 ">
      <div className="absolute right-24 top-24 py-24 px-24 bg-red-500 -z-10 rounded-full "></div>
      <div className="absolute right-36 top-36 py-24 px-24 bg-blue-500 -z-10 rounded-full "></div>

      <h1 className=" text-6xl  font-bold  w-fit px-2   tracking-tighter ">
        Basic Japanse colors
      </h1>
      <p className="poppins text-lg w-fit py-1 text-zinc-700 px-2">
        Pick up on some basic colors for your journey
      </p>

      <button className="hover:bg-black hover:shadow-sm  border text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:text-white hover:border-transparent  transition-all duration-600  font-bold  rounded-lg   px-12 py-2  bg-rose-400   text-lg  border-black mt-8">
        Read Article
      </button>
    </section>
  );
};
const Card3 = () => {
  return (
    <section className=" relative   z-10 py-24    max-w-7xl  rounded-3xl bg-emerald-300-200   mx-auto   border-black    p-20 ">
      <div className="absolute right-24 top-24 py-24 px-24 bg-red-500 -z-10 rounded-full "></div>
      <div className="absolute right-36 top-36 py-24 px-24 bg-blue-500 -z-10 rounded-full "></div>

      <h1 className=" text-6xl  font-bold  w-fit px-2   tracking-tighter ">
        Basic Japanse colors
      </h1>
      <p className="poppins text-lg w-fit py-1 text-zinc-700 px-2">
        Pick up on some basic colors for your journey
      </p>

      <button className="hover:bg-black hover:shadow-sm  border text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:text-white hover:border-transparent  transition-all duration-600  font-bold  rounded-lg   px-12 py-2  bg-rose-400   text-lg  border-black mt-8">
        Read Article
      </button>
    </section>
  );
};
