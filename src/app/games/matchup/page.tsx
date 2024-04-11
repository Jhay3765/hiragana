"use client";
import React from "react";
import { useState } from "react";
import Head from "next/head";
interface Card {
  id: number;
  hiragana: string;
  romaji: string;
  flipped: boolean;
}

const HiraganaMatchGame = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, hiragana: "あ", romaji: "a", flipped: false },
    { id: 2, hiragana: "い", romaji: "i", flipped: false },
    { id: 3, hiragana: "う", romaji: "u", flipped: false },
    { id: 4, hiragana: "え", romaji: "e", flipped: false },
    { id: 5, hiragana: "お", romaji: "o", flipped: false },
    { id: 6, hiragana: "か", romaji: "ka", flipped: false },
    { id: 7, hiragana: "き", romaji: "ki", flipped: false },
    { id: 8, hiragana: "く", romaji: "ku", flipped: false },
    { id: 9, hiragana: "け", romaji: "ke", flipped: false },
    { id: 10, hiragana: "こ", romaji: "ko", flipped: false },
    { id: 11, hiragana: "さ", romaji: "sa", flipped: false },
    { id: 12, hiragana: "し", romaji: "shi", flipped: false },
    { id: 13, hiragana: "す", romaji: "su", flipped: false },
    { id: 14, hiragana: "せ", romaji: "se", flipped: false },
    { id: 15, hiragana: "そ", romaji: "so", flipped: false },
    { id: 16, hiragana: "た", romaji: "ta", flipped: false },
    { id: 17, hiragana: "ち", romaji: "chi", flipped: false },
    { id: 18, hiragana: "つ", romaji: "tsu", flipped: false },
    { id: 19, hiragana: "て", romaji: "te", flipped: false },
    { id: 20, hiragana: "と", romaji: "to", flipped: false },
    { id: 21, hiragana: "な", romaji: "na", flipped: false },
    { id: 22, hiragana: "に", romaji: "ni", flipped: false },
    { id: 23, hiragana: "ぬ", romaji: "nu", flipped: false },
    { id: 24, hiragana: "ね", romaji: "ne", flipped: false },
    { id: 25, hiragana: "の", romaji: "no", flipped: false },
  ]);

  const handleClick = (id: number) => {
    const flippedCards = cards.filter((card) => card.flipped);

    if (flippedCards.length === 2) {
      return; // Prevent flipping more than 2 cards simultaneously
    }

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: !card.flipped } : card
    );

    setCards(updatedCards);

    const flippedIds = updatedCards
      .filter((card) => card.flipped)
      .map((card) => card.id);

    if (flippedIds.length === 2) {
      const [firstId, secondId] = flippedIds;

      if (
        updatedCards[firstId - 1].romaji === updatedCards[secondId - 1].romaji
      ) {
        // If cards match, keep them flipped
      } else {
        // If cards don't match, flip them back after 1 second
        setTimeout(() => {
          setCards(
            updatedCards.map((card) =>
              card.flipped ? { ...card, flipped: false } : card
            )
          );
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-4 items-center justify-center bg-gray-100">
      <Head>
        <title>Hiragana Match Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={`bg-white p-4 rounded-md cursor-pointer ${
              card.flipped ? "bg-gray-200" : ""
            }`}
          >
            {card.flipped ? (
              <>
                <div className="text-4xl mb-2">{card.hiragana}</div>
                <div>{card.romaji}</div>
              </>
            ) : (
              "??"
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default HiraganaMatchGame;
