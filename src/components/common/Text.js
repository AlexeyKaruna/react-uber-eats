import styled from "styled-components";
import { device } from "../common/device";

function getColor(variant) {
  if (variant === "gray") return "#626262";
  if (variant === "light") return "#ffffff";
}

const Text = styled.span`
  color: ${(props) => getColor(props.variant)};
  height: 19px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-right: 10px;
  margin-left: 10px;
  display: ${(props) => (props.elementTo ? "none" : props ? "block" : "none")};
  @media ${device.md} {
    display: ${(props) =>
      props.elementTo ? "block" : props ? "block" : "none"};
  }
`;

export default Text;
