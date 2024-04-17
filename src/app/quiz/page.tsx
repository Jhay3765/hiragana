import React from "react";
import AppNavBar from "../components/AppNavBar";
import Link from "next/link";
import Image from "next/image";

type quiz = {
  img?: string;
  name: string;
  desc: string;
  link: string;
};

export default function page() {
  return (
    <div className="relative mb-12">
      <AppNavBar name="quiz" />

      {/* <Image
        src={"/assets/images/wave.svg"}
        alt=""
        fill
        className="w-full  absolute top-0 rotate-180 -z-10 "
      /> */}

      <h1 className="text-8xl font-bold text-center max-w-7xl mx-auto mt-12 ">
        Quizes
      </h1>
      <main className="mt-24   max-w-7xl mx-auto rounded-3xl z-20">
        <ul className="grid grid-cols-3 gap-8 ">
          <Item
            name="Common Things 1"
            desc="Begginer level quiz for common things you might see everyday"
            link="common-things-1"
          />
          <Item
            name="Common Things 2"
            desc="Intermediate level quiz of common things you might see every day"
            link="common-things-2"
          />
          <Item name="Food 1" desc="Can you name these foods ?" link="food-1" />
        </ul>
      </main>
    </div>
  );
}

const Item = (props: quiz) => {
  const { name, desc, img, link } = props;
  return (
    <div className=" p-8 text-center bg-orange-200 shadow-md  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300  border-black  rounded-3xl   ">
      <h1 className=" text-3xl tracking-tighter  rounded-t-3xl "> {name} </h1>

      <section className="p-20  rounded-xl"></section>
      <p className=" mb-4 ">
        Test yourself to see if you remember these common items !
      </p>
      <Link href={`/quiz/${link}`}>
        <button className="mt-4 font-bold border-black bg-orange-400 border-2   hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-xl  mb-4   w-full py-1">
          Take Quiz {">"}
        </button>
      </Link>
    </div>
  );
};
