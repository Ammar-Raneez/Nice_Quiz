import React, { useState } from 'react';
import { Difficulty, fetchQuizQuestions } from './API';
import './App.css';
import QuestionCard from './components/QuestionCard/QuestionCard';

const TOTAL_QUESTIONS: number = 10;

function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

	const startTrivia = async () => {

    }

    const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {
        
    }

	return (
		<div className="app">
			<h1>Nice Quiz</h1>
			<button className="start" onClick={startTrivia}>
				Start
			</button>
			<p className="score">Score:</p>
			<p>Loading Questions...</p>
			{/* <QuestionCard 
				//array indexing starts from 0, but q num must be 1 
				questionNo={number + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[number].question}
				answers={questions[number].answers}
				userAnswer={userAnswers ? userAnswers[number] : undefined}
				callback={checkAnswer}
			/> */}
			<button className="next" onClick={nextQuestion}>
				Next Question
			</button>
		</div>
	);
}

export default App;
