import styled from "styled-components";
import { device } from "../../common/device";
import Text from "../../common/Text";

const StyleFoodCard = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(117, 117, 117, 0.2);
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
  }
  > div span:first-child {
    margin-bottom: 4px;
  }
  > div span:nth-child(2) {
    display: none;
    margin-bottom: 16px;
  }
  > div span:nth-child(3) {
    margin-bottom: 15px;
  }
  @media ${device.md} {
    margin-bottom: 32px;
    border: 1px solid rgba(117, 117, 117, 0.2);

    > div span:first-child {
      margin-top: 16px;
      margin-left: 24px;
    }
    > div span:nth-child(2) {
      margin-left: 24px;
      margin-bottom: 58px;
    }
    > div span:nth-child(3) {
      margin-left: 24px;
      margin-bottom: 16px;
    }
  }
  @media ${device.lg} {
    margin-bottom: 49px;
    > div span:first-child {
      margin-left: 16px;
    }
    > div span:nth-child(2) {
      margin-left: 16px;
    }
    > div span:nth-child(3) {
      margin-left: 16px;
    }
  }
`;
const ImageFoodCard = styled.img`
  height: 102px;
  @media ${device.md} {
    height: 160px;
  }
  @media ${device.lg} {
    height: 170px;
  }

  > div span:first-child {
    margin-bottom: 41px;
  }
  > div span:nth-child(2) {
    margin-bottom: 15px;
  }
  @media ${device.md} {
    > div span:first-child {
      margin-bottom: 83px;
    }
    > div span:nth-child(2) {
      margin-left: 24px;
      margin-bottom: 16px;
    }
  }
`;

function FoodCard(props) {
  return (
    <StyleFoodCard>
      <div>
        <Text size={14} lineheight={24}>
          {props.name}
        </Text>
        <Text size={13} lineheight={21} variant="gray">
          {props.description}
        </Text>
        <Text size={15} lineheight={21} weight={500}>
          {props.price}
        </Text>
      </div>
      <ImageFoodCard src={props.image} />
    </StyleFoodCard>
  );
}

export default FoodCard;