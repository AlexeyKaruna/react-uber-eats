import styled from "styled-components";
import { device } from "../common/device";
const FooterStrip = styled.div`
  height: 1px;
  background-color: #ffffff;
  opacity: 0.4;
`;

const FooterStripUpper = styled(FooterStrip)`
  margin-bottom: 32px;
`;

const FooterStripMiddle = styled(FooterStrip)`
  margin-bottom: 24px;

  @media ${device.xs} {
    margin-bottom: 40px;
  }
`;

const FooterStripBottom = styled(FooterStrip)`
  margin-top: 24px;
  @media ${device.xs} {
    margin-top: 40px;
  }
`;

export { FooterStrip, FooterStripUpper, FooterStripMiddle, FooterStripBottom };
