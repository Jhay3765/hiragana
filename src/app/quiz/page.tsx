import React from "react";
import AppNavBar from "../components/AppNavBar";
import Link from "next/link";
import Image from "next/image";
import { Banana, Flower } from "lucide-react";

type quiz = {
  img?: string;
  name: string;
  desc: string;
  link: string;
};

export default function page() {
  return (
    <div className="relative mb-12 bg-orange-100 ">
      <AppNavBar name="quiz" />

      {/* <Image
        src={"/assets/images/wave.svg"}
        alt=""
        fill
        className="w-full  absolute top-0 rotate-180 -z-10 "
      /> */}

      <h1 className="text-4xl  max-w-6xl    text-zinc-950 border-b-2 border-zinc-950 pb-4 md:text-7xl font-bold tracking-tighter  px-10 mx-auto mt-12 ">
        Quizes
      </h1>
      <main className="mt-12   md:mt-16  max-w-6xl  px-12 mx-auto rounded-3xl z-20">
        <ul className="grid grid-cols-2 md:grid-cols-3 px-2 gap-4 md:gap-8 w-fit ">
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
    <div className="p-6 w-full max-w-sm  text-center border bg-orange-300 shadow-md hover:bg-orange-400 text-zinc-900  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300  border-black  rounded-3xl   ">
      <h1 className="text-xl md:text-2xl tracking-tighter rounded-t-3xl font-bold ">
        {name}
      </h1>

      <section className="p-4 md:p-10 mx-auto  flex justify-center rounded-xl">
        {/* <Banana size={100} /> */}
      </section>
      {/* <p className="text-sm md:text-base mb-4 text-zinc-800/890 leading-relaxed ">
        Test yourself to see if you remember these common items !
      </p> */}
      <Link href={`/quiz/${link}`}>
        <button className="text-sm border border-zinc-900 md:text-base mt-4 font-bold  bg-orange-500  hover:bg-orange-600 transition-all duration-500  rounded-3xl  mb-4   w-full py-2">
          Take Quiz {">"}
        </button>
      </Link>
    </div>
  );
};
