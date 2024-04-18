import Link from "next/link";
import AppNavBar from "./components/AppNavBar";
import Image from "next/image";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className="bg-orange-300   ">
      <AppNavBar name="home" />
      <main className="relative pt-24">
        <div className="text-center overflow-x-visible sm:text-left xl:flex-row pb-36 max-w-7xl sm:mt-24 ml-2 flex flex-col items-center justify-between gap-8 xl:mx-auto ">
          <Image
            src={"/assets/images/fish.svg"}
            alt=" "
            width={400}
            height={400}
            className="xl:hidden"
          ></Image>
          <section className="z-20">
            <h1 className="font-bold md:whitespace-nowrap text-4xl sm:text-6xl md:text-7xl   xl:text-8xl tracking-tighter ">
              theJapanese <span className="text-orange-600">Spot</span>
            </h1>
            <p className="text-base  sm:text-2xl mt-8 tracking-tighter max-w-xl text-zinc-800 ">
              Learn about the japanese language and culture through our curated
              selection of articles, quizes and more !
            </p>
          </section>

          <Image
            src={"/assets/images/fish.svg"}
            alt=" "
            width={500}
            height={500}
            className="hidden xl:block"
          ></Image>

          {/* <div className=" border-black  flex w-full mt-8 mb-10 gap-4 max-w-7xl mx-auto poppins">
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
        </div> */}
        </div>
      </main>

      {/* <section className=" bg-white poppins">
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
      </section> */}
    </div>
  );
}
