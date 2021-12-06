import styled from "styled-components";
import Logo from "./Logo";

import { StripUpper, StripMiddle, StripBottom } from "./Strip";
import SelectLanguage from "./SelectLanguage";
const StyledFooter = styled.footer`
  background-color: #262626;
`;

function Footer(props) {
  return (
    <StyledFooter>
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-md-4 col-lg-3">
            <Logo />
          </div>
          <div className="col-xs-12">
            <StripUpper />
          </div>
          <div className="col-xs-7 col-md-3 col-lg-3">
            <SelectLanguage></SelectLanguage>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
export default Footer;
