import styled from "styled-components";
import FooterLogo from "./FooterLogo";
import FooterSocialNetworks from "./FooterSocialNetworks";
import {
  FooterStripUpper,
  FooterStripMiddle,
  FooterStripBottom,
} from "./FooterStrip";
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
            <FooterLogo />
          </div>
          <div className="col-xs-12">
            <FooterStripUpper />
          </div>
          <div className="col-xs-7 col-md-3 col-lg-3">
            <SelectLanguage></SelectLanguage>
            <FooterSocialNetworks />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
export default Footer;
