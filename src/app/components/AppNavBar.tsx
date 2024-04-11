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
    <div className="max-w-7xl mx-auto   pt-4 flex   sticky top-0   items-center justify-between  z-20">
      <nav className=" max-w-7xl mx-auto rounded-full py-2 flex justify-between text-white bg-zinc-800 px-24  w-full ">
        <Link
          href={"/"}
          className="tracking-tighter font-bold   noto-jp cursor-pointer text-2xl   flex gap-1 items-center"
        >
          ゲームや楽しい <span className="text-yellow-500">記</span>
        </Link>
        <section className="flex items-center gap-20">
          <ul className="flex gap-6 text-xl items-center">
            <Link
              href={"/"}
              className="tracking-tighter font-bold bg-teal-500 px-6 py-3 rounded-full text-black"
            >
              Home
            </Link>
            <Link href={"/games"} className="tracking-tighter">
              Games
            </Link>
            <Link href={"/learn"} className="tracking-tighter">
              Learn
            </Link>
            <Link href={"/quiz"} className="tracking-tighter">
              Quiz
            </Link>
            <Link href={"/characters"} className="tracking-tighter">
              Characters
            </Link>
          </ul>
        </section>
      </nav>
    </div>
  );
}
