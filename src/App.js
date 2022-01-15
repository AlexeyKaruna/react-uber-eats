import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import styled from "styled-components";
import Homepage from "./components/pages/HomePage";
import RestaurantPage from "./components/pages/RestaurantPage";

const StyledApp = styled.div`
  font-family: Roboto, sans-serif;
`;

function App() {
  return (
    <StyledApp>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/restaurant" element={<RestaurantPage />} />
          </Routes>
        </Fragment>
      </Router>
    </StyledApp>
  );
}

export default App;
