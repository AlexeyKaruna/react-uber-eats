import styled from "styled-components";
import SelectLanguageImg from "../icons/world.svg";

const SelectLogo = styled.img.attrs({
  src: SelectLanguageImg,
})`
  width: 16px;
  position: absolute;
  left: 16px;
  bottom: 12.4px;
`;

export default SelectLogo;
