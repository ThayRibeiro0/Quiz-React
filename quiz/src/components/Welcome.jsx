import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  return (
    <div>
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botao abaixo para comecar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;