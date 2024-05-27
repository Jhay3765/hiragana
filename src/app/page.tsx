import Link from "next/link";
import AppNavBar from "./components/AppNavBar";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowUpRight } from "lucide-react";
const learningApps = [
  {
    title: "LingoDeer",
    description:
      "This app is a fantastic and structured introduction to Japanese, featuring HD audio by native speakers. Users can learn in Kana, Kanji, and Romaji, and it works offline.",
  },
  {
    title: "Drops – Learn Japanese",
    description:
      "This simple but powerful app is entertaining, educational, and free. With a focus on visual learning and 5-minute lesson limits, this app is easy to integrate into your daily language learning regimen and is very effective.",
  },
  {
    title: "Duolingo",
    description:
      "Duolingo has become a leader in the language learning world and for good reason. It’s fast, fun, well designed, suitable for all ages, and turns learning a foreign language into a challenging and pretty addictive game.",
  },
  {
    title: "Memrise",
    description:
      "Memrise is a really fast, fun, and free language learning app/website that is sure to get you hooked. There is a visual flashcard component that also incorporates audio from a community of native speakers. Memrise uses spaced repetition and is really effective at drilling vocabulary and phrases into your memory.",
  },
  {
    title: "Clozemaster",
    description:
      "This popular app uses gamification and is a great addition to your language learning regimen, no matter what your level. It is very effective for vocabulary acquisition and billed as a great app to use after Duolingo.",
  },
  {
    title: "Anki Flashcards",
    description:
      "This app allows you to make your own flashcards or download a premade “deck” from a selection of over 80 million.",
  },
  {
    title: "Learn Japanese – Phrases & Words for Travel",
    description:
      "A handy little app to have on hand when traveling to Japan, which helps you to easily access basic phrases and vocabulary.",
  },
  {
    title: "Learn Japanese Phrasebook",
    description:
      "This useful app will help you learn Japanese words and sentences with recordings made by native speakers. The free version has 400+ practical phrases.",
  },
  {
    title: "Learn Japanese by 50 Languages",
    description:
      "This app is great for beginners (A1-A2) to increase practical vocabulary which is useful for managing everyday situations (at a store, restaurant, bank, doctor, etc). With the free version, you will have access to 30 complete lessons.",
  },
  {
    title: "Japanese Kana Alphabet by TenguGo",
    description:
      "This app will teach you how to read and write Hiragana and Katakana. It is organized into chapters with quizzes and flashcards for review and features audio examples from native Japanese speakers.",
  },
  {
    title: "Kanji Memory Hint I by The Japan Foundation",
    description:
      "This app is for A1 level Japanese language learners and helps you study Kanji in a fun way using mnemonic pictures.",
  },
  {
    title: "Kanji Memory Hint II by The Japan Foundation",
    description:
      "This app is for A2 level Japanese language learners and helps you study Kanji in a fun way using mnemonic pictures.",
  },
  {
    title: "Hiragana Memory Hint English Version by The Japan Foundation",
    description:
      "This app is for complete beginners. It helps you to study Hiragana in a fun way using mnemonic pictures and features a number of quizzes that allow you to test your understanding.",
  },
  {
    title: "Katakana Memory Hint English Version by The Japan Foundation",
    description:
      "This app is for complete beginners. It helps you to study Katakana in a fun way using mnemonic pictures and features a number of quizzes that allow you to test your understanding.",
  },
  {
    title: "Obenkyo",
    description:
      "This app helps you learn Japanese Hiragana, Katakana, and Kanji and features lots of practice quizzes.",
  },
  {
    title: "Japanese Kanji Tree",
    description:
      "The Kanji Tree app teaches you Kanji and how to read and write Japanese words. The best part is that it is completely free to use and ad-free.",
  },
  {
    title: "Riraku – Japanese Speaking",
    description:
      "This app helps users to improve listening skills, reading comprehension, and speaking skills.",
  },
  {
    title: "HelloTalk",
    description:
      "HelloTalk is a global language learning social network that connects you with native speakers of other languages so that you can practice your speaking and listening skills with native speakers via text/audio messages and free audio and video calls. The free version allows you to choose one native language and one target language.",
  },
  {
    title: "TangoRisto",
    description:
      "This app is a Japanese reader that features daily news articles, along with furigana and English definitions, to help learners build Japanese language skills.",
  },
  {
    title: "Japanese Kanji Study",
    description:
      "Although much of the app needs to be unlocked with the paid upgrade, the free version of this app is ad-free, covers the N5 level, and offers users unlimited access to study hiragana, katakana, radicals, and beginner kanji.",
  },
  {
    title: "Internet Polyglot",
    description:
      "This free app uses lessons, games, and pictures to teach foreign languages to beginners. Although Internet Polyglot is far from a standalone language learning tool, it is a useful supplement to help you to learn and retain vocabulary.",
  },
  {
    title: "Tandem Language Exchange",
    description:
      "This app matches you with language exchange partners from all over the world, providing the opportunity to practice those essential conversation skills that are necessary to take your language skills to the next level.",
  },
  {
    title: "Bunpo: Learn Japanese",
    description:
      "This robust, completely free app helps users to Learn Japanese through fun interactive lessons. Users will master the Japanese alphabets (Hiragana and Katakana) and learn Japanese grammar from JLPT N5 all the way through N1. Bunpo offers writing, reading, and listening practice, as well as 1800 example sentences, 8000 quiz questions, and detailed Grammar notes. It also includes a Japanese grammar dictionary.",
  },
];
export default function Home() {
  return (
    <div className="relative   ">
      <AppNavBar name="home" />
      <main className="  h-screen  px-4 mt-8">
        <div className="flex gap-24">
          <LearnJap />
          {/* <section className="bg-zinc-900 px-24 text-zinc-100 rounded-3xl">
            <div className="p-2 bg-orange-300 rounded-3xl w-fit">
              <ArrowUpRight className=" text-zinc-900  " />
            </div>
            <p> Go Through all the Japanese Characters</p>
          </section> */}
        </div>

        <div className="max-w-6xl mt-8 space-y-2 mx-auto bg-orange-300 text-orange-100 p-8 rounded-3xl">
          <h1 className="text-3xl  font-bold tracking-tighter mb-8">
            Other Free Japanese Resources on the Web
          </h1>
          {learningApps.map((app, index) => {
            return (
              <Item
                description={app.description}
                title={app.title}
                key={index}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

const Item = (props: { description: string; title: string }) => {
  return (
    <div>
      <p className="text-md ">
        <span className="font-bold">{props.title}</span>-{props.description}
      </p>
    </div>
  );
};

const LearnJap = () => {
  return (
    <section className="max-w-6xl w-full mx-auto z-20 py-24 bg-orange-300 text-orange-50 full  rounded-3xl text-center">
      <h1 className="font-bold  md:whitespace-nowrap text-4xl sm:text-6xl md:text-7xl    tracking-tighter ">
        Learn Japanese
      </h1>
      <p className="text-base mx-auto px-4 mb-24 text-orange-100 sm:text-2xl mt-8 tracking-tighter max-w-xl  ">
        Welcome to the site ! If youre passionate about Japanese characters and
        love testing your knowledge, youve come to the right place. Our website
        is dedicated to providing a fun and educational experience.
      </p>
      <Link
        href={"/quiz"}
        className="bg-orange-400 text-zinc-900 rounded-3xl px-6 py-2 font-bold text-xl hover:bg-orange-500 "
      >
        Get Started{" "}
      </Link>
    </section>
  );
};
