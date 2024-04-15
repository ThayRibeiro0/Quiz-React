import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.png";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Welcome to this page</h2>
        <p>Click the button below to get started:</p>
        <button onClick={() => dispatch({type: "CHANGE_STAGE"})}>
          Start
        </button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;