import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestions = quizState.questions[quizState.currentQuestions]

  return (
  <div id="question">
    <p>
      Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length}
    </p>
    <h2>{currentQuestions.question}</h2>
    <div id="options-container">
      {currentQuestions.options.map((option) => (
        <Option option={option} key={option} />
      ))}
    </div>
    <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
      Continuar
    </button>
  </div>
  );
};

export default Question;