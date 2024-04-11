"use client";
import React, { useState } from "react";
import AppNavBar from "@/app/components/AppNavBar";
import Link from "next/link";
import Image from "next/image";
type Game = {
  game: string;
  name: string;
  color: string;
  img: string;
};
export default function page() {
  return (
    <div className="bg-white ">
      <AppNavBar name="Games" />
      <div className="absolute top-0 w-full ">
        <div className="relative h-[300px] w-full">
          <Image
            src={"/assets/images/layered-steps.svg"}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="py-12 mt-8  z-10   mb-8 mx-auto   ">
        <section className="max-w-6xl  mx-auto sticky top-24 text-center">
          <h1 className=" tracking-tighter text-8xl font-bold   ">Games</h1>
          <p className="text-2xl mt-4  poppins ">
            Learn more with games that test your memory and reinforce your
            knowledge
          </p>
        </section>
      </div>
      <div className=" max-w-7xl  rounded-3xl h-screen  mx-auto">
        <section className="grid grid-cols-3 gap-8    mx-auto px-10   ">
          <Box game="flashcards" color="green" name="Flash Cards" img="game" />
          <Box game="matchup" color="blue" name="Match Up!" img="match" />
          <Box
            game="colormatch"
            color="yellow"
            name="Color Match"
            img="colormatch"
          />
        </section>
        <section className="grid grid-cols-3 gap-8 mt-8   mx-auto px-10  ">
          <Box game="flashcards" color="green" name="Flash Cards" img="game" />
          <Box game="matchup" color="blue" name="Match Up!" img="match" />
          <Box
            game="colormatch"
            color="yellow"
            name="Color Match"
            img="colormatch"
          />
        </section>
      </div>
    </div>
  );
}

const Box = (props: Game) => {
  const [touched, setTouched] = useState(false);
  const { name, color, game, img } = props;
  return (
    <Link href={`/games/${game.toLowerCase()}`} className=" relative">
      <div
        className={`bg-white relative hover:bg-teal-400 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] transition-all duration-400 border-2 border-b-4 rounded-lg border-black  p-10 w-fit`}
      >
        <div className="    ">
          <p className="tracking-tighter text-3xl pb-12">{name} </p>
          <Image src={`/assets/${img}.svg`} alt="" width={100} height={100} />

          <p className="pt-16">
            Learn more with games that test your memory and reinforce your
            knowledge
          </p>
        </div>
      </div>
    </Link>
  );
};
