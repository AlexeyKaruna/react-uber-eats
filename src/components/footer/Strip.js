import styled from "styled-components";
import { device } from "../common/device";
const Strip = styled.div`
  height: 1px;
  background-color: #ffffff;
  opacity: 0.4;
`;

const StripUpper = styled(Strip)`
  margin-bottom: 32px;
`;

const StripMiddle = styled(Strip)`
  margin-bottom: 24px;
  margin-top: 40px;

  @media ${device.xs} {
    margin-bottom: 40px;
  }
`;

const StripBottom = styled(Strip)`
  margin-top: 24px;
  margin-bottom: 40px;
  @media ${device.xs} {
    margin-top: 40px;
  }
`;

export { Strip, StripUpper, StripMiddle, StripBottom };
