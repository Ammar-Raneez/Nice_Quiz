//based on API response
export declare type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const ENDPOINT: string = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const data = await(
        fetch(ENDPOINT)
            .then(response => response.json())
    )
    console.log(data);
}