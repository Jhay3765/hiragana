import React from "react";
import BasicQuiz from "../components/BasicQuiz";
import { commonThingsQuiz2 } from "@/app/utils/quizData";

//Feed The component the quiz Data
export default function page() {
  return <BasicQuiz quizData={commonThingsQuiz2} />;
}
