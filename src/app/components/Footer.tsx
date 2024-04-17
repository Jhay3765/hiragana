import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <Image
        src={"/assets/images/wave1.svg"}
        alt=" "
        height={100}
        width={200}
        className="w-full"
      ></Image>
      <div className="relative bg-orange-600">
        <h2 className="pl-2">Made with Love by Jerone</h2>
      </div>
    </>
  );
}
