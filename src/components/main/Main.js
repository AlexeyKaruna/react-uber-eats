import styled from "styled-components";
import { device } from "../common/device";
import MainSearchInput from "./mainSearchInput";

const StyledMain = styled.main`
  padding-top: 72px;
  background-color: #f2f2f2;
  padding-bottom: 68px;
  @media ${device.md} {
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
            <MainSearchInput />
          </div>
        </div>
      </div>
    </StyledMain>
  );
}

export default Main;
