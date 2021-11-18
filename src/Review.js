import React from "react";
import { useParams, useHistory } from "react-router";
import styled from "styled-components";
import ReviewCheck from "./ReviewCheck";

const Review = (props) => {
  const day = useParams();
  const history = useHistory();
  // console.log(day);

  return (
    <div>
      <TiTle>
        <Span>{day.day}요일</Span> 평점 남기기
      </TiTle>
      <ReviewCheck />
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        평점 남기기
      </Button>
    </div>
  );
};
//타이틀
const TiTle = styled.h1`
  font-size: 1.5em;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-weight: normal; */
`;
const Span = styled.span`
  background-color: #ff9900;
  padding: 5px;
  border-radius: 10px;
  color: #fff;
  margin-right: 5px;
`;
const Button = styled.button`
  background-color: purple;
  width: 100%;
  padding: 20px 0;
  border: 1px solid transparent;
  border-radius: 10px;
  margin-top: 30px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
`;
export default Review;
