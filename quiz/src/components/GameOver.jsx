import { useContext} from 'react';
import { QuizContext } from '../context/quiz';

import WellDone from '../img/okay1.svg';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  

  return (
    <div id="gameover">
        <h2>Game Over!</h2>
        <p>Score: {quizState.score}</p>
        <p>You got {quizState.score} out of {quizState.questions.length} {""}
        questions right.
        </p>
        <img className='imagemfiz' src={WellDone} style={{ minWidth: "450px", display: "flex" }} alt="Fim do Quiz"/>
        <button className='botao' onClick={() => dispatch({type: "NEW_GAME"})}>Restart</button>
    </div>
  );
};

export default GameOver