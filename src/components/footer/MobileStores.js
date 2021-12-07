import styled from "styled-components";
import AppstoreImg from "../icons/appstore.svg";
import GoogleplayImg from "../icons/googleplay.svg";
import { device } from "../common/device";

const StyleMobileStoresLogo = styled.img`
  padding: 0 12.5px;
  @media ${device.xs} {
    padding: 0 20px;
  }
`;

const AppstoreLogo = styled(StyleMobileStoresLogo).attrs({
  src: AppstoreImg,
})``;

const GoogleplayLogo = styled(StyleMobileStoresLogo).attrs({
  src: GoogleplayImg,
})``;
function Appstore(props) {
  return (
    <a href={props.href}>
      <AppstoreLogo />
    </a>
  );
}
function Googleplay(props) {
  return (
    <a href={props.href}>
      <GoogleplayLogo />
    </a>
  );
}
const MobileStoresContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { MobileStoresContainer, Appstore, Googleplay };
