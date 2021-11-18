import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Review from "./Review";
import Home from "./Home";

function App() {
  const [list] = React.useState({
    week: ["월", "화", "수", "목", "금", "토", "일"],
  });

  return (
    <Container className="App">
      <Route path="/" exact>
        <Home dayList={list} />
      </Route>
      <Route path="/review/:day" component={Review} />
    </Container>
  );
}
const Container = styled.div`
  max-width: 350px;
  max-height: 100vh;
  height: 80vh;
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 32px;
  box-sizing: border-box;
  margin: 5vh auto;
  text-align: center;
`;

export default App;
