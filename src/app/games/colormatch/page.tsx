"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import AppNavBar from "@/app/components/AppNavBar";
import Link from "next/link";
interface ColorOption {
  color: string;
  hiragana: string;
  romaji?: string; // Add optional romaji property
}

const colorOptions = [
  {
    color: "#FF0000",
    choices: ["みどり", "あおい", "むらさき"],
    answer: "あかい",
    hiragana: "あかい",
    romaji: "Akai",
  },
  {
    color: "#00FF00",
    choices: ["きいろ", "あおい", "あかい"],
    answer: "みどり",
    hiragana: "みどり",
    romaji: "Midori",
  },
  {
    color: "#0000FF",
    choices: ["あかい", "みどり", "きいろ"],
    answer: "あおい",
    hiragana: "あおい",
    romaji: "Aoi",
  },
  {
    color: "#FFFF00",
    choices: ["みどり", "あおい", "あかい"],
    answer: "きいろ",
    hiragana: "きいろ",
    romaji: "Kiiro",
  },
  {
    color: "#FF00FF",
    choices: ["あおい", "きいろ", "みどり"],
    answer: "むらさき",
    hiragana: "むらさき",
    romaji: "Murasaki",
  },
  {
    color: "#00FFFF",
    choices: ["みどり", "あおい", "あかい"],
    answer: "あおみどり",
    hiragana: "あおみどり",
    romaji: "Aomidori",
  },
];

export default function Page() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  return (
    <div className="bg-white h-screen">
      <section className="flex justify-between bg-zinc-900 text-white py-4 px-4">
        <Link href={"/quiz"} className="text-xl ">
          {"<"} Back
        </Link>
        <section className="text-right text-xl flex gap-8 ">
          <p className="tracking-tighter">Game</p>
          <p>x.x</p>
        </section>
      </section>
      <h1 className="text-5xl">Color Match</h1>
      <main></main>
    </div>
  );
}
