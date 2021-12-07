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
const Container = styled.div`
  position: relative;
  margin-bottom: 33px;
`;

const StyledSelectLanguage = styled.select`
  width: 100%;
  height: 40px;
  background-color: #3b3b3b;
  border-radius: 2px;
  border: none;
  padding-left: 48px;
  color: #ffffff;
`;
function SelectLanguage() {
  return (
    <Container>
      <SelectLogo />
      <StyledSelectLanguage />
    </Container>
  );
}

export default SelectLanguage;
