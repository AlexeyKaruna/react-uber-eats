import styled from "styled-components";
import SelectLogo from "./SelectLanguageImg";
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
      <StyledSelectLanguage></StyledSelectLanguage>
    </Container>
  );
}

export default SelectLanguage;
