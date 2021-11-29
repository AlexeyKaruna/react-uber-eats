import styled from "styled-components";
import { device } from "../common/device";
const Button = styled.button`
  border: 1px solid ${(props) => (props.primary ? "#e0e0e0" : "#262626")};
  display: ${(props) => (props.ASAP ? "none" : props ? "block" : "none")};
  border-radius: 2px;
  font-family: Roboto;
  font-size: 11px;
  line-height: 24px;
  padding: 0px 16px;
  height: 40px;
  color: ${(props) => (props.primary ? "#1d1d1d" : "#ffffff")};
  background-color: ${(props) => (props.primary ? "#ffffff" : "#262626")};
  cursor: pointer;
  margin-left: ${(props) => (props.primary ? "0px" : "12px")};

  @media ${device.md} {
    margin-left: ${(props) => (props.primary ? "0px" : "16px")};
    font-size: 13px;
    display: ${(props) => (props.ASAP ? "block" : props ? "block" : "none")};
  }
`;

export default Button;
