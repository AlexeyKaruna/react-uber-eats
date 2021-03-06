import styled from "styled-components";

function getColor(variant) {
  if (variant === "gray") return "#626262";
  if (variant === "light") return "#ffffff";
  if (variant === "green") return "#49a144";
  return "#1d1d1d";
}

function getWeight(weight) {
  if (weight === 500) return 500;
  return "normal";
}

const Text = styled.span`
  color: ${(props) => getColor(props.variant)};
  font-style: normal;
  font-weight: ${(props) => getWeight(props.weight)};
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  line-height: ${(props) =>
    props.lineheight ? `${props.lineheight}px` : "19px"};
`;

export default Text;
