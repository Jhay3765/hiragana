"use client";
import AppNavBar from "@/app/components/AppNavBar";
import Image from "next/image";
import { useState } from "react";
import { commonThingsQuiz as quizData } from "@/app/utils/quizData";
import { shuffleNumbers } from "@/app/utils/lib";
import Link from "next/link";

export default function Page() {
  const amountOfQuestions = quizData.length; // Number of questions in the array
  const shuffledNumbers = shuffleNumbers(123);
  const [selected, setSelected] = useState("");
  const [wrong, setWrong] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [selectedButton, setSelectedButton] = useState<null | number>(null);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);

  const restart = () => {
    setCount(0);
    setSelected("");
    setCorrect(false);
    setWrong(false);
    setSelectedButton(null);
    setQuizStarted(false);
    setQuizEnded(false);
  };

  if (quizEnded) {
    return (
      <div className="bg-indigo-300 h-screen">
        <AppNavBar name="Quiz" />
        <main className="max-w-4xl mx-auto pt-24">
          <p className="text-7xl tracking-tighter">Good Work!</p>
          <p className="text-3xl font-light  mt-20">
            You scored <span className="font-bold">{score}</span> out of{" "}
            <span>{amountOfQuestions}</span> questions!
          </p>
          <section className="flex gap-8 mt-10 text-xl ">
            <button
              onClick={restart}
              className="bg-white px-8 py-1 rounded-lg border-2 border-b-4 border-black"
            >
              Restart quiz
            </button>
            <Link
              href={"/quiz"}
              className="bg-white px-8 py-1 rounded-lg border-2 border-b-4 border-black"
            >
              Back to Other Quizes
            </Link>
          </section>
        </main>
      </div>
    );
  }

  const choices = [
    quizData[count].choices[shuffledNumbers[0]],
    quizData[count].choices[shuffledNumbers[1]],
    quizData[count].choices[shuffledNumbers[2]],
    quizData[count].choices[shuffledNumbers[3]],
  ];
  const answer = quizData[count].correctAnswer;

  const handleClick = (choiceNumber: string, choiceButton: number) => {
    setSelected(choiceNumber);
    setSelectedButton(choiceButton);
  };

  const checkAnswer = () => {
    if (selected === answer) {
      setCorrect(true);
      setScore(score + 1);
      return;
    }
    if (selected !== answer) {
      setWrong(true);
      return;
    }
  };
  const handleNextButton = () => {
    if (count >= quizData.length - 1) {
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
      <div className="bg-indigo-200">
        <AppNavBar name="Quiz" />
        <main className="h-screen max-w-3xl mx-auto pt-24 ">
          <h1 className="text-6xl">Common Things Part 1</h1>
          <p className="max-w-xl text-xl mt-8">
            Test your knowledge of common items with Common Things Quiz! This
            interactive quiz game challenges players to identify everyday
            objects based on images. With a variety of questions spanning from
            household items to everyday tools, players will put their
            observation skills to the test. To play, simply click &apos;Start
            Quiz&apos; and begin answering questions. Each question presents an
            image of an object along with multiple-choice options. Choose the
            correct answer by clicking on the corresponding button.
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-white mt-24 text-lg rounded-lg px-6 py-1 border-2 border-b-4 border-black"
          >
            Start Quiz
          </button>
        </main>
      </div>
    );
  }

  return (
    <div>
      <AppNavBar name="Quiz" />
      <main className="h-screen p-24 py-8 mx-auto w-full max-w-3xl">
        <div className="">
          {/* <p>
            selected : {selected} , answer : {answer} , button : , score :
            {score} , selected Button :{selectedButton}
          </p> */}
          <p className="text-right text-xl mb-2">
            {count + 1}/{amountOfQuestions}
          </p>
          <Image
            className=" rounded-xl w-full"
            src={quizData[count].img}
            alt="Quiz Image"
            width={500}
            height={500}
          />
          <p className="pt-8 pb-8 text-3xl tracking-tighter   ">
            {quizData[count].question}
          </p>

          <div className="space-y-4 mt-4 noto-jp text-3xl">
            <button
              disabled={correct || wrong ? true : false}
              onClick={() => handleClick(choices[0], 0)}
              className={`${selectedButton == 0 && "bg-gray-400"}
              ${wrong && selectedButton == 0 ? "bg-red-400" : ""}
              ${correct && selectedButton == 0 ? "bg-green-400" : ""}
              ${answer === choices[0] && wrong ? "bg-green-500" : ""}


                  text-xl w-full border-2 rounded-lg text-center border-b-4 py-2 border-black cursor-pointer`}
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


                  text-xl w-full border-2 rounded-lg text-center border-b-4 py-2 border-black cursor-pointer`}
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



                  text-xl w-full border-2 rounded-lg text-center border-b-4 py-2 border-black cursor-pointer`}
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



                  text-xl w-full border-2 rounded-lg text-center border-b-4 py-2 border-black cursor-pointer`}
            >
              {choices[3]}
            </button>
          </div>

          <section className="flex justify-between mt-4">
            <button
              onClick={checkAnswer}
              className={`= border-2 border-b-4 border-black  font-bold tracking-tighter text-xl px-8 py-1 rounded-lg`}
            >
              Check Answer
            </button>
            <button
              disabled={correct || wrong ? false : true}
              onClick={handleNextButton}
              className={`${
                correct || wrong
                  ? "border-black text-black bg-teal-500"
                  : "text-gray-500"
              }  border-2 border-b-4   font-bold tracking-tighter text-xl px-8 py-1 rounded-lg`}
            >
              Next
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
