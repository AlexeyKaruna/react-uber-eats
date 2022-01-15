import styled from "styled-components";
import Text from "../common/Text";
import { device } from "../common/device";

const StyledRestNameCard = styled.div`
  display: none;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(117, 117, 117, 0.2);
  border-radius: 2px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div:last-child span:nth-child(2n) {
    background-color: #262626;
    border-radius: 16px;
    padding: 8px 16px;
  }
  @media ${device.md} {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    > div:first-child {
      margin-top: 38px;
      margin-bottom: 54px;
    }
    > div:nth-child(2n) {
      justify-content: space-between;
      margin-bottom: 38px;
      margin-left: 48px;
      margin-right: 48px;
    }
  }
  @media ${device.lg} {
    > div {
      margin-left: 38px;
      margin-right: 32px;
    }
  }
`;
const StyledRestNameCardMobile = styled(StyledRestNameCard)`
  display: block;
  display: flex;
  flex-direction: column;
  margin-top: 131px;
  > div:first-child {
    margin: 24px 49px 40px;
  }

  > div:nth-child(2n) {
    margin: 0px 91px 16px;
  }
  > div:nth-child(3) {
    margin-bottom: 24px;
  }
  @media ${device.md} {
    display: none;
  }
`;

function RestMainCard(props) {
  return (
    <>
      <StyledRestNameCard>
        <div>
          <Text size={36} lineheight={42}>
            {props.name}
          </Text>
        </div>
        <div>
          <Text size={14} lineheight={16} variant="gray">
            {props.type}
          </Text>
          <Text size={13} lineheight={15} variant="light">
            {props.time}
          </Text>
        </div>
      </StyledRestNameCard>
      <StyledRestNameCardMobile>
        <div>
          <Text size={24} lineheight={28}>
            {props.name}
          </Text>
        </div>
        <div>
          <Text size={14} lineheight={16} variant="gray">
            {props.type}
          </Text>
        </div>
        <div>
          <span></span>
          <Text size={13} lineheight={15} variant="light">
            {props.time}
          </Text>
        </div>
      </StyledRestNameCardMobile>
    </>
  );
}

export default RestMainCard;
