import React from 'react'
import { UserAnswer } from '../../types'

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
        <div>
            <p className="number">Question: {questionNo} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer, key) => (
                    <div key={key}>
                        {/* !!userAnser === userAnswer ? true : false */}
                        <button value={answer} disabled={!!userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard
