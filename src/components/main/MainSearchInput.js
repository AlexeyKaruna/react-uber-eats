import styled from "styled-components";

import logoMainSearchInput from "../icons/Shape.svg";

const MainSearchInput = styled.input`
  font-family: Roboto;
  font-size: 16px;
  width: 100%;
  height: 48px;
  margin-top: 32px;
  background: url(${logoMainSearchInput}) no-repeat center left 1.2px;
  padding-left: 30px;
  border: none;
  border-bottom: 1px solid #757575;
`;

export default MainSearchInput;
