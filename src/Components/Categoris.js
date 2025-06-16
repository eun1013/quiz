import styled from "styled-components";


const Categoris = ({categoris,onSelect}) => {
    return (
        <div className="category"> 
            <h1>🎨디자인 <br/> 톡!톡! Quiz</h1>
            <p>원하는 카테고리를 선택하세요!✨</p>
            <div className="category-wrap">
                {
                categoris.map((item,idx)=>{
                    return (<button key={idx} onClick={()=>onSelect(item)}>{item}</button>);
                })
                }
            </div>
        </div>
    );
};

export default Categoris;