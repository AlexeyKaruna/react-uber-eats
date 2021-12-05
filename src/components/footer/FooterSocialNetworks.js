import {
  FooterSocialNetworksHashtag,
  FooterSocialNetworksText,
} from "./FooterSocialNetworksHashtag";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
} from "./FooterSocialNetworksLogo";

function FooterSocialNetworks() {
  return (
    <>
      <FooterSocialNetworksHashtag>#</FooterSocialNetworksHashtag>
      <FooterSocialNetworksText>UberEats</FooterSocialNetworksText>
      <FacebookLogo />
      <TwitterLogo />
      <InstagramLogo />
    </>
  );
}
export default FooterSocialNetworks;
