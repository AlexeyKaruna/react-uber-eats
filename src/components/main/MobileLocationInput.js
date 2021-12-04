import styled from "styled-components";
import { device } from "../common/device";
import LocationInput from "../header/LocationInput";

const MobileLocationInput = styled(LocationInput)`
  display: block;
  width: 100%;
  font-size: 13px;
  @media ${device.xs} {
    display: none;
  }
`;

export default MobileLocationInput;
