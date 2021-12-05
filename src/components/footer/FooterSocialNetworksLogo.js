import styled from "styled-components";
import { device } from "../common/device";
import FacebookImg from "../icons/facebook.svg";
import TwitterImg from "../icons/twitter.svg";
import InstagramImg from "../icons/instagram.svg";

const FacebookLogo = styled.img.attrs({
  src: FacebookImg,
})`
  padding-right: 7px;
  padding-top: 16px;
  padding-bottom: 39px;

  @media ${device.xs} {
    padding-top: 17px;
    padding-bottom: 55px;
  }
`;
const TwitterLogo = styled.img.attrs({
  src: TwitterImg,
})`
  padding-right: 7px;
  padding-top: 16px;
  padding-bottom: 39px;

  @media ${device.xs} {
    padding-top: 17px;
    padding-bottom: 55px;
  }
`;
const InstagramLogo = styled.img.attrs({
  src: InstagramImg,
})`
  padding-right: 7px;
  padding-top: 16px;
  padding-bottom: 39px;

  @media ${device.xs} {
    padding-top: 17px;
    padding-bottom: 55px;
  }
`;

export { FacebookLogo, TwitterLogo, InstagramLogo };
