import styled from "styled-components";
import { device } from "./device";
import ButtonUpImg from "../icons/arrow.svg";

const Button = styled.button`
  border: 1px solid ${(props) => (props.primary ? "#e0e0e0" : "#262626")};
  border-radius: 2px;
  font-size: 11px;
  line-height: 24px;
  padding: 0px 16px;
  height: 40px;
  color: ${(props) => (props.primary ? "#1d1d1d" : "#ffffff")};
  background-color: ${(props) => (props.primary ? "#ffffff" : "#262626")};
  cursor: pointer;
  margin-left: ${(props) => (props.primary ? "0px" : "12px")};

  @media ${device.md} {
    margin-left: ${(props) => (props.primary ? "0px" : "16px")};
    font-size: 13px;
  }
`;

const ASAPButton = styled(Button)`
  display: none;
  @media ${device.md} {
    display: block;
  }
`;
const SignInButton = styled(Button)`
  margin-left: auto;
  @media ${device.md} {
    margin-left: none;
  }
`;
const MobileButton = styled(Button)`
  display: block;
  background-color: #f2f2f2;
  width: 100%;
  @media ${device.xs} {
    display: none;
  }
`;
const StyledButtonUp = styled(Button)`
  width: 64px;
  height: 64px;
  background: #59bd5a;
  border: none;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 24px;
  right: 16px;
  margin: 0;
  @media ${device.xs} {
    width: 80px;
    height: 80px;
  }
`;

const ButtonUpLogo = styled.img.attrs({
  src: ButtonUpImg,
})``;

function ButtonUp(props) {
  return (
    <a href={props.href}>
      <StyledButtonUp>
        <ButtonUpLogo />
      </StyledButtonUp>
    </a>
  );
}

export { Button, ASAPButton, SignInButton, MobileButton, ButtonUp };
