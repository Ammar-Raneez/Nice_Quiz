import React from 'react'

declare type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: string;
    questionNo: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNo, 
    totalQuestions 
}) => {
    return (
        <div>
            <p className="number">Question: {questionNo} / {totalQuestions}</p>
        </div>
    )
}

export default QuestionCard
