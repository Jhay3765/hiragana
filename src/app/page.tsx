import Link from "next/link";
import AppNavBar from "./components/AppNavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <AppNavBar name="Home" />
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

const Header = () => {
  return (
    <>
      <section className=" relative   z-10 py-24    max-w-7xl  rounded-3xl bg-pink-200   mx-auto   border-black    p-20 ">
        <div className="absolute right-24 top-24 py-24 px-24 bg-red-500 -z-10 rounded-full border-4 border-black"></div>
        <div className="absolute right-36 top-36 py-24 px-24 bg-blue-500 -z-10 rounded-full border-4 border-black"></div>

        <h1 className=" text-6xl  font-bold  w-fit px-2   tracking-tighter ">
          Basic Japanse colors
        </h1>
        <p className="poppins text-lg w-fit py-1 text-zinc-700 px-2">
          Pick up on some basic colors for your journey
        </p>

        <button className="hover:bg-black hover:shadow-sm  border text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:text-white hover:border-transparent  transition-all duration-600  font-bold  rounded-lg   px-12 py-2  bg-rose-400   text-lg  border-black mt-8">
          Read Article
        </button>
      </section>
    </>
  );
};

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
