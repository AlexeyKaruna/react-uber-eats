import styled from "styled-components";
import { device } from "../common/device";
import { RestText } from "../common/Text";
import Search from "./Search";
import Foodcard from "./FoodCard";
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
          <FoodCard image={} name ="" type="" time="" href="" />
          </div>
        </div>
      </div>
    </StyledMain>
  );
}

export default Main;
