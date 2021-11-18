import React from "react";
import styled from "styled-components";

const HomeCircles = (props) => {
  const [state] = React.useState(5);
  const stateCount = Array.from({ length: state }, (v, i) => i);

  // 랜덤 숫자 만들기
  let random_item = Math.floor(Math.random() * 5);

  return (
    <div style={{ display: "flex" }}>
      {/* 5번 반복  */}
      {stateCount.map((v, i) => {
        if (i <= random_item) {
          //랜덤값보다 작을경우
          return (
            <Circle key={i} style={{ backgroundColor: "#fcc419" }}></Circle>
          );
          //랜덤값보다 클경우
        } else {
          return <Circle key={i}></Circle>;
        }
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
  margin: 0 3px;
`;
export default HomeCircles;
