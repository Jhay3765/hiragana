"use client";
import React, { useState } from "react";
import { kanaChart, katakanaChart, kanjiChart } from "@/app/utils/characters";

type Character = {
  name: string;
};

type Hiragana = {
  name: string;
  english: string;
  addToClicked?: (character: Character) => void;
};

export function CharacterSheet() {
  const [clicked, setClicked] = useState<Character[]>([]);

  const addToClicked = (character: Character) => {
    setClicked([...clicked, character]);
  };

  const printClicked = () => {
    console.log(clicked);
  };

  return (
    <main className=" grid grid-cols-5 py-10 gap-2 sm:gap-4 px-2  max-w-xl ">
      {kanaChart.map((row, rowIndex) => {
        return Object.entries(row.characters).map(([name, english], index) => (
          <Character
            key={rowIndex * 100 + index} // Unique key for each Character
            addToClicked={addToClicked}
            name={name}
            english={english}
          />
        ));
      })}
    </main>
  );
}

export function KatakanaSheet() {
  const [clicked, setClicked] = useState<Character[]>([]);
  const addToClicked = (character: Character) => {
    setClicked([...clicked, character]);
  };

  const printClicked = () => {
    console.log(clicked);
  };

  return (
    <main className=" grid grid-cols-5  gap-2 sm:gap-4  py-10  px-2  max-w-xl ">
      {katakanaChart.map((row, rowIndex) => {
        return Object.entries(row.characters).map(([name, english], index) => (
          <Character
            key={rowIndex * 100 + index} // Unique key for each Character
            addToClicked={addToClicked}
            name={name}
            english={english}
          />
        ));
      })}
    </main>
  );
}

export const KanjiChart = () => {
  return (
    <div className=" grid grid-cols-2    sm:grid-cols-3 py-10 gap-4 px-4 ">
      {kanjiChart.map((data, index) => {
        return (
          <Character key={index} name={data.kanji} english={data.meaning} />
        );
      })}
    </div>
  );
};

export default CharacterSheet;

function Character(props: Hiragana) {
  const { name, english } = props;

  return (
    <div className="bg-orange-100 py-2  sm:py-4  border-orange-100  hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]  px-3 text-center cursor-pointer  rounded-xl transition-all duration-200   hover:bg-orange-400">
      <p className="text-lg   sm:text-xl  md:text-2xl font-semibold noto-jp whitespace-nowrap tracking-tighter ">
        {name}
      </p>
      <p className="text-sm sm:text-base  md:text-xl  text-zinc-800   ">
        {english}
      </p>
    </div>
  );
}
