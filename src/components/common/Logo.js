import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoImg from "../icons/HeaderLogo.svg";
import { device } from "./device";

const StyledLogo = styled.img.attrs({
  src: LogoImg,
})`
  height: 11px;
  @media ${device.xs} {
    height: 13px;
  }
`;

function Logo() {
  return (
    <Link to="/">
      <StyledLogo></StyledLogo>
    </Link>
  );
}

export default Logo;
