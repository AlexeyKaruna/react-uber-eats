import styled from "styled-components";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import { ButtonUp } from "../common/Button";

const StyleHomePage = styled.div`
  font-family: Roboto, sans-serif;
`;

function HomePage() {
  return (
    <StyleHomePage>
      <Header />
      <Main />
      <Footer />
      <ButtonUp href="#" />
    </StyleHomePage>
  );
}

export default HomePage;
