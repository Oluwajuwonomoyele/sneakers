import styled from "styled-components";

export const MobileNavSection = styled.section`
    display: ${({openNav}) => openNav ? 'block': 'none'};
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 20;
`
export const BG = styled.div`
    position: fixed;
    background-color: ${props => props.theme.colors.neutral.veryDarkBlue};
    width: 100vw;
    height: 100vh;
    z-index: -1;
    opacity: 0.8;

`
export const MobileNavContainer = styled.div`
    width: 70%;
    height: 100%;
    background-color: ${props => props.theme.colors.neutral.white};
    padding: 1rem 2rem;
`

export const Close = styled.img`
    cursor: pointer;
`

export const Links = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 700;
    font-size: 17px;
`