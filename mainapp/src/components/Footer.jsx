
import { Section, OverlapSection, SectionBreak, HeadSection,
  HeaderOrganiserFlex, HeaderLogo, HeaderButton, HeroBG,
  HeroOverlay, S2BG, S2Vid, CarouselSec, CTABG, CTARight, Footer,
  CTARightHeader, CTARightLink, FooterContainer, FooterBox
} from "../StyledComponents";

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Footer>
        <FooterContainer>
          <FooterBox>
            <p>Header</p>
            <p>potato</p>
            <p>potato</p>
            <p>potato</p>
          </FooterBox>
          <FooterBox>
            <p>Header</p>
            <p>potato</p>
            <p>potato</p>
            <p>potato</p>
          </FooterBox>
          <FooterBox>
            <p>Header</p>
            <p>potato</p>
            <p>potato</p>
            <p>potato</p>
          </FooterBox>
        </FooterContainer>
      </Footer>
    </>
  )
}