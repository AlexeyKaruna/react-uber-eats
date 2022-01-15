import styled from "styled-components";
import { device } from "../common/device";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import RestMainCard from "../main/RestMainCard";
import { dataRestMainCard, dataMenuList } from "../main/restDATA";
import ImgBackgroundLg from "../main/images/restimagebackground.png";
import ImgBackgroundMd from "../main/images/restimagebackgroundtablet.png";
import ImgBackgroundXs from "../main/images/restimagebackgroundmobile.png";
import Text from "../common/Text";

const StyledMainRestaurantPage = styled.div`
  margin-top: 72px;
  background: url(${ImgBackgroundXs}) no-repeat center top 0px;
  margin-bottom: 40px;

  @media ${device.md} {
    margin-bottom: 48px;
    background: url(${ImgBackgroundMd}) no-repeat center top 0px;
    background-color: #f2f2f2;
  }
  @media ${device.lg} {
    margin-bottom: 80px;
    background: url(${ImgBackgroundLg}) no-repeat center top 0px;
  }
`;

const MenuListContainer = styled.div`
  background: #ffffff;
  border-bottom: 1px solid rgba(117, 117, 117, 0.2);
  padding-top: 32px;
  padding-bottom: 29px;
  display: flex;
  justify-content: start;
  &:last-child {
    margin-right: 0;
  }
  > a span {
    margin-right: 40px;
  }

  > a span:hover {
    color: #327430;
  }
`;

function RestaurantPage(props) {
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
          </div>
        </div>

        {dataMenuList.map(function (menuHeadline) {
          return (
            <div className="col-xs-12">
              <MenuListContainer>
                <a href="#">
                  <Text size={16} lineheight={19} variant="gray">
                    {menuHeadline.name1}
                  </Text>
                </a>
                <a href="#">
                  <Text size={16} lineheight={19} variant="gray">
                    {menuHeadline.name2}
                  </Text>
                </a>
                <a href="#">
                  <Text size={16} lineheight={19} variant="gray">
                    {menuHeadline.name3}
                  </Text>
                </a>
                <a href="#">
                  <Text size={16} lineheight={19} variant="gray">
                    {menuHeadline.name4}
                  </Text>
                </a>
                <a href="#">
                  <Text size={16} lineheight={19} variant="gray">
                    {menuHeadline.name5}
                  </Text>
                </a>
                <a href="#">
                  <Text size={16} lineheight={19} variant="gray">
                    {menuHeadline.name6}
                  </Text>
                </a>
              </MenuListContainer>
            </div>
          );
        })}
      </StyledMainRestaurantPage>
      <Footer />
    </>
  );
}

export default RestaurantPage;
