import {
  StyledFooterText,
  StyledFooterTextCopyright,
  StyledFooterTextCopyrightInc,
  StyledFooterTextCopyrightTerms,
  StyledFooterTextFAQs,
} from "../common/TextStyled";

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
        {" "}
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
        Pricing
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
      <StyledFooterTextFAQs size={13} variant="light">
        FAQs
      </StyledFooterTextFAQs>
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
  LinkTextAboutCompany,
  LinkTextPolicyCompany,
  LinkTextFAQs,
  LinkTextCopyrightInc,
  LinkTextCopyright,
  LinkTextCopyrightTerms,
};
