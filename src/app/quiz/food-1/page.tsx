import React from "react";
import { foodQuiz } from "@/app/utils/quizData";
import BasicQuiz from "../components/BasicQuiz";

export default function page() {
  return (
    <div>
      <BasicQuiz quizData={foodQuiz} />
    </div>
  );
}
