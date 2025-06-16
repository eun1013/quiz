import { useState } from "react";

const QuizPage = ({quiz,onFinished,onSelect}) => {
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
    const handleBack =()=>{   //문제 이전 버튼 넘기기
        if(currentIdx-1 >= 0){
            setCurrentIdx(currentIdx-1);
        } else {
            onSelect(null);
        }
    }
    const handleNext = ()=>{
        if(currentIdx+1 < quiz.length){
            setCurrentIdx(currentIdx+1)
        } else{
            console.log("다음 문제가 없습니다!")
        }
    }
    return (
        <div className='quiz-page'>
            <div className="quiz-top">
            <button onClick={handleBack}>＜</button>
            <h2> 퀴즈({currentIdx+1}/{quiz.length}) </h2>
            <button onClick={handleNext}>＞</button>
            </div>
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