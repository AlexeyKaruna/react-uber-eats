import styled from "styled-components";
import Wrapper from "./Wrapper";
import Logo from "../common/Logo";
import Button from "./Button";
import Location from "./Location";
import Text from "./TextTo";
import ImageBasket from "./ImageBasket";

const StyledHeader = styled.header`
    background: #ffffff;
    box-shadow: 0px 0px 16px rgb(38 38 38 / 16%);
    opacity: 1;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
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
                <Button text = "ASAP" primary />
                <Text text = "to"/>
                <Location text = "ul. Bolshaya  Dmitrovka,22" />
            </Wrapper>
            </div>
        <div className="col-xs-6 col-md-4 col-lg-3 col-md-offset-1">
            <Wrapper>
               <Button text = "Sign in" primary />
               <Button text = "Register" />
               <ImageBasket />
            </Wrapper>
        </div>
        
       </div>    
      </div>
     </StyledHeader>
 )
}

export default Header;