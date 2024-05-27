import React from "react";
import AppNavBar from "../components/AppNavBar";

import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "What the heck are these colors anyway",
    excerpt: "Get an intro into the different japanese colors.",
    slug: "introduction-to-japanese-colors",
  },
];

export default function page() {
  return (
    <div className="  min-h-screen">
      <AppNavBar name="learn" />
      <div className="relative py-48 max-w-7xl mx-auto">
        <Image
          src="/assets/rb.jpg"
          alt=""
          fill
          className="w-full   mt-12 bg-cover opacity-70  -z-10"
        />
        Japanese Articles
      </div>

      <div className="max-w-7xl mx-auto px-2">
        <p className="text-5xl font-semibold tracking-tighter  mt-12"></p>
        <main className="space-y-8 mt-12 ">
          {posts.map((post, index) => {
            return (
              <Article
                title={post.title}
                excerpt={post.excerpt}
                id={post.id}
                slug={post.slug}
                key={index}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

const Article = (props: Post) => {
  return (
    <Link
      href={`/learn/${props.slug}`}
      className=" hover:bg-orange-500 transition-all duration-300  p-6  bg-zinc-900 rounded-3xl flex flex-col md:flex-row justify-between  "
    >
      <section className="">
        <h2 className="text-xl md:text-3xl font-bold tracking-tighter">
          {props.title}
        </h2>

        <p className="md:text-lg text-sm text-zinc-400 md:mt-4">
          {props.excerpt}
        </p>
      </section>
      <div className="underline underline-offset-2 text-xs md:text-base self-end hover:font-bold text-zinc-400">
        Read More
      </div>
    </Link>
  );
};

const Pagination = () => {
  return (
    <div className="flex justify-center mt-8">
      {/* Previous Button */}
      <a
        href="#"
        className="flex items-center justify-center px-4 h-10 text-base font-medium border-2 border-black "
      >
        Previous
      </a>
      {/* Next Button */}
      <a
        href="#"
        className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium border-2 border-black"
      >
        Next
      </a>
    </div>
  );
};
