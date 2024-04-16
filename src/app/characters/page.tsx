"use client";
import React, { useState } from "react";
import {
  CharacterSheet,
  KatakanaSheet,
  KanjiChart,
} from "@/app/components/CharacterSheet";
import AppNavBar from "@/app/components/AppNavBar";
import Image from "next/image";

export default function Page() {
  const [active, setActive] = useState(0);

  const handleClick = (pageNumber: number) => {
    setActive(pageNumber);
  };
  return (
    <div className="">
      <AppNavBar name="characters" />

      {/* <div className="absolute top-0 w-full  ">
          <div className="relative h-[1000px]  w-full">
            <Image
              src={"/assets/images/circ.svg"}
              alt=""
              fill
              className="opacity-50"
            />
          </div>
        </div> */}
      <section className="flex flex-col items-center justify-center max-w-3xl z-40 mx-auto">
        <ul className="flex pt-8 gap-4 text-xl text-center ">
          <button
            onClick={() => handleClick(0)}
            className={`${
              active === 0
                ? "border-black font-semibold"
                : "border-transparent text-zinc-400"
            } bg-white border-2  rounded-xl px-4 py-2 w-full `}
          >
            Hiragana
          </button>
          <button
            onClick={() => handleClick(1)}
            className={`${
              active === 1
                ? "border-black font-semibold"
                : "border-transparent text-zinc-400"
            } bg-white border-2  rounded-xl px-4 py-2 w-full `}
          >
            Katakana
          </button>
          <button
            onClick={() => handleClick(2)}
            className={`${
              active === 2
                ? "border-black font-semibold"
                : "border-transparent text-zinc-400"
            } bg-white border-2  rounded-xl px-4 py-2 w-full `}
          >
            Kanji
          </button>
        </ul>
        {active === 0 && <CharacterSheet />}
        {active === 1 && <KatakanaSheet />}
        {active === 2 && <KanjiChart />}
      </section>
    </div>
  );
}

const randomText = () => {
  return (
    <p></p>
    // <p className="mb-12 max-w-xl text-lg mx-auto mt-10">
    //   To embark on the journey of learning Japanese, the initial step is to
    //   familiarize oneself with the alphabet, or more accurately, the sounds
    //   inherent in the language. Unlike several other Asian languages, Japanese
    //   does not employ tones. Instead, it revolves around distinct characters.
    //   The primary set of characters used in Japanese is known as Hiragana.
    //   Furthermore, Japanese encompasses two additional character sets: Kanji,
    //   derived from Chinese characters, and Katakana, predominantly utilized for
    //   foreign words. However, we will delve into Katakana in Lesson 2. <br />{" "}
    //   <br /> {"  "}
    //   It&apos;s crucial not to feel pressured to memorize all Hiragana
    //   characters before progressing. Rather, learn them gradually as you
    //   navigate through subsequent lessons. Japanese features five vowels:
    //   &apos;a&apos; pronounced as &apos;ahh&apos; &apos;i&apos; pronounced akin
    //   to the &apos;e&apos; in &apos;eat&apos; &apos;u&apos; pronounced like the
    //   &apos;oo&apos; in "soon" "e" pronounced similar to the &apos;e&apos; in
    //   &apos;elk&apos; &apos;o&apos; pronounced as &apos;oh&apos; Notably, all
    //   Hiragana characters conclude with one of these vowels, except for "n."
    //   Additionally, it's worth noting that the Japanese consonant "r" differs
    //   slightly from its English counterpart, being pronounced as a blend of "d,"
    //   "r," and "l," with a subtle rolling effect.
    // </p>
  );
};
