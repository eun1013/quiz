

const Results = ({onRestart,appScore}) => {
    return (
        <div className="result">
            <div className="result-box">
            <p>결과 발표!</p>
            <p>🏆최종점수🏆</p>
            <p>{appScore}점</p>
            </div>
            <button onClick={()=>{onRestart()}}>다른 카테고리 도전하기</button>
        </div>
    );
};


export default Results;