
import styled from "styled-components";
import "./variables.css"

import hero from "./hero-image.png"

// Section boilerplate
export const Section = styled('section')`
  min-width: 100vw;
  max-width: 100%;
  height: fit-content;
  background-color: blue;
`
// Section overlap boilerplate
export const OverlapSection = styled('div')`
  margin-top: -20%;
  height: fit-content;
`
// break
export const SectionBreak = styled('div')`
  width: 100%;
  height: 25px;
  background-color: white;
`

// Header
export const HeadSection = styled('div')`
  top: 0;
  left: 0;
  position: fixed;
  min-width: 100vw;
  max-width: 100%;
  height: 80px;
  box-shadow: 0px 0px 10px 5px #777777;
  background: transparent;
`
export const HeaderOrganiserFlex = styled('div')`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const HeaderLogo = styled('img')`
  height: 70px;
  left: 0;
`
export const HeaderButton = styled('a')`
  display: block;
  height: fit-content;
  padding: 10px 35px;
  border: 3px solid var(--colorMain);
  color: var(--colorMain);
  border-radius: 15px;
  font-size: 3rem;
  cursor: pointer;
`

// Section 1 (HERO)
export const HeroBG = styled('div')`
  width: 100%;
  height: 100vh;
  background-color: blue;
  display: flex;
  justify-content: center;
  padding-top: 140px;
`
export const HeroOverlay = styled('div')`
  width: 30%;
  height: 50%;
  background-color: orange;
`
export const HeroHeading = styled('div')`

`
export const HeroDesc = styled('div')`

`
export const HeroBtn = styled('div')`

`

// Section 2 (Overlap)
export const S2BG = styled('section')`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  margin-top: -250px;
`
export const S2Vid = styled('div')`
  width: 60%;
  height: 500px; //change
  background-color: pink;
`

// Section 3 (carousel) THIS IS GOING TO BE A LOT OF FUN!!! HAHAHA
export const CarouselSec = styled('section')`
  width: 100%;
  height: 500px;
  background-color: purple;
`

// Section 4 (CTA)
export const CTABG = styled('section')`
  width: 100%;
  height: 600px;
  background-color: blue;
  display: flex;
  justify-content: flex-end;
`
export const CTARightOverlay = styled('div')`
  width: 30%;
  height: 100%;
  background-color: grey;
  opacity: 0.6;
`
export const CTARightHeader = styled('div')`
  width: 80%;
`
export const CTARightLink = styled('div')`
  width: 80%;
`

// Footer
export const Footer = styled('footer')`
  width: 100%;
  height: 300px;
  background-color: aqua;
`
export const FooterContainer = styled('div')`
  width: 75%;
  display: flex;
  justify-content: space-around;
`
export const FooterBox = styled('div')`
  width: 20%; // temp

`