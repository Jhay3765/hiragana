import Link from "next/link";
import AppNavBar from "./components/AppNavBar";
import Image from "next/image";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className=" ">
      <AppNavBar name="home" />
      <div className=" py-12">
        <Header />

        <p className="max-w-7xl mx-auto text-6xl font-bold tracking-tighter mt-24">
          Fun Activities
        </p>
        <div className=" border-black  flex w-full mt-8 mb-10 gap-4 max-w-7xl mx-auto poppins">
          <aside className="bg-indigo-300 p-8  rounded-lg  tracking-tighter">
            <Image
              src={"/assets/images/game.svg"}
              alt=""
              width={30}
              height={30}
            />
            <h2 className="mt-4  text-xl font-bold">Games</h2>
            <p className="mt-2  ">
              Play free games to help you memorize Japanese
            </p>
            <button></button>
          </aside>
          <aside className=" p-8   bg-red-300 rounded-lg   tracking-tighter">
            Learn new words and phrases through fun articles
          </aside>
          <aside className="p-8  rounded-lg bg-green-300 tracking-tighter">
            Check out all the japanese characters to help you learn
          </aside>
        </div>
      </div>

      <section className=" bg-white poppins">
        <div className="max-w-5xl mx-auto  border-black  ">
          <section className="space-y-4 p-4 max-w-5xl pt-10 mx-auto">
            <div className="flex justify-center">
              <h1 className="bg-indigo-400 px-4 py-2 text-xl border rounded-lg border-black border-b-4 border-r-4">
                New Articles
              </h1>
            </div>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />

            <Article />
          </section>
          <Pagination />
        </div>
      </section>
    </div>
  );
}

const Article = () => {
  return (
    <div className="flex gap-4 border-b-2 border-black py-6 hover:bg-gray-200 px-4 cursor-pointer">
      <section>
        <img
          className="border-4 border-black"
          src="/assets/new.png"
          width={150}
        />
      </section>
      <aside className="space-y-1">
        <div className="bg-pink-300  px-1 py-1 text-xs font-bold w-fit border-2 border-black">
          #LEARN
        </div>
        <h1 className="text-2xl">
          WHATS THE DIFFERENCE? COMMON JAPANESE BEGINNER QUESTIONS
        </h1>
        <p className="text-sm max-w-2xl line-clamp-2">
          When youre a beginning learner of Japanese, all youve got are
          questions. Its easy to get overwhelmed by everything you dont know!
          Especially when it comes to grammar, there are a lot of grammar points{" "}
        </p>
      </aside>
    </div>
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
