import styled from "styled-components";
import LogoImg from "../icons/HeaderLogo.svg";
import { device } from "./device";

const Logo = styled.img.attrs({
  src: LogoImg,
})`
  height: 11px;
  @media ${device.xs} {
    height: 13px;
  }
`;

export default Logo;
