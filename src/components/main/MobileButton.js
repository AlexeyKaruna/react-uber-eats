import { Button } from "../header/Button";
import styled from "styled-components";
import { device } from "../common/device";

const MobileButton = styled(Button)`
  display: block;
  background-color: #f2f2f2;
  width: 100%;
  @media ${device.xs} {
    display: none;
  }
`;

export default MobileButton;
