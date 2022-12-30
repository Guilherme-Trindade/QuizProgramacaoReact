import React, { useContext } from 'react'
import Quiz from '../img/quiz.svg';
import { QuizContext } from '../context/quiz';
import "./Wellcome.css";

export const Wellcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    console.log(quizState);

  return (
    <div id='wellcome'>
        <h2>
            Seja bem-vindo
        </h2>
        <p>Click no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type:"CHANGE_STATE"})}>
            Iniciar
        </button>
        <img src={Quiz} alt='Inicio do Quiz'></img>
    </div>
  )
}
