import styled from "styled-components";
import { device } from "../common/device";

const ElementWhen = styled.span`
  padding-top: 24px;
  padding-bottom: 8px;
  font-size: 11px;
  line-height: 13px;
  display: block;
  color: #626262;
  @media ${device.xs} {
    display: none;
  }
`;
const MainElementTo = styled(ElementWhen)``;
const ElementMoscowRest = styled.div`
  margin-top: 40px;
  margin-bottom: 14px;
  font-size: 22px;
  line-height: 34px;
  color: #1d1d1d;
  @media ${device.xs} {
    margin-top: 56px;
    margin-bottom: 16px;
  }
`;
export { ElementWhen, MainElementTo, ElementMoscowRest };
