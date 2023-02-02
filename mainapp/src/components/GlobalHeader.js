
import { Section, OverlapSection, SectionBreak, HeadSection,
  HeaderOrganiserFlex, HeaderLogo, HeaderButton, HeroBG,
  HeroOverlay, S2BG, S2Vid, CarouselSec, CTABG, CTARight, Footer,
  CTARightHeader, CTARightLink, FooterContainer, FooterBox
} from "../StyledComponents";

import HomePageBanner1 from "./HomePageBanner1";

import logo from "../logo.svg"

export default function GlobalHeader() {
  return (
  <>
    <HeadSection>
        <HeaderOrganiserFlex>
            <HeaderLogo src={logo} alt="poeple" /> 
            <HeaderButton>Login</HeaderButton>
        </HeaderOrganiserFlex>
    </HeadSection>
  </> 
  )
}