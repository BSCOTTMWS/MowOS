import { HeaderButton, HeaderLogo, HeaderOrganiserFlex, HeadSection } from "../StyledComponents";
import logo from "../logo.svg"
export default function GlobalHeader (){
    
    return(
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