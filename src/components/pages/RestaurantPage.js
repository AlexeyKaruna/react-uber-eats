import styled from "styled-components";
import { device } from "../common/device";
import { useState } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import RestMainCard from "../main/mainrestaurantpage/RestNameCard";
import { dataRestMainCard, menuTypes, rest } from "../main/restDATA";
import ImgBackgroundLg from "../main/images/restimagebackground.png";
import ImgBackgroundMd from "../main/images/restimagebackgroundtablet.png";
import ImgBackgroundXs from "../main/images/restimagebackgroundmobile.png";
import Text from "../common/Text";
import FoodCard from "../main/mainrestaurantpage/FoodCard";

const StyledMainRestaurantPage = styled.div`
  margin-top: 72px;
  background: url(${ImgBackgroundXs}) no-repeat center top 0px;
  margin-bottom: 24px;

  @media ${device.md} {
    margin-bottom: 16px;
    background: url(${ImgBackgroundMd}) no-repeat center top 0px;
  }
  @media ${device.lg} {
    margin-bottom: 31px;
    background: url(${ImgBackgroundLg}) no-repeat center top 0px;
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

const MenuTypeButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  > ${Text} {
    color: ${(props) => (props.isActive ? "#327430" : "#626262")};
  }
`;

function RestaurantPage(props) {
  const [currentMenuType, setcurrentMenuType] = useState(menuTypes[0].id);
  const currentMenuTypeHeader = menuTypes.find(
    (menuType) => menuType.id == currentMenuType
  ).type;

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
                    key={rest.id}
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
                      <MenuTypeButton
                        isActive={menuHeadline.id == currentMenuType}
                        onClick={() => setcurrentMenuType(menuHeadline.id)}
                      >
                        <Text
                          size={16}
                          lineheight={19}
                          variant="gray"
                          id={menuHeadline.id}
                        >
                          {menuHeadline.type}
                        </Text>
                      </MenuTypeButton>
                    </div>
                  );
                })}
              </MenuListContainer>
            </div>
            {
              <div className="col-xs-12">
                <MenuHeader>
                  <div>
                    <a href="#">
                      <Text size={22} lineheight={34}>
                        {currentMenuTypeHeader}
                      </Text>
                    </a>
                  </div>
                </MenuHeader>
              </div>
            }
            {rest.menu
              .filter((food) => food.type === currentMenuType)
              .map(function (card) {
                return (
                  <div className="col-xs-12 col-lg-6">
                    <FoodCard
                      key={card.id}
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
