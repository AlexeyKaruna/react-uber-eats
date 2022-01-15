import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import { ButtonUp } from "../common/Button";

function HomePage() {
  return (
    <>
      {" "}
      <Header />
      <Main />
      <Footer />
      <ButtonUp href="#" />
    </>
  );
}

export default HomePage;
