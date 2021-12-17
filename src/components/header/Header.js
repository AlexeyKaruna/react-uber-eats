import styled from "styled-components";
import Wrapper from "./Wrapper";
import Logo from "../common/Logo";
import { Button, SignInButton, ASAPButton } from "../common/Button";
import LocationInput from "./LocationInput";
import Text from "../common/Text";
import Basket from "./Basket";
import { device } from "../common/device";

const StyledHeader = styled.header`
  background: #ffffff;
  box-shadow: 0px 0px 16px rgb(38 38 38 / 16%);
  opacity: 1;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
`;

const ToContainer = styled.div`
  display: none;
  margin-right: 10px;
  margin-left: 10px;
  @media ${device.md} {
    display: block;
  }
`;

function Header(props) {
  return (
    <StyledHeader>
      <div className="container">
        <div className="row">
          <div className="col-xs-5 col-md-2 col-lg-2">
            <Wrapper>
              <Logo />
            </Wrapper>
          </div>
          <div className="col-xs-1 col-md-5 col-lg-5 col-lg-offset-1">
            <Wrapper>
              <ASAPButton primary>ASAP</ASAPButton>
              <ToContainer>
                <Text variant="gray" size={16}>
                  to
                </Text>
              </ToContainer>
              <LocationInput
                type="text"
                placeholder="Find some place here..."
              />
            </Wrapper>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3 col-md-offset-1">
            <Wrapper>
              <SignInButton primary>Sign in</SignInButton>
              <Button>Register</Button>
              <Basket />
            </Wrapper>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
