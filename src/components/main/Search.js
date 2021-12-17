import styled from "styled-components";
import MainSearchInput from "./MainSearchInput";
import MobileLocationInput from "./MobileLocationInput";
import { MobileButton } from "../common/Button";
import Text from "../common/Text";
import { device } from "../common/device";

const MobileSearchTextContainer = styled.div`
  margin-bottom: 8px;
  margin-top: 24px;
  @media ${device.xs} {
    display: none;
  }
`;

function Search(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-12">
          <MainSearchInput placeholder="Search for reastaurant or cuisine" />
        </div>
        <div className="col-xs-2">
          <MobileSearchTextContainer>
            <Text variant="gray" size={11} lineheight={13}>
              When
            </Text>
          </MobileSearchTextContainer>
        </div>
        <div className="col-xs-9 col-xs-offset-1">
          <MobileSearchTextContainer>
            <Text variant="gray" size={11} lineheight={13}>
              To
            </Text>
          </MobileSearchTextContainer>
        </div>
        <div className="col-xs-3">
          <MobileButton primary>ASAP</MobileButton>
        </div>
        <div className="col-xs-9">
          <MobileLocationInput placeholder="Find some place here..." />
        </div>
      </div>
    </div>
  );
}
export default Search;
