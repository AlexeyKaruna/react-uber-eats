import styled from "styled-components";
import { device } from "../common/device";

function getColor(variant) {
  if (variant === "gray") return "#626262";
  if (variant === "light") return "#ffffff";
  return "#1d1d1d";
}

const Text = styled.span`
  font-family: Roboto;
  color: ${(props) => getColor(props.variant)};
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  line-height: 19px;
`;

const TextTo = styled(Text)`
  display: none;
  margin-right: 10px;
  margin-left: 10px;
  @media ${device.md} {
    display: block;
  }
`;

const MobileSearchText = styled(Text)`
  margin-bottom: 8px;
  margin-top: 24px;
  line-height: 13px;
  display: block;
  @media ${device.xs} {
    display: none;
  }
`;

const RestText = styled(Text)`
  margin-top: 40px;
  margin-bottom: 14px;
  line-height: 34px;
  display: block;
  @media ${device.xs} {
    margin-top: 56px;
    margin-bottom: 16px;
  }
`;
export { Text, TextTo, RestText, MobileSearchText };
