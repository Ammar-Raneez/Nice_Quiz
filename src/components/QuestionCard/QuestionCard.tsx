import React from 'react'
import { UserAnswer } from '../../types'
import { QuestionCardButtonWrapper, QuestionCardWrapper } from './QuestionCard.styles'

declare type Props = {
    question: string;
    answers: string[];
    callback: (e : React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: UserAnswer | undefined;
    questionNo: number;
    totalQuestions: number;
}

// Or
// interface Props {
//     question: string;
//     answers: string[];
//     callback: any;
//     userAnswer: any;
//     questionNo: number;
//     totalQuestions: number;
// }

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNo, 
    totalQuestions 
}) => {
    return (
        <QuestionCardWrapper>
            <p className="number">Question: {questionNo} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer, key) => (
                    <QuestionCardButtonWrapper 
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer} 
                        key={key}
                    >
                        {/* !!userAnser === userAnswer ? true : false */}
                        <button value={answer} disabled={!!userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </QuestionCardButtonWrapper>
                ))}
            </div>
        </QuestionCardWrapper>
    )
}

export default QuestionCard
