import styled from "styled-components";

export const HeadSection = styled('div')`
    top:0;
    left:0;
    position:fixed;
    min-width:100vw;
    max-width:100%;
    height: 80px;
    box-shadow: 0px 0px 10px 5px #777777;
`
export const Section = styled('div')`
    min-width:100vw;
    max-width:100%;
    height: fit-content;
    background-color:black;
`
export const OverlapSection = styled('div')`
    margin-top:-20%;
    height: fit-content;
`
export const HeaderOrganiserFlex = styled('div')`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    width:100%;
`
export const HeaderLogo = styled('img')`
    height:70px;
    left:0;
    padding:5px;
`
export const HeaderButton = styled('a')`
    margin-top: auto;
    margin-bottom:auto;
    margin-right:15px;
    height:fit-content;
    padding:5px;
    outline: solid black 2px;
    border-radius:5px;
    font-size:1.5em;
`
    
