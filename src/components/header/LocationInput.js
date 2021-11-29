import styled from "styled-components";
import LogoLocation from "../icons/Group.svg";
import { device } from "../common/device";

const LocationInput = styled.input`
  background: url(${LogoLocation}) no-repeat center left 12px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  color: #121212;
  padding: 0;
  padding-left: 36px;
  height: 40px;
  display: none;
  @media ${device.md} {
    display: block;
  }
`;

export default LocationInput;
