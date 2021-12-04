import styled from "styled-components";
import { device } from "../common/device";
import { RestText } from "../common/Text";
import Search from "./Search";
import FoodCard from "./FoodCard";
import MacImg from "./images/McDonald's.png";
import DimSumImg from "./images/DimSum & Co.png";
import DvizhokImg from "./images/Dvizhok - Manezhnaya square.png";
import NHAImg from "./images/NHA.png";
import TochkaZiImg from "./images/Tochka Zi - Colored boulevard.png";
import CinnabonImg from "./images/Cinnabon.png";
import PIZZELOVEImg from "./images/PIZZELOVE.png";
import ZyuCafeImg from "./images/Zyu Cafe - Tverskaya street.png";
import BarBQImg from "./images/Bar BQ Cafe.png";
const StyledMain = styled.main`
  padding-top: 72px;
  background-color: #f2f2f2;
  padding-bottom: 68px;
  @media ${device.lg} {
    background-color: #ffffff;
    padding-bottom: 100px;
  }
`;

function Main(props) {
  return (
    <StyledMain>
      <div className="container">
        <div className="row">
          <Search />
          <div className="col-xs-12 col-md-12 col-lg-12">
            <RestText size={22}>Moscow Restaurants</RestText>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <FoodCard
              img={MacImg}
              name="Макдоналдс - газетный"
              type="₽₽ • Бургеры"
              time="25-35 Min"
              href="#"
            ></FoodCard>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <FoodCard
              img={DimSumImg}
              name="DimSum & Co — ЦДМ"
              type="₽ • Японская • Китайская • Азиатская"
              time="40 - 50 Min"
              href="#"
            ></FoodCard>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <FoodCard
              img={DvizhokImg}
              name="ДвижОК — Манежная"
              type="₽ • Американская • Европейская"
              time="35 - 45 Min"
              href="#"
            ></FoodCard>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <FoodCard
              img={NHAImg}
              name="НЯ — NHA"
              type="₽₽ • Вьетнамская"
              time="30 - 40 Min"
              href="#"
            ></FoodCard>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <FoodCard
              img={TochkaZiImg}
              name="Точка Дзы — Цветной"
              type="₽₽ • Вьетнамская"
              time="40 - 50 Min"
              href="#"
            ></FoodCard>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <FoodCard
              img={CinnabonImg}
              name="Cinnabon"
              type="₽ • Выпечка • Десерты • Капкейки"
              time="25 - 35 Min"
              href="#"
            ></FoodCard>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <FoodCard
              img={PIZZELOVEImg}
              name="PIZZELOVE"
              type="₽₽ • Пицца"
              time="15 - 25 Min"
              href="#"
            ></FoodCard>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <FoodCard
              img={ZyuCafeImg}
              name="Zю кафе — Тверская"
              type="₽₽ • Японская"
              time="25 - 35 Min"
              href="#"
            ></FoodCard>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <FoodCard
              img={BarBQImg}
              name="Bar BQ Cafe — Манежная"
              type="₽₽₽ • Европейская"
              time="30 - 40 Min"
              href="#"
            ></FoodCard>
          </div>
        </div>
      </div>
    </StyledMain>
  );
}

export default Main;
