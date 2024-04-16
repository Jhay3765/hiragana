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
      <p className="text-5xl font-semibold tracking-tighter  mt-12 ml-24">
        Welcome to the learning hub
      </p>
      <main className="py-4  bg-amber-500 mx-24 flex  rounded-3xl  mt-12">
        <section className="border-r-4 gap-y-16 border-r-black flex flex-col items-end justify-end w-full">
          <LeftItem name="What The Flip" />
          <LeftItem name="What The Flip" />
          <LeftItem name="What The Flip" />

          <LeftItem name="What The Flip" />
        </section>
        <section className="flex flex-col gap-y-8 w-full">
          <RightItem name="What The Flip" />
          <RightItem name="What The Flip" />

          <RightItem name="What The Flip" />

          <RightItem name="What The Flip" />

          <RightItem name="What The Flip" />

          <RightItem name="What The Flip" />
        </section>

        {/* <div className="bg-zinc-900 font-bold noto-jp  ml-4  h-8 w-8 text-white rounded-full grid place-content-center">
          ゲ
        </div> */}
      </main>
      ;
    </div>
  );
}

const LeftItem = (props: Item) => {
  const { name, images } = props;
  return (
    <div className="bg-zinc-800 px-4 text-center mr-16 rounded-3xl  text-white w-fit relative  py-4 ">
      <aside className="w-16 h-1 absolute top-1/2 -right-16  bg-black"></aside>
      <h2>{name}</h2>

      <section className="flex mt-8"></section>
    </div>
  );
};

const RightItem = (props: Item) => {
  const { name, images } = props;
  return (
    <div className="bg-zinc-800 ml-16 px-4 text-center rounded-3xl  text-white w-fit relative  py-4 ">
      <aside className="w-16  h-1 absolute top-1/2 -left-16  bg-black"></aside>
      <h2>{name}</h2>
      <section className="flex mt-8 "></section>
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
