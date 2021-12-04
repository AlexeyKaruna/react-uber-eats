import styled from "styled-components";
import {
  FoodCardTextRestName,
  FoodCardTextType,
  FoodCardTextTime,
} from "../common/Text";

const Container = styled.div`
  text-align: left;
  margin-top: 8px;
  margin-bottom: 8px;
`;
const Image = styled.img`
  width: 100%;
  margin-bottom: 16px;
`;

function Foodcard(props) {
  return (
    <a href={props.href}>
      <Container>
        <Image src={props.img} />
        <FoodCardTextRestName size={16}>{props.name}</FoodCardTextRestName>
        <FoodCardTextType variant="gray">{props.type}</FoodCardTextType>
        <FoodCardTextTime size={13}>{props.time}</FoodCardTextTime>
      </Container>
    </a>
  );
}
export default Foodcard;
