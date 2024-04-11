"use client";
import AppNavBar from "@/app/components/AppNavBar";
import GameNav from "@/app/components/GameNav";
import React, { useState, useEffect } from "react";

const hiraganaCharacters = [
  { hiragana: "あ", romaji: "a" },
  { hiragana: "い", romaji: "i" },
  { hiragana: "う", romaji: "u" },
  // Add more characters as needed
];

export default function FlashcardGame() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [lives, setLives] = useState(3);

  useEffect(() => {
    if (gameStarted) {
      const timer = setTimeout(() => {
        if (timeRemaining > 0) {
          setTimeRemaining((prevTime) => prevTime - 1);
        } else {
          handleGameOver();
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [gameStarted, timeRemaining]);

  useEffect(() => {
    if (gameStarted) {
      startTimer(10);
    }
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted) {
      const currentCharacter = hiraganaCharacters[currentCardIndex];
      const allRomajiOptions = hiraganaCharacters.map(
        (character) => character.romaji
      );
      const shuffledOptions = shuffleArray(
        allRomajiOptions.filter((romaji) => romaji !== currentCharacter.romaji)
      ).slice(0, 3);
      const finalOptions = [...shuffledOptions, currentCharacter.romaji];
      setOptions(shuffleArray(finalOptions));
    }
  }, [currentCardIndex, gameStarted]);

  const handleNextCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex + 1) % hiraganaCharacters.length
    );
    setTimeRemaining(10); // Reset timer to 10 seconds for the next card
  };

  const handleOptionClick = (selectedRomaji: string) => {
    const currentCharacter = hiraganaCharacters[currentCardIndex];
    if (selectedRomaji === currentCharacter.romaji) {
      handleNextCard();
      setTimeRemaining((prevTime) => prevTime + 3); // Increase timer by 3 seconds for correct answer
    } else {
      setLives((prevLives) => prevLives - 1);
      if (lives === 1) {
        handleGameOver();
      }
    }
  };

  const handleGameOver = () => {
    setGameStarted(false);
    setTimeRemaining(0);
    setLives(3);
    setCurrentCardIndex(0);
  };

  const startTimer = (initialTime: number) => {
    setTimeRemaining(initialTime);
  };

  const shuffleArray = (array: string[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="">
      <AppNavBar name="Games" />

      <div className="bg-theme-green/10 py-12 mb-12">
        <section className="max-w-6xl mx-auto space-y-4 ">
          <h1 className="text-4xl tracking-tighter font-bold   ">
            Flash Cards
          </h1>

          <p>
            Translate the hiragana and choose the right option . Watch the clock
            !
          </p>
        </section>
      </div>
      <div className="max-w-6xl mx-auto">
        {!gameStarted ? (
          <div className="max-w-2xl">
            <p>
              You will be shown a hiragana character. Choose the correct choice
              of three options. You have <b>3 lives</b> and a{" "}
              <b>limited amount of time.</b>
            </p>

            <button
              onClick={() => setGameStarted(true)}
              className="px-4 py-2 bg-blue-500 mt-8 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Start Game
            </button>
          </div>
        ) : (
          <div>
            <div className="bg-white rounded-lg max-w-4xl ">
              <section className="flex justify-between">
                <div className="mt-2 text-lg">Lives: {lives}</div>
                <div className="mt-4 text-lg text-right mb-6">
                  Time Remaining: {timeRemaining} seconds
                </div>
              </section>

              <div className="text-6xl max-w-4xl  border border-black shadow-lg p-4 rounded-lg text-center py-8">
                {hiraganaCharacters[currentCardIndex].hiragana}
              </div>
              <section className="max-w-4xl ">
                <div className="mt-12 text-xl ">Select the correct Romaji:</div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </section>
            </div>
            {lives === 0 && (
              <div className="mt-4">
                <p>Game Over!</p>
                <button
                  onClick={handleGameOver}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  Restart Game
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
