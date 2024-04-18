"use client";
import AppNavBar from "@/app/components/AppNavBar";
import Image from "next/image";
import { useState } from "react";

import { shuffleNumbers } from "@/app/utils/lib";
import Link from "next/link";

export default function BasicQuiz(props: any) {
  const quizData = props.quizData;
  const amountOfQuestions = quizData.quizQuestions.length; // Number of questions in the array
  const shuffledNumbers = shuffleNumbers(123);
  const [selected, setSelected] = useState<null | string>(null);
  const [wrong, setWrong] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [selectedButton, setSelectedButton] = useState<null | number>(null);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);

  const restart = () => {
    setCount(0);
    setSelected(null);
    setCorrect(false);
    setWrong(false);
    setSelectedButton(null);
    setQuizStarted(false);
    setQuizEnded(false);
    setScore(0);
  };

  if (quizEnded) {
    return (
      <div className="  ">
        <AppNavBar name="quiz" />
        <main className=" mx-auto pt-24 max-w-7xl h-screen">
          <p className="text-7xl tracking-tighter">Good Work!</p>
          <p className="text-3xl font-light  mt-2">
            You scored <span className="font-bold">{score}</span> out of{" "}
            <span>{amountOfQuestions}</span> questions!
          </p>
          <section className="flex gap-8 mt-36 text-xl ">
            <button
              onClick={restart}
              className=" px-8 py-2 rounded-lg bg-orange-400 font-bold border-black"
            >
              Restart quiz
            </button>
            <Link
              href={"/quiz"}
              className="px-8 py-2 bg-orange-400 rounded-lg font-bold  border-black"
            >
              Back to Other Quizes
            </Link>
          </section>
        </main>
      </div>
    );
  }

  const choices = [
    quizData.quizQuestions[count].choices[shuffledNumbers[0]],
    quizData.quizQuestions[count].choices[shuffledNumbers[1]],
    quizData.quizQuestions[count].choices[shuffledNumbers[2]],
    quizData.quizQuestions[count].choices[shuffledNumbers[3]],
  ];
  const answer = quizData.quizQuestions[count].correctAnswer;

  const handleClick = (choiceNumber: string, choiceButton: number) => {
    setSelected(choiceNumber);
    setSelectedButton(choiceButton);
  };

  const checkAnswer = () => {
    if (!selected) return;
    if (selected === answer) {
      setCorrect(true);
      setScore(score + 1);
      return;
    }
    if (selected !== answer) {
      selected;
      setWrong(true);
      return;
    }
  };
  const handleNextButton = () => {
    if (count >= quizData.quizQuestions.length - 1) {
      setQuizEnded(true);
    }
    setCount(count + 1);
    setSelected("");
    setCorrect(false);
    setWrong(false);
    setSelectedButton(null);
  };

  if (!quizStarted) {
    return (
      <div className="">
        <section className="flex justify-between bg-zinc-900 text-white py-4 px-4">
          <Link href={"/quiz"} className="text-base md:text-xl ">
            {"<"} Back
          </Link>
          <section className="text-right text-base md:text-xl flex gap-8 ">
            <p className="tracking-tighter">{quizData.quizInfo.title}</p>
          </section>
        </section>
        <main className="h-screen text-center sm:text-left max-w-3xl mx-auto md:pt-24 pt-12 ">
          <h1 className="text-4xl  md:text-6xl mt-4 font-bold tracking-tighter">
            {quizData.quizInfo.title}
          </h1>
          <p className="md:max-w-xl text-base px-16 md:px-0 md:text-xl mt-8">
            {quizData.quizInfo.description}
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-orange-400 hover:bg-orange-500 transition-all duration-300 mt-12 text-lg rounded-lg px-8 py-2 font-bold"
          >
            Start Quiz
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className=" min-h-screen bg-white ">
      <section className="flex  justify-between bg-zinc-900 text-white py-4 px-4">
        <Link href={"/quiz"} className="text-base md:text-xl ">
          {"<"} Back
        </Link>
        <section className="text-right text-base md:text-xl flex gap-8 ">
          <p className="tracking-tighter font-bold">
            {quizData.quizInfo.title}
          </p>
          <p>
            {count + 1}/{amountOfQuestions}
          </p>
        </section>
      </section>
      <main className=" p-24 py-8 mx-auto w-full max-w-3xl">
        <div className="">
          {/* <p>
            selected : {selected} , answer : {answer} , button : , score :
            {score} , selected Button :{selectedButton}
          </p> */}

          <Image
            className="w-full px-12 "
            src={quizData.quizQuestions[count].img}
            alt="Quiz Image"
            width={400}
            height={400}
          />
          <p className="pt-2 pb-8 text-xl  md:text-3xl tracking-tighter  text-center  ">
            {quizData.quizQuestions[count].question}
          </p>

          <div className="space-y-4 mt-4 noto-jp text-3xl">
            <button
              disabled={correct || wrong ? true : false}
              onClick={() => handleClick(choices[0], 0)}
              className={`${selectedButton == 0 && "bg-gray-400"}
              ${wrong && selectedButton == 0 ? "bg-red-400" : ""}
              ${correct && selectedButton == 0 ? "bg-green-400" : ""}
              ${answer === choices[0] && wrong ? "bg-green-500" : ""}


                 text-base  md:text-xl w-full  border-2 rounded-lg text-center border-b-4 py-2  border-black cursor-pointer`}
            >
              {choices[0]}
            </button>
            <button
              disabled={correct || wrong ? true : false}
              onClick={() => handleClick(choices[1], 1)}
              className={`${selectedButton == 1 && "bg-gray-400"}
              ${wrong && selectedButton == 1 ? "bg-red-400" : ""}
              ${correct && selectedButton == 1 ? "bg-green-400" : ""}
              ${answer === choices[1] && wrong ? "bg-green-500" : ""}


                   text-base  md:text-xl w-full border-2 rounded-lg text-center border-b-4 py-2 border-black cursor-pointer`}
            >
              {choices[1]}
            </button>
            <button
              disabled={correct || wrong ? true : false}
              onClick={() => handleClick(choices[2], 2)}
              className={`${selectedButton == 2 && "bg-gray-400"}
              ${wrong && selectedButton == 2 ? "bg-red-400" : ""}
              ${correct && selectedButton == 2 ? "bg-green-400" : ""}
              ${answer === choices[2] && wrong ? "bg-green-500" : ""}



                   text-base  md:text-xl w-full border-2 rounded-lg text-center border-b-4 py-2 border-black cursor-pointer`}
            >
              {choices[2]}
            </button>
            <button
              disabled={correct || wrong ? true : false}
              onClick={() => handleClick(choices[3], 3)}
              className={`${selectedButton == 3 && "bg-gray-400"}
              ${wrong && selectedButton == 3 ? "bg-red-400" : ""}
              ${correct && selectedButton == 3 ? "bg-green-400" : ""}
              ${answer === choices[3] && wrong ? "bg-green-500" : ""}



                  text-base  md:text-xl w-full border-2 rounded-lg text-center border-b-4 py-2 border-black cursor-pointer`}
            >
              {choices[3]}
            </button>
          </div>

          <section className="flex justify-between mt-8">
            <button
              onClick={checkAnswer}
              className={`= border-2 border-b-4 border-black  font-bold tracking-tighter  text-base  md:text-xl px-8 py-1 rounded-lg`}
            >
              Check Answer
            </button>
            <button
              disabled={correct || wrong ? false : true}
              onClick={handleNextButton}
              className={`${
                correct || wrong
                  ? "border-black text-black bg-teal-500"
                  : "text-zinc-500 border-zinc-500"
              }  border-2 border-b-4   font-bold tracking-tighter  text-base  md:text-xl  px-8 py-1 rounded-lg`}
            >
              Next
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
