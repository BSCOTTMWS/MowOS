
import { Section, OverlapSection, SectionBreak, HeadSection,
  HeaderOrganiserFlex, HeaderLogo, HeaderButton, HeroBG,
  HeroOverlay, S2BG, S2Vid, CarouselSec, CTABG, CTARightOverlay, Footer,
  CTARightHeader, CTARightLink, FooterContainer, FooterBox, HeroHeading,
  HeroDesc, HeroBtn
} from "../StyledComponents";

export default function HomePageBanner1(){

    return(
        <>
          <HeroBG>
            <HeroOverlay>
              <HeroHeading>
                <p>Heading</p>
              </HeroHeading>
              <HeroDesc>
                <p>Desc</p>
              </HeroDesc>
              <HeroBtn>
                Pricing
              </HeroBtn>
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
            <CTARightOverlay>
              <CTARightHeader>
                <p>Header</p>
              </CTARightHeader>
              <CTARightLink>
                <p>Link</p>
              </CTARightLink>
            </CTARightOverlay>
          </CTABG>
          <SectionBreak />
        </>
    )
}