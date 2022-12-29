import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestions = quizState.questions[quizState.currentQuestions]

const onSelectOption = (option) => {
  dispatch({
    type: "CHECK_ANSWER",
    payload: {answer: currentQuestions.answer, option},
  });
};

  return (
  <div id="question">
    <p>
      Question {quizState.currentQuestions + 1} of {quizState.questions.length}
    </p>
    <h2>{currentQuestions.question}</h2>
    <div id="options-container">
      {currentQuestions.options.map((option) => (
        <Option 
        option={option}
        key={option} 
        answer={currentQuestions.answer}
        selectOption={() => onSelectOption(option)}
        />  
      ))}
    </div>
    {quizState.answerSelected && (
    <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
      Continue
    </button>
    )}
  </div>
  );
};

export default Question;