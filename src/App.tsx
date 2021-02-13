import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import './App.css';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { Difficulty, QuestionState, UserAnswer } from './types';

const TOTAL_QUESTIONS: number = 10;

function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	console.log(questions)

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(
			TOTAL_QUESTIONS,
			Difficulty.EASY
		)

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
    }

    const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			//get value of the button (the answer selected)
			const answer = e.currentTarget.value;

			//is answer correct, if so increment score
			const correct = questions[number].correct_answer === answer;

			//take previous score state, and add one to it
			if (correct) setScore(prev => prev + 1);

			const userAnswer = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer
			}

			//take previous user answers, keep everything as it is
			//and append the newest answer
			setUserAnswers(prev => [...prev, userAnswer])
		}
    }

    const nextQuestion = () => {
        
    }

	return (
		<div className="app">
			<h1>Nice Quiz</h1>

			{/* show start only at beginning */}
			{(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
				<button className="start" onClick={startTrivia}>
					Start
				</button>
			)}

			{/* show score only during game */}
			{!gameOver && <p className="score">Score:</p>}

			{/* show loading only when questions are loading */}
			{loading && <p>Loading Questions...</p>}

			{/* show question card only during game */}
			{(!loading && !gameOver) && (
				<QuestionCard 
					//array indexing starts from 0, but q num must be 1 
					questionNo={number + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}

			{/* show next q button, if current q is answered and q is not final */}
			{(!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
				<button className="next" onClick={nextQuestion}>
					Next Question
				</button>
			))}
		</div>
	);
}

export default App;
