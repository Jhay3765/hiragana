import React from "react";
import AppNavBar from "../components/AppNavBar";
import Link from "next/link";

type quiz = {
  img?: string;
  name: string;
  desc: string;
  link: string;
};
export default function page() {
  return (
    <div className="">
      <AppNavBar name="Quiz" />
      {/* <div className="py-20 bg-indigo-500 border-b-2 text-center text-7xl border-black">
        <h1 className="max-w-4xl mx-auto">
          Test your knowledge and see how far you have come !{" "}
        </h1>
      </div> */}
      <main className="mt-8">
        <ul className="grid grid-cols-3 max-w-6xl mx-auto gap-8">
          <Quiz
            name="Common Things 1"
            desc="Begginer level quiz for common things you might see everyday"
            link="common-items"
          />
          <Quiz
            name="Common Things 2"
            desc="Intermediate level quiz of common things you might see every day"
            link="common-things-2"
          />
          <Quiz name="Food 1" desc="Can you name these foods ?" link="food-1" />
        </ul>
      </main>
    </div>
  );
}

const Quiz = (props: quiz) => {
  const { name, desc, img, link } = props;
  return (
    <div className="border-2 border-b-4 bg-white border-black rounded-xl p-4">
      <section className="p-20 text-indigo-500 bg-indigo-500 border-2 border-black rounded-xl">
        f
      </section>
      <h1 className="font-bold text-lg mt-2"> {name} </h1>
      <p className="text-sm">
        Test yourself to see if you remember these common items !
      </p>
      <Link href={`/quiz/${link}`}>
        <button className="mt-4  rounded-xl border-2 border-b-4 border-black bg-white w-full py-1">
          Play
        </button>
      </Link>
    </div>
  );
};
