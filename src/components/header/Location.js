import styled from "styled-components";
import LogoLocation from "./ImageLocation";

const StyledLocation = styled.input`
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  padding-left: 36px;
  color: #121212;
  padding-top: 8px;
  padding-bottom: 8px;
`;
function Location(props) {
  return <StyledLocation></StyledLocation>;
}
export default Location;
