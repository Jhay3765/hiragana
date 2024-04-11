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

export default function page() {
  return (
    <div className="bg-white">
      <AppNavBar name="Learn" />
      <p className="text-5xl font-semibold tracking-tighter  mt-12 ml-8">
        Welcome to the learning hub
      </p>
      <section className="flex px-8 gap-8">
        <div className=" py-72 bg-red-300 w-3/4  rounded-3xl  mt-12"></div>
        <div className=" p-8 bg-green-400  w-1/4  rounded-3xl  mt-12">
          <p className="text-2xl font-bold tracking-tighter">
            Unlocking the Palette: Learning Colors in Japanese
          </p>
        </div>
      </section>
      <section className="mt-12 bg-orange-300 mx-8 poppins  rounded-3xl p-24 space-y-8">
        <div className="flex gap-4">
          <Box />
          <Box />

          <Box />
        </div>
        <div className="flex gap-4">
          <Box />
          <Box />
          <Box />
        </div>

        <div className="flex gap-4">
          <Box />
          <Box />

          <Box />
        </div>
      </section>
      ;
    </div>
  );
}

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
