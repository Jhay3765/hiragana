import React from "react";
import BasicQuiz from "../components/BasicQuiz";
import { commonThingsQuiz } from "@/app/utils/quizData";

export default function page() {
  return <BasicQuiz quizData={commonThingsQuiz} />;
}
