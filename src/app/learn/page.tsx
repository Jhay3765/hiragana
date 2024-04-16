import React from "react";
import AppNavBar from "../components/AppNavBar";
import Image from "next/image";
import Link from "next/link";

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Introduction to Tailwind CSS",
    excerpt: "Learn the basics of Tailwind CSS and how to get started with it.",
    slug: "introduction-to-tailwind-css",
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Next.js",
    excerpt:
      "Discover how to create responsive layouts in Next.js using Tailwind CSS.",
    slug: "building-responsive-layouts-with-nextjs",
  },
  {
    id: 3,
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Explore strategies for improving performance in React applications.",
    slug: "optimizing-performance-in-react-applications",
  },
];

type Item = {
  name: string;
  images?: string;
};

export default function page() {
  return (
    <div className=" bg-orange-300 ">
      <AppNavBar name="learn" />
      <div className="max-w-7xl mx-auto">
        <p className="text-5xl font-semibold tracking-tighter  mt-12"></p>
        <main className="  space-y-8 mt-12 ">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </main>
      </div>
    </div>
  );
}

const Article = () => {
  return (
    <div className="   p-8  bg-orange-400 rounded-3xl flex justify-between  ">
      <section className="">
        <h2 className=" text-3xl font-bold tracking-tighter">
          What the heck are these colors anyway ?
        </h2>

        <p className="text-lg mt-3">
          Get and intro into the different japanese colors.{" "}
        </p>
      </section>
      <Link href={"/learn/2"} className="underline underline-offset-2 self-end">
        Read More
      </Link>
    </div>
  );
};

const Box = () => {
  return (
    <div className="bg-white   p-4 w-1/3 rounded-2xl ">
      <img
        className=" border-2 border-black  rounded-2xl"
        src="/assets/hir.jpg"
        alt=""
      />
      <h1 className="font-bold text-2xl mt-2 tracking-tighter">
        The Art of Hiragana
      </h1>
      <p className="mt-5  text-zinc-700">
        {" "}
        Explore the birth of groundbreaking ideas and inventions.{" "}
      </p>
      <Link href={"/learn/2"} className="underline text-right text-sm mt-10">
        Read More
      </Link>
    </div>
  );
};
