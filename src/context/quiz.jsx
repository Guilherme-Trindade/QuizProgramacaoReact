import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"];

const inicialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0
}

const quizReducer = (state, action) => {
    console.log(state,action);

    switch(action.type){
        case "CHANGE_STATE":
            return{
                ...state,
                 gameStage: STAGES[1],
            };
        case "REODER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };
        case "CHANGE_QUESTION":
            const nexQuestion = state.currentQuestion + 1;
            return {
                ...state,
                currentQuestion: nexQuestion,
            };
        default:
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) =>
{
    const value = useReducer(quizReducer, inicialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};