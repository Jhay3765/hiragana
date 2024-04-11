"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import AppNavBar from "@/app/components/AppNavBar";

interface ColorOption {
  color: string;
  hiragana: string;
  romaji?: string; // Add optional romaji property
}

const colors: ColorOption[] = [
  { color: "#FF0000", hiragana: "あかい", romaji: "Akai" },
  { color: "#00FF00", hiragana: "みどり", romaji: "Midori" },
  { color: "#0000FF", hiragana: "あおい", romaji: "Aoi" },
  { color: "#FFFF00", hiragana: "きいろ", romaji: "Kiiro" },
  { color: "#FF00FF", hiragana: "むらさき", romaji: "Murasaki" },
  { color: "#00FFFF", hiragana: "あおみどり", romaji: "Aomidori" },
];

const ColorMatchGame: React.FC = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentColor, setCurrentColor] = useState<ColorOption | null>(null);
  const [options, setOptions] = useState<ColorOption[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [disableOptions, setDisableOptions] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState<"normal" | "hard">("normal");

  // Function to start a new game
  const startNewGame = () => {
    setScore(0);
    setLives(3);
    setGameOver(false);
    setGameStarted(true);
    selectNewColor();
    setSelectedOptionIndex(null); // Reset selected option index
  };

  // Function to select a new color and options
  const selectNewColor = () => {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex];
    setCurrentColor(color);

    const optionIndices = [randomColorIndex];
    while (optionIndices.length < 3) {
      const index = Math.floor(Math.random() * colors.length);
      if (!optionIndices.includes(index)) {
        optionIndices.push(index);
      }
    }

    const colorOptions = optionIndices.map((index) => colors[index]);
    setOptions(colorOptions);
    setDisableOptions(false);
  };

  // Function to handle color selection
  const handleColorSelection = (selectedColor: ColorOption, index: number) => {
    if (disableOptions) return;

    if (selectedColor === currentColor) {
      setScore(score + 1);
      setDisableOptions(true); // Disable options during delay
      selectNewColor();
    } else {
      setLives(lives - 1);
      if (lives === 1) {
        setGameOver(true);
      }
      setSelectedOptionIndex(index); // Set the selected option index
    }
  };

  useEffect(() => {
    if (gameStarted) {
      startNewGame();
    }
  }, [gameStarted]);

  return (
    <div className="">
      <Head>
        <title>Hiragana Color Match Game</title>
        <meta
          name="description"
          content="Test your knowledge of Hiragana characters and colors!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNavBar name="" />
      <div className="bg-theme-green/10 py-12 mb-12">
        <section className="max-w-6xl mx-auto space-y-4 ">
          <h1 className="text-4xl tracking-tighter font-bold   ">
            Hiragana Color Match
          </h1>

          <p>
            Choose the right name for the color. Be careful, you have only three
            chances!
          </p>
          <div className="mt-4 flex items-center">
            <input
              type="radio"
              id="normal"
              name="difficulty"
              value="normal"
              checked={difficulty === "normal"}
              onChange={() => setDifficulty("normal")}
              className="mr-2"
            />
            <label htmlFor="normal" className="mr-4">
              Normal
            </label>
            <input
              type="radio"
              id="hard"
              name="difficulty"
              value="hard"
              checked={difficulty === "hard"}
              onChange={() => setDifficulty("hard")}
              className="mr-2"
            />
            <label htmlFor="hard">Hard</label>
          </div>
        </section>
      </div>

      <div className="max-w-6xl border-black rounded-xl mx-auto border-4 p-6 py-8 ">
        {gameStarted && (
          <div className=" flex justify-between px-8">
            <p className="text-lg">
              <span className="font-bold">Score :</span> {score * 125}
            </p>
            <div className="flex">
              {[...Array(lives)].map((_, index) => (
                <img
                  key={index}
                  src="/assets/heart.svg"
                  alt="Heart"
                  className="w-6 h-6 mx-1"
                />
              ))}
            </div>
          </div>
        )}

        <main className="flex mt-24   items-center justify-center">
          {gameOver ? (
            <div>
              <h1 className="text-5xl font-bold mb-4">Game Over</h1>
              <div className="mx-auto w-fit mt-10">
                <button
                  onClick={startNewGame}
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Play Again</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div
                className={`text-5xl w-64 h-48 grid place-content-center ${
                  !gameStarted ? "bg-blue-500 text-white" : ""
                }`}
                style={{
                  backgroundColor: currentColor?.color,
                }}
              >
                {!gameStarted && (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setGameStarted(true)}
                  >
                    Start Game
                  </button>
                )}
              </div>
              <div className="mt-24 pb-12">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className={`border border-green-950 shadow-sm font-bold shadow-green-300 text-gray-800 px-4 py-2 m-2 rounded-md text-xl ${
                      selectedOptionIndex === index && !disableOptions
                        ? "wrong-selection"
                        : ""
                    }`}
                    onClick={() => handleColorSelection(option, index)}
                    disabled={disableOptions}
                  >
                    {difficulty === "normal" ? (
                      // Render both Hiragana and Romaji in normal mode
                      <>
                        <div>{option.hiragana}</div>
                        <div className="text-xs">{option.romaji}</div>
                      </>
                    ) : (
                      // Render only Hiragana in hard mode
                      option.hiragana
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ColorMatchGame;
