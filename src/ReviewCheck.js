import React from "react";
import styled from "styled-components";

const ReviewCheck = (props) => {
  const [state, setState] = React.useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...state];

    // 5번 반복 ,클릭한 번호 만큼 참으로 변경
    for (let i = 0; i < clickStates.length; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }
    //state 업데이트
    setState(clickStates);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexGrow: 1,
      }}
    >
      {/* 5개 반복  */}
      {state.map((v, i) => {
        return (
          <Circle
            key={i}
            // 클릭이벤트
            onClick={() => handleStarClick(i)}
            style={{ backgroundColor: v ? "#fcc419" : "#eee" }}
          ></Circle>
        );
      })}
    </div>
  );
};
const Circle = styled.div`
  width: 35px;
  height: 35px;
  background-color: #eee;
  border-radius: 50%;
  cursor: pointer;
  .yellowStar {
    color: #fcc419;
  }
`;

export default ReviewCheck;
