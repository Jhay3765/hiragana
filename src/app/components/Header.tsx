import React from "react";

export default function Header() {
  return (
    <section className=" relative   z-10 py-24    max-w-7xl  rounded-3xl bg-pink-200   mx-auto   border-black    p-20 ">
      <div className="absolute right-24 top-24 py-24 px-24 bg-red-500 -z-10 rounded-full border-4 border-black"></div>
      <div className="absolute right-36 top-36 py-24 px-24 bg-blue-500 -z-10 rounded-full border-4 border-black"></div>

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
}
