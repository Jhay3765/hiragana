"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import menu from "/public/assets/main/menu.svg";
import cross from "/public/assets/main/cross.svg";

import Image from "next/image";
import { X } from "lucide-react";
type Page = {
  name: string;
};

export default function AppNavBar(props: Page) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className=" md:mx-auto z-40  flex items-center justify-between  ">
      <nav className=" mx-auto  py-3 flex justify-between text-orange-100 bg-zinc-900 w-full px-4   md:px-12">
        <Link
          href={"/"}
          className="tracking-tighter font-bold    noto-jp cursor-pointer text-md  md:text-2xl   flex gap-1 items-center"
        >
          ゲームや楽しい <span className="text-orange-500">記</span>
        </Link>
        <section className="flex items-center gap-20">
          <Image
            onClick={() => setOpen(true)}
            src={menu}
            alt=""
            width={40}
            className="md:hidden cursor-pointer"
          />
          <ul className="md:flex hidden  gap-6 text-xl items-center">
            <Link
              href={"/"}
              className={`${
                props.name === "home"
                  ? "bg-orange-400 text-black px-6 py-2 font-bold"
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
            {/* <Link
              href={"/learn"}
              className={`${
                props.name === "learn"
                  ? "bg-orange-400 text-black px-6 py-2 font-bold"
                  : ""
              } tracking-tighter  rounded-full`}
            >
              Learn
            </Link> */}
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
      {open && <MobileMenu closeMenu={closeMenu} />}
    </div>
  );
}

const MobileMenu = (props: any) => {
  return (
    <div className="fixed bg-zinc-900 md:hidden top-0 h-screen  p-4 w-full z-30">
      <div className="w-full flex justify-end">
        <X
          size={40}
          onClick={props.closeMenu}
          className="mb-8 cursor-pointer text-orange-400"
        />
      </div>
      <ul className="text-4xl sm:text-5xl font-bold text-orange-400 z-40 flex flex-col gap-6 w-fit">
        <Link
          onClick={props.closeMenu}
          className="hover:text-orange-100 transition-all duration-300"
          href={"/"}
        >
          Home
        </Link>
        <Link
          onClick={props.closeMenu}
          className="hover:text-orange-100 transition-all duration-300"
          href={"/learn"}
        >
          Learn
        </Link>
        <Link
          onClick={props.closeMenu}
          className="hover:text-orange-100 transition-all duration-300"
          href={"/quiz"}
        >
          Quiz
        </Link>
        <Link
          onClick={props.closeMenu}
          className="hover:text-orange-100 transition-all duration-300"
          href={"/characters"}
        >
          Characters
        </Link>
      </ul>
    </div>
  );
};
