
import { Section, OverlapSection, SectionBreak, HeadSection,
  HeaderOrganiserFlex, HeaderLogo, HeaderButton, HeroBG,
  HeroOverlay, S2BG, S2Vid, CarouselSec, CTABG, CTARight, Footer
} from "../StyledComponents";
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
    <HeroBG>
      <HeroOverlay>

      </HeroOverlay>
    </HeroBG>
    <S2BG>
      <S2Vid>

      </S2Vid>
    </S2BG>
    <SectionBreak />
    <CarouselSec>

    </CarouselSec>
    <SectionBreak />
    <CTABG>
      <CTARight>

      </CTARight>
    </CTABG>
    <SectionBreak />
    <Footer></Footer>
  </> 
  )
}