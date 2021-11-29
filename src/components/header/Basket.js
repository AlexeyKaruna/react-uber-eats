import styled from "styled-components";
import LogoBasket from "../icons/basket.svg";
import { device } from "../common/device";

const ImageBasket = styled.img.attrs({
  src: LogoBasket,
})`
  display: none;
  @media ${device.xs} {
    display: block;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 25px;
  display: none;
  @media ${device.md} {
    display: block;
  }
`;

function Basket() {
  return (
    <StyledButton>
      <ImageBasket />
    </StyledButton>
  );
}
export default Basket;
