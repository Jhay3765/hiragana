"use client";
import React, { useState } from "react";
import { kanaChart } from "@/app/kana";

type Character = {
  name: string;
};

type Hiragana = {
  name: string;
  english: string;
  addToClicked: (character: Character) => void;
};

export default function CharacterSheet() {
  const [clicked, setClicked] = useState<Character[]>([]);

  const addToClicked = (character: Character) => {
    setClicked([...clicked, character]);
  };

  const printClicked = () => {
    console.log(clicked);
  };

  return (
    <main className="mx-auto grid grid-cols-5 py-10 gap-2  max-w-lg w-fit">
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

function Character(props: Hiragana) {
  const { name, english } = props;

  return (
    <div className="bg-white  border-2 border-b-4 px-2 border-black text-center cursor-pointer text-black rounded-xl transition-all duration-200 py-2   hover:bg-zinc-200">
      <p className="text-xl font-bold noto-jp leading-5 "> {name} </p>

      <p className="text-lg tracking-tighter text-zinc-900 leading-5   noto-jp">
        {english}
      </p>
    </div>
  );
}
