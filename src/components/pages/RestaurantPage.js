import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { ButtonUp } from "../common/Button";

const StyleRestaurantPage = styled.div`
  font-family: Roboto, sans-serif;
`;

function RestaurantPage() {
  return (
    <StyleRestaurantPage>
      <Header />
      <Footer />
      <ButtonUp href="#" />
    </StyleRestaurantPage>
  );
}

export default RestaurantPage;
