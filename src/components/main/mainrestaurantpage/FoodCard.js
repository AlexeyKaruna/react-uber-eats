import styled from "styled-components";
import { device } from "../../common/device";
import Text from "../../common/Text";

const StyleFoodCard = styled.div`
  border-bottom: 1px solid rgba(117, 117, 117, 0.2);
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  @media ${device.md} {
    border: 1px solid rgba(117, 117, 117, 0.2);
    margin-bottom: 32px;
  }
  @media ${device.lg} {
    margin-bottom: 49px;
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
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0px 0px 15px 8px;
  @media ${device.md} {
    margin: 16px 0px 16px 16px;
  }
  @media ${device.lg} {
    margin: 16px 0px 16px 16px;
  }
  div > ${Text} {
    display: block;
  }
  div > ${Text}:first-child {
    margin-bottom: 4px;
  }
`;

function FoodCard(props) {
  return (
    <StyleFoodCard>
      <DescriptionContainer>
        <div>
          <Text size={14} lineheight={24}>
            {props.name}
          </Text>
          <Text size={13} lineheight={21} variant="gray">
            {props.description}
          </Text>
        </div>
        <Text size={15} lineheight={21} weight={500}>
          {props.price}
        </Text>
      </DescriptionContainer>
      <ImageFoodCard src={props.image} />
    </StyleFoodCard>
  );
}

export default FoodCard;
