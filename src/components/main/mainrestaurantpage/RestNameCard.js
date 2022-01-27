import styled from "styled-components";
import Text from "../../common/Text";
import { device } from "../../common/device";

const StyledRestNameCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(117, 117, 117, 0.2);
  border-radius: 2px;
  height: 180px;
  margin-top: 131px;
  padding: 24px 49px 24px 49px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media ${device.md} {
    height: 204px;
    margin-top: 80px;
    margin-bottom: 80px;
    padding: 38px 48px 38px 48px;
    > ${Text} {
      line-height: 42px;
      font-size: 36px;
    }
  }
  @media ${device.lg} {
    padding: 38px;
  }
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div {
    flex-direction: column;
    @media ${device.md} {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  div > ${Text}:first-child {
    margin-bottom: 16px;
    @media ${device.md} {
      margin-bottom: 0;
    }
  }
  div > ${Text}:last-child {
    background: #262626;
    border-radius: 16px;
    padding: 9px 16px 8px 16px;
  }
`;

function RestNameCard(props) {
  return (
    <StyledRestNameCard>
      <Text size={24} lineheight={28}>
        {props.name}
      </Text>
      <div>
        <Text size={14} lineheight={16} variant="gray">
          {props.type}
        </Text>
        <Text size={13} lineheight={15} variant="light">
          {props.time}
        </Text>
      </div>
    </StyledRestNameCard>
  );
}

export default RestNameCard;
