import { useContext } from "react";
import { QuizContext } from "../context/quiz";

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
      <p>Opcoes</p>
    </div>
    <button>Continuar</button>
  </div>
  );
};

export default Question;