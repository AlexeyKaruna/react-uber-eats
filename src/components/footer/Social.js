import styled from "styled-components";
import { device } from "../common/device";
import FacebookImg from "../icons/facebook.svg";
import TwitterImg from "../icons/twitter.svg";
import InstagramImg from "../icons/instagram.svg";

const StyledSocialLogo = styled.img`
  padding-right: 7px;
  padding-top: 16px;
  padding-bottom: 39px;
  @media ${device.xs} {
    padding-top: 17px;
    padding-bottom: 55px;
  }
`;

const FacebookLogo = styled(StyledSocialLogo).attrs({
  src: FacebookImg,
})``;
const TwitterLogo = styled(StyledSocialLogo).attrs({
  src: TwitterImg,
})``;
const InstagramLogo = styled(StyledSocialLogo).attrs({
  src: InstagramImg,
})``;
function Facebook(props) {
  return (
    <a href={props.href}>
      <FacebookLogo />
    </a>
  );
}
function Twitter(props) {
  return (
    <a href={props.href}>
      <TwitterLogo />
    </a>
  );
}
function Instagram(props) {
  return (
    <a href={props.href}>
      <InstagramLogo />
    </a>
  );
}

export { Facebook, Twitter, Instagram };
