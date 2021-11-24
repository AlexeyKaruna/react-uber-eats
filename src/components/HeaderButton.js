import styled from "styled-components"
const WhiteButton = styled.button`
 border: 1px solid #e0e0e0;
 border-radius: 2px;
 font-family: Roboto;
 Font-size: 13px;
 line-height: 24px;
 padding: 8px 16px;
 color: #1d1d1d;
 background-color: white;
 cursor: pointer;
`;

const BlackButton = styled(WhiteButton)`
background-color: black;
border: 1px solid black;
color: white;

`;

function HeaderButton(props) {
    return props.primary ? (
        <WhiteButton>
            {props.text}
        </WhiteButton>
    ) : (
        <BlackButton>
            {props.text}
        </BlackButton>
    )
}
export default HeaderButton;