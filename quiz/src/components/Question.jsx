import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return (
  <div id="question">
    <p>Pergunta {quizState.currentQuestions} de {quizState.questions.lenght}</p>
    <h2>Pergunta atual</h2>
    <div id="options-container">
      <p>Opcoes</p>
    </div>
    <button>Continuar</button>
  </div>
  );
};

export default Question;