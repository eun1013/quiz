import "./App.scss";
import quizData from "./data/quizData";
import Categoris from "./Components/Categoris";
import { useState } from "react";
import QuizPage from "./Components/QuizPage";
import Results from "./Components/Results";

const App = () => {
  const [category,setcategory] = useState("");
  const [filterQuiz,setFilterQuiz] = useState([]);
  const [finished,setFinished] = useState(false);
  const [score,setScore] = useState(0);
                    //자식이 선택한 select값
  const onSelectCategory =(select)=>{
    setcategory(select);
    const quizArr = quizData.quizzes.filter((data)=>{
      return data.category === select;
    });
    setFilterQuiz(quizArr);
  }
  const handleFinish = (score)=>{
    setFinished(true);
    setScore(score);
  }
  const handleRestart=()=>{
    setcategory('');
    setFinished(false);
  }
  const handleCategory =(obj)=>{
    setcategory(obj)
  }
  return (
    <div className="app">
      { 
      !category && !finished &&
      <Categoris categoris={quizData.categories} onSelect={onSelectCategory}/>
      }
      {
        category && !finished &&(<QuizPage quiz={filterQuiz} onFinished={handleFinish} onSelect={handleCategory}/>)
      } 
      {
        finished && (<Results onRestart={handleRestart} appScore={score}/>)
      }
    </div>
  );
};

export default App;