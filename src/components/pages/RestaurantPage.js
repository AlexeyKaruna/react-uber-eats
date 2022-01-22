import styled from "styled-components";
import { device } from "../common/device";
import { useState } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import RestMainCard from "../main/mainrestaurantpage/RestNameCard";
import {
  dataRestMainCard,
  dataMenuHeader,
  menuTypes,
  rest,
} from "../main/restDATA";
import ImgBackgroundLg from "../main/images/restimagebackground.png";
import ImgBackgroundMd from "../main/images/restimagebackgroundtablet.png";
import ImgBackgroundXs from "../main/images/restimagebackgroundmobile.png";
import Text from "../common/Text";
import FoodCard from "../main/mainrestaurantpage/FoodCard";

const StyledMainRestaurantPage = styled.div`
  margin-top: 72px;
  background: url(${ImgBackgroundXs}) no-repeat center top 0px;
  margin-bottom: 40px;
  > div div:last-child div {
    margin-bottom: 0px;
  }
  
  @media ${device.md} {
    margin-bottom: 48px;
    background: url(${ImgBackgroundMd}) no-repeat center top 0px;
  }
  @media ${device.lg} {
    margin-bottom: 80px;
    background: url(${ImgBackgroundLg}) no-repeat center top 0px;
    > div div:nth-child(9) div {
      margin-bottom: 0px;
  }
`;

const MenuListContainer = styled.div`
  background: #ffffff;
  border-bottom: 1px solid rgba(117, 117, 117, 0.2);
  padding-top: 32px;
  padding-bottom: 29px;
  display: none;
  @media ${device.md} {
    display: flex;
    justify-content: start;
  }
  > div {
    margin-right: 40px;
  }
  > div:last-child {
    margin-right: 0;
  }
  > div a span:hover {
    color: #327430;
  }
`;

const MenuHeader = styled.div`
  margin-top: 56px;
  margin-bottom: 43px;
  display: flex;
  justify-content: center;
  > div a span:hover {
    color: #327430;
  }
  > div {
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(117, 117, 117, 0.2);
  }
  @media ${device.md} {
    margin-bottom: 32px;
    justify-content: start;
    > div {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`;

function RestaurantPage(props) {
  const [currentMenuType, setcurrentMenuType] = useState(1);
  return (
    <>
      <Header />
      <StyledMainRestaurantPage>
        <div className="container">
          <div className="row">
            {dataRestMainCard.map(function (rest) {
              return (
                <div className="col-xs-12 col-md-7 col-lg-5">
                  <RestMainCard
                    name={rest.name}
                    type={rest.type}
                    time={rest.time}
                  ></RestMainCard>
                </div>
              );
            })}

            <div className="col-xs-12">
              <MenuListContainer>
                {menuTypes.map(function (menuHeadline) {
                  return (
                    <div>
                      <a
                        href="#"
                        onClick={() => {
                          setcurrentMenuType(menuHeadline.id);
                          console.log(currentMenuType);
                        }}
                      >
                        <Text size={16} lineheight={19} variant="gray">
                          {menuHeadline.type}
                        </Text>
                      </a>
                    </div>
                  );
                })}
              </MenuListContainer>
            </div>
            <div>{currentMenuType}</div>
            {dataMenuHeader.map(function (menuHeaderName) {
              return (
                <div className="col-xs-12">
                  <MenuHeader>
                    <div>
                      <a href="#">
                        <Text size={22} lineheight={34}>
                          {menuHeaderName.name}
                        </Text>
                      </a>
                    </div>
                  </MenuHeader>
                </div>
              );
            })}
            {rest.menu.map(function (card) {
              return (
                <div className="col-xs-12 col-lg-6">
                  <FoodCard
                    name={card.name}
                    description={card.description}
                    price={card.price}
                    image={card.image}
                  ></FoodCard>
                </div>
              );
            })}
          </div>
        </div>
      </StyledMainRestaurantPage>
      <Footer />
    </>
  );
}

export default RestaurantPage;
