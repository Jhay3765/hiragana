import React from "react";
import CharacterSheet from "@/app/components/CharacterSheet";
import AppNavBar from "@/app/components/AppNavBar";

export default function page() {
  return (
    <div>
      <div>
        <AppNavBar name="Characters" />

        <section className="flex justify-center max-w-7xl  mx-auto">
          {/* <div className="text-7xl   mx-auto   border-b-2 border-black tracking-tighter text-center bg-rose-500 py-20 mb-20">
            <h1>Hiragana List</h1>
          </div> */}
          <div className="flex max-w-7xl mx-auto">
            <aside className="bg-blue-400 h-fit">The Japanese Alphabet</aside>

            <main className=" bg-green-400    w-fit   ">
              <ul className="flex pt-8 gap-4 text-xl ">
                <h2 className=" bg-rose-500 border-b-4  font-bold  border-2 rounded-xl border-black px-4 py-2">
                  Hiragana
                </h2>
                <h2 className=" bg-white  border-b-4 px-4 py-2  rounded-xl border-2 border-black">
                  Katakana
                </h2>
                <h2 className=" bg-white  border-b-4 px-4 py-2 rounded-xl border-2 border-black ">
                  Kanji
                </h2>
              </ul>

              {/* <p className="mb-12 max-w-xl text-lg mx-auto mt-10">
              To embark on the journey of learning Japanese, the initial step is
              to familiarize oneself with the alphabet, or more accurately, the
              sounds inherent in the language. Unlike several other Asian
              languages, Japanese does not employ tones. Instead, it revolves
              around distinct characters. The primary set of characters used in
              Japanese is known as Hiragana. Furthermore, Japanese encompasses
              two additional character sets: Kanji, derived from Chinese
              characters, and Katakana, predominantly utilized for foreign
              words. However, we will delve into Katakana in Lesson 2. <br />{" "}
              <br /> {"  "}
              It&apos;s crucial not to feel pressured to memorize all Hiragana
              characters before progressing. Rather, learn them gradually as you
              navigate through subsequent lessons. Japanese features five
              vowels: &apos;a&apos; pronounced as &apos;ahh&apos; &apos;i&apos;
              pronounced akin to the &apos;e&apos; in &apos;eat&apos;
              &apos;u&apos; pronounced like the &apos;oo&apos; in "soon" "e"
              pronounced similar to the &apos;e&apos; in &apos;elk&apos;
              &apos;o&apos; pronounced as &apos;oh&apos; Notably, all Hiragana
              characters conclude with one of these vowels, except for "n."
              Additionally, it's worth noting that the Japanese consonant "r"
              differs slightly from its English counterpart, being pronounced as
              a blend of "d," "r," and "l," with a subtle rolling effect.
            </p> */}
              <CharacterSheet />
            </main>
          </div>
        </section>
      </div>
    </div>
  );
}
