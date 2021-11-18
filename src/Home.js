import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeCircles from "./HomeCircles";

const Home = (props) => {
  const dayList = props.dayList.week;
  return (
    <>
      <TiTle>내 일주일은 ?</TiTle>
      {dayList.map((list, index) => {
        return (
          <WeekList key={index}>
            {list}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <HomeCircles></HomeCircles>
            </div>
            <StyledLink to={`/review/${list}`}></StyledLink>
          </WeekList>
        );
      })}
    </>
  );
};

const TiTle = styled.h1`
  font-size: 1.5em;
  margin-top: 40px;
`;

const WeekList = styled.div`
  display: flex;
  margin: 30px 0;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
`;
const StyledLink = styled(Link)`
  width: 0px;
  height: 0px;
  border-top: 15px solid transparent;
  border-left: 30px solid red;
  border-bottom: 15px solid transparent;
  cursor: pointer;
`;
export default Home;
