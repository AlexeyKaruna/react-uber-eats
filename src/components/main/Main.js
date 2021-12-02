import styled from "styled-components";
import { device } from "../common/device";
import MainSearchInput from "./mainSearchInput";
import MobileLocationInput from "./MobileLocationInput";
import { ElementWhen, MainElementTo, ElementMoscowRest } from "./TextforMain";
import MobileButton from "./MobileButton";

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
          <div className="col-xs-12 col-md-12 col-lg-12">
            <MainSearchInput placeholder="Search for reastaurant or cuisine" />
          </div>
          <div className="col-xs-2">
            <ElementWhen>When</ElementWhen>
          </div>
          <div className="col-xs-9 col-xs-offset-1">
            <MainElementTo>To</MainElementTo>
          </div>
          <div className="col-xs-3">
            <MobileButton primary>ASAP</MobileButton>
          </div>
          <div className="col-xs-9">
            <MobileLocationInput placeholder="Find some place here..." />
          </div>
          <div className="col-xs-12 col-md-12 col-lg-12">
            <ElementMoscowRest>Moscow Restaurants</ElementMoscowRest>
          </div>
        </div>
      </div>
    </StyledMain>
  );
}

export default Main;
