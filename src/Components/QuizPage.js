import { useState } from "react";

const QuizPage = ({quiz,onFinished}) => {
    const [currentIdx,setCurrentIdx] = useState(0);
    const [score,setScore] = useState(0);
    const currenQuiz = quiz[currentIdx];
    const handleClick =(item)=>{
        // 정답인지 아닌지 체크를 해줘야함
        // if(item === currenQuiz.correct){
        //     setScore( score+10 );
        // } 
        const result = (item === currenQuiz.correct) ? score+10 : score;
        if(currentIdx+1 < quiz.length){
            //계속 실행이 되어야하고
            setCurrentIdx(currentIdx+1);
            setScore(result);
        }else{
            //문제 끝
            // console.log("문제 끝")
            onFinished(result);
        }
    }
    return (
        <div className='quiz-page'>
            <h2>＜ 퀴즈({currentIdx+1}/{quiz.length}) ＞</h2>
            <div className="quiz-question">
            <p>Q 질문</p>
            <p>{currenQuiz.question}</p>
            </div>
            <div className="choices">
                {
                    currenQuiz.choices.map((item,idx)=>{
                        return <button key={idx} onClick={()=>{handleClick(item)}}>{item}</button>
                    })
                }
            </div>
            <p className="score">점수 : {score}</p>
        </div>
    );
};

export default QuizPage;