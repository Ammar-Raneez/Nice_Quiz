//based on API response
export declare type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

//user answer type
export declare type UserAnswer = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

//creates another type w all properties of Question
//but also an additional answers property (this will be used to hold all answers)
//so that it can be displayed on the UI
export declare type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}