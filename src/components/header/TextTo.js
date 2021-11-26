import styled from "styled-components"

const StyledTextTo = styled.div`
    color: #626262;
    height: 19px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    margin-right: 10px;
    margin-left: 10px;
`;

function Text (props) {
    return (
<StyledTextTo>
    {props.text}
</StyledTextTo>
    )
}

export default Text;