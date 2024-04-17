"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

type Page = {
  name: string;
};

export default function AppNavBar(props: Page) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto z-40   pt-4 flex      items-center justify-between  ">
      <nav className=" max-w-7xl mx-auto rounded-full py-3 flex justify-between text-orange-100 bg-zinc-900 w-full px-12">
        <Link
          href={"/"}
          className="tracking-tighter font-bold   noto-jp cursor-pointer text-2xl   flex gap-1 items-center"
        >
          ゲームや楽しい <span className="text-orange-500">記</span>
        </Link>
        <section className="flex items-center gap-20">
          <ul className="flex gap-6 text-xl items-center">
            <Link
              href={"/"}
              className={`${
                props.name === "home"
                  ? "bg-orange-500 text-black px-6 py-2 font-bold"
                  : ""
              } tracking-tighter rounded-full`}
            >
              Home
            </Link>
            {/* <Link
              href={"/games"}
              className={`${
                props.name === "games"
                  ? "bg-teal-500 text-black px-6 py-2 font-bold"
                  : ""
              } tracking-tighter rounded-full`}
            >
              Games
            </Link> */}
            <Link
              href={"/learn"}
              className={`${
                props.name === "learn"
                  ? "bg-orange-400 text-black px-6 py-2 font-bold"
                  : ""
              } tracking-tighter  rounded-full`}
            >
              Learn
            </Link>
            <Link
              href={"/quiz"}
              className={`${
                props.name === "quiz"
                  ? "bg-orange-400 text-black px-6 py-2 font-bold"
                  : ""
              } tracking-tighter rounded-full`}
            >
              Quiz
            </Link>
            <Link
              href={"/characters"}
              className={`${
                props.name === "characters"
                  ? "bg-orange-400 text-black px-6 py-2 font-bold"
                  : ""
              } tracking-tighter  rounded-full`}
            >
              Characters
            </Link>
          </ul>
        </section>
      </nav>
    </div>
  );
}
