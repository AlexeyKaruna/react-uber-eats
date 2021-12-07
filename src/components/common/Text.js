import styled from "styled-components";
import { device } from "./device";

function getColor(variant) {
  if (variant === "gray") return "#626262";
  if (variant === "light") return "#ffffff";
  if (variant === "green") return "#49a144";
  return "#1d1d1d";
}

const Text = styled.span`
  color: ${(props) => getColor(props.variant)};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  line-height: 19px;
`;

const TextTo = styled(Text)`
  display: none;
  margin-right: 10px;
  margin-left: 10px;
  @media ${device.md} {
    display: block;
  }
`;

const MobileSearchText = styled(Text)`
  margin-bottom: 8px;
  margin-top: 24px;
  line-height: 13px;
  display: block;
  @media ${device.xs} {
    display: none;
  }
`;

const RestText = styled(Text)`
  margin-top: 40px;
  margin-bottom: 14px;
  line-height: 34px;
  display: block;
  @media ${device.xs} {
    margin-top: 56px;
    margin-bottom: 16px;
  }
`;
const FoodCardTextRestName = styled.div`
  color: ${(props) => getColor(props.variant)};
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  line-height: 24px;
  margin-bottom: 4px;
  font-weight: normal;
  font-style: normal;
`;
const FoodCardTextType = styled(FoodCardTextRestName)`
  line-height: 21px;
`;
const FoodCardTextTime = styled(FoodCardTextType)`
  margin-bottom: 0;
`;

const FooterHashtagSocial = styled(Text)`
  padding-right: 1px;
`;
const StyledFooterText = styled.div`
  color: ${(props) => getColor(props.variant)};
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  line-height: 15px;
  margin-bottom: 23px;
  display: block;
`;
const StyledFooterTextFAQs = styled(StyledFooterText)`
  margin-bottom: 40px;
  @media ${device.xs} {
    margin-bottom: 0;
  }
`;
const StyledFooterTextCopyright = styled(StyledFooterText)`
  line-height: 13px;
  margin-bottom: 24px;
  @media ${device.xs} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
const StyledFooterTextCopyrightInc = styled(StyledFooterTextCopyright)`
  margin-top: 40px;
  margin-bottom: 24px;
  @media ${device.xs} {
    margin-bottom: 40px;
  }
`;
const StyledFooterTextCopyrightTerms = styled(StyledFooterTextCopyright)`
  margin-bottom: 40px;
`;

function LinkTextAboutCompany(props) {
  return (
    <a href={props.href}>
      <StyledFooterText size={13} variant="light">
        About UberEats
      </StyledFooterText>
      <StyledFooterText size={13} variant="light">
        Become a Delivery Partner
      </StyledFooterText>
      <StyledFooterText size={13} variant="light">
        Become a Restaurant Partner
      </StyledFooterText>
    </a>
  );
}

function LinkTextPolicyCompany(props) {
  return (
    <a href={props.href}>
      <StyledFooterText size={13} variant="light">
        See all cities
      </StyledFooterText>
      <StyledFooterText size={13} variant="light">
        Pricing{" "}
      </StyledFooterText>
      <StyledFooterText size={13} variant="light">
        Help
      </StyledFooterText>
    </a>
  );
}

function LinkTextFAQs(props) {
  return (
    <a href={props.href}>
      <StyledFooterTextFAQs />
    </a>
  );
}

function LinkTextCopyrightInc() {
  return (
    <StyledFooterTextCopyrightInc size={11} variant="light">
      © 2017 Uber Technologies Inc.
    </StyledFooterTextCopyrightInc>
  );
}
function LinkTextCopyright(props) {
  return (
    <a href={props.href}>
      <StyledFooterTextCopyright size={11} variant="light">
        Privacy
      </StyledFooterTextCopyright>
    </a>
  );
}
function LinkTextCopyrightTerms(props) {
  return (
    <a href={props.href}>
      <StyledFooterTextCopyrightTerms size={11} variant="light">
        Terms
      </StyledFooterTextCopyrightTerms>
    </a>
  );
}

export {
  Text,
  TextTo,
  RestText,
  MobileSearchText,
  FoodCardTextRestName,
  FoodCardTextType,
  FoodCardTextTime,
  FooterHashtagSocial,
  LinkTextAboutCompany,
  LinkTextPolicyCompany,
  LinkTextFAQs,
  LinkTextCopyrightInc,
  LinkTextCopyright,
  LinkTextCopyrightTerms,
};
