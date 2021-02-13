import { Difficulty, Question } from "./types";
import { shuffleArray } from "./utils";

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const ENDPOINT: string = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const data = await(
        fetch(ENDPOINT)
            .then(response => response.json())
    )

    //return all questions of trivia with their respective answers
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}