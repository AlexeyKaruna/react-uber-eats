import styled from "styled-components";
import { device } from "../common/device";
import { Link } from "react-router-dom";
import Text from "../common/Text";
import LogoImg from "../icons/FooterLogo.svg";
import { StripUpper, StripMiddle, StripBottom } from "./Strip";
import SelectLanguage from "./SelectLanguage";
import FacebookImg from "../icons/facebook.svg";
import TwitterImg from "../icons/twitter.svg";
import InstagramImg from "../icons/instagram.svg";
import { MobileStoresContainer, Appstore, Googleplay } from "./MobileStores";

const Logo = styled.img.attrs({
  src: LogoImg,
})`
  padding-top: 56px;
  padding-bottom: 40px;
`;
const StyledFooter = styled.footer`
  background-color: #262626;
  padding-bottom: 40px;

  > div div:nth-child(4) div:last-child {
    margin-bottom: 23px;
  }
  > div div:nth-child(3) div:last-child {
    margin-bottom: 43px;
  }
  > div div:nth-child(9) div {
    margin-bottom: 24px;
  }
  > div div:nth-child(10) div {
    margin-bottom: 24px;
  }

  @media ${device.md} {
    > div div:nth-child(4) div:last-child {
      margin-bottom: 0;
    }
    > div div:nth-child(3) div:last-child {
      margin-bottom: 0;
    }
    > div div:nth-child(9) div {
      margin-bottom: 0;
    }
    > div div:nth-child(10) div {
      margin-bottom: 0;
    }
  }
`;

const FooterLinkContainer = styled.div`
  margin-bottom: 23px;
  &:last-child {
    margin: 0;
  }
`;

const SocialContainer = styled.div`
  padding-top: 16px;
  > a {
    padding-right: 7px;
  }
  > a:last-child {
    padding: 0;
  }
`;

function Footer(props) {
  return (
    <StyledFooter>
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-md-4 col-lg-3">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="col-xs-12">
            <StripUpper />
          </div>
          <div className="col-xs-7 col-md-3 col-lg-3">
            <SelectLanguage />
            <Text size={16} variant="green">
              #{" "}
            </Text>
            <Text size={16} variant="light">
              UberEats
            </Text>
            <SocialContainer>
              <a href="https://www.facebook.com/">
                <img src={FacebookImg} />
              </a>
              <a href="https://www.twitter.com/">
                <img src={TwitterImg} />
              </a>
              <a href="https://www.instagram.com/">
                <img src={InstagramImg} />
              </a>
            </SocialContainer>
          </div>

          <div className="col-xs-12 col-md-3 col-md-offset-1">
            <FooterLinkContainer>
              <a href="#">
                <Text variant="light" size={13} lineheight={15}>
                  About UberEats
                </Text>
              </a>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <a href="#">
                <Text variant="light" size={13} lineheight={15}>
                  Become a Delivery Partner
                </Text>
              </a>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <a href="#">
                <Text variant="light" size={13} lineheight={15}>
                  Become a Restaurant Partner
                </Text>
              </a>
            </FooterLinkContainer>
          </div>
          <div className="col-xs-12 col-md-2 col-md-offset-1">
            <FooterLinkContainer>
              <a href="#">
                <Text variant="light" size={13} lineheight={15}>
                  See all cities
                </Text>
              </a>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <a href="#">
                <Text variant="light" size={13} lineheight={15}>
                  Pricing
                </Text>
              </a>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <a href="#">
                <Text variant="light" size={13} lineheight={15}>
                  Help
                </Text>
              </a>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <a href="#">
                <Text variant="light" size={13} lineheight={15}>
                  FAQs
                </Text>
              </a>
            </FooterLinkContainer>
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
            <FooterLinkContainer>
              <Text variant="light" size={11} lineheight={13}>
                © 2017 Uber Technologies Inc.
              </Text>
            </FooterLinkContainer>
          </div>
          <div className="col-xs-12 col-md-1 col-md-offset-1">
            <FooterLinkContainer>
              <a href="#">
                <Text variant="light" size={11} lineheight={13}>
                  Privacy
                </Text>
              </a>
            </FooterLinkContainer>
          </div>
          <div class="col-xs-12 col-md-1 col-md-offset-3">
            <FooterLinkContainer>
              <a href="#">
                <Text variant="light" size={11} lineheight={13}>
                  Terms
                </Text>
              </a>
            </FooterLinkContainer>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
export default Footer;
