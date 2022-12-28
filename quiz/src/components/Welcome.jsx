import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.png";

import "./Welcome.css";

const Welcome = () => {
  const quizState = useContext(QuizContext);

  console.log(quizState);

  return (
    <div id="welcome">
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botao abaixo para comecar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;