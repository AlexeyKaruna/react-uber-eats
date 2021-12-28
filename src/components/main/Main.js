import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { device } from "../common/device";
import Text from "../common/Text";
import Search from "./Search";
import FoodCard from "./FoodCard";

const StyledMain = styled.main`
  padding-top: 72px;
  background-color: #f2f2f2;
  padding-bottom: 68px;
  @media ${device.lg} {
    background-color: #ffffff;
    padding-bottom: 100px;
  }
`;

const RestTextContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 14px;
  line-height: 34px;

  @media ${device.xs} {
    margin-top: 56px;
    margin-bottom: 16px;
  }
`;

function Main(props) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://api.turborouter.keenetic.pro/api/restaurants/")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <StyledMain>
      <div className="container">
        <div className="row">
          <Search searchText={searchText} setSearchText={setSearchText} />
          <div className="col-xs-12 col-md-12 col-lg-12">
            <RestTextContainer>
              <Text size={22} lineheight={34}>
                Moscow Restaurants
              </Text>
            </RestTextContainer>
          </div>
          {data
            .filter((rest) =>
              rest.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map(function (rest) {
              return (
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <FoodCard
                    img={rest.image}
                    name={rest.name}
                    type={rest.type}
                    time={rest.time}
                    href={rest.href}
                  ></FoodCard>
                </div>
              );
            })}
        </div>
      </div>
    </StyledMain>
  );
}

export default Main;
