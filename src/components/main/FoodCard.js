import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "../common/Text";
import { device } from "../common/device";

const Container = styled.div`
  text-align: left;
  margin-top: 8px;
  margin-bottom: 8px;
  > div:nth-child(2) {
    padding-top: 0;
  }
  > div {
    padding-top: 5px;
  }
  > div:last-child {
    padding-top: 3px;
  }
  @media ${device.lg} {
    > div {
      padding-top: 4px;
    }
    > div:last-child {
      padding-top: 4px;
    }
  }
  &:hover {
    background-color: #d4cfcf;
  }
`;
const Image = styled.img`
  width: 100%;
  margin-bottom: 16px;
`;

function Foodcard(props) {
  return (
    <Link to="/restaurant">
      <Container>
        <Image src={props.img} />
        <div>
          <Text size={16} lineheight={24}>
            {props.name}
          </Text>
        </div>
        <div>
          <Text variant="gray" lineheight={21}>
            {props.type}
          </Text>
        </div>
        <div>
          <Text size={13} lineheight={21}>
            {props.time}
          </Text>
        </div>
      </Container>
    </Link>
  );
}
export default Foodcard;
