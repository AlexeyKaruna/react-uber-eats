import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "./Social";
import { FooterHashtagSocial, Text } from "../common/Text";
import LogoImg from "../icons/FooterLogo.svg";
import { StripUpper, StripMiddle, StripBottom } from "./Strip";
import SelectLanguage from "./SelectLanguage";
import {
  LinkTextAboutCompany,
  LinkTextPolicyCompany,
  LinkTextFAQs,
  LinkTextCopyright,
  LinkTextCopyrightInc,
  LinkTextCopyrightTerms,
} from "../common/Text";
import { MobileStoresContainer, Appstore, Googleplay } from "./MobileStores";

const Logo = styled.img.attrs({
  src: LogoImg,
})`
  padding-top: 56px;
  padding-bottom: 40px;
`;
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
            <SelectLanguage />
            <FooterHashtagSocial size={16} variant="green">
              #
            </FooterHashtagSocial>
            <Text size={16} variant="light">
              UberEats
            </Text>
            <div>
              <Facebook href="https://www.facebook.com/" />
              <Twitter href="https://twitter.com/" />
              <Instagram href="https://www.instagram.com/" />
            </div>
          </div>

          <div className="col-xs-12 col-md-3 col-md-offset-1">
            <LinkTextAboutCompany href="#" />
          </div>
          <div className="col-xs-12 col-md-2 col-md-offset-1">
            <LinkTextPolicyCompany href="#" />

            <LinkTextFAQs href="#" />
          </div>
          <div className="col-xs-12">
            <StripMiddle />
          </div>
          <div className="col-xs-12">
            <MobileStoresContainer>
              <Appstore href="https://www.apple.com/ru/app-store/"></Appstore>
              <Googleplay href="https://play.google.com/"></Googleplay>
            </MobileStoresContainer>
          </div>
          <div className="col-xs-12">
            <StripBottom />
          </div>
          <div className="col-xs-12 col-md-3">
            <LinkTextCopyrightInc size={11} variant="light">
              {" "}
              © 2017 Uber Technologies Inc.
            </LinkTextCopyrightInc>
          </div>
          <div className="col-xs-12 col-md-1 col-md-offset-1">
            <LinkTextCopyright href="#" size={11} variant="light">
              Privacy
            </LinkTextCopyright>
          </div>
          <div class="col-xs-12 col-md-1 col-md-offset-3">
            <LinkTextCopyrightTerms href="#" size={11} variant="light">
              Terms
            </LinkTextCopyrightTerms>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
export default Footer;
