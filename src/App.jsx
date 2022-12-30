import './App.css';
import { Wellcome } from './components/Wellcome';
import { useContext, useEffect } from 'react';
import { Question } from './components/Question';
import { QuizContext } from './context/quiz';
import { GameOver } from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: "REODER_QUESTIONS"});
  }, [])

  return (
    <div className='App'>
      <h1><b>Quiz de Programação</b></h1>
      {quizState.gameStage === "Start" && <Wellcome></Wellcome>}
      {quizState.gameStage === "Playing" && <Question></Question>}
      {quizState.gameStage === "End" && <GameOver></GameOver>}
    </div>
  );
}

export default App;
