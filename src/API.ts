import { Difficulty, Question } from "./types";

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const ENDPOINT: string = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const data = await(
        fetch(ENDPOINT)
            .then(response => response.json())
    )

    return data.results.map((question: Question) => (
        {
            ...question,
            answer: 
        }
    ))
}