import styled from "styled-components";
type OpenNav = {
    openNav: boolean
}

export const MobileNavSection = styled.section`
    
`
export const BG = styled.div<OpenNav>`
    position: fixed;
    right: ${props => props.openNav ? '0': '-100%'};
    background-color: ${props => props.theme.colors.neutral.veryDarkBlue};
    width: 100vw;
    height: 100vh;
    z-index: 20;
    opacity: 0.8;
    transition: all 0.2s ease-out;

`
export const MobileNavContainer = styled.div<OpenNav>`
    width: 70%;
    height: 100%;
    background-color: ${props => props.theme.colors.neutral.white};
    padding: 1rem;
    padding-top: 1.7rem;
    position: fixed;
    z-index: 20;
    left: ${props => props.openNav ? '0': '-100%'};
    transition: all 0.3s ease;
`

export const Close = styled.img`
    cursor: pointer;
    width: 18px;
`

export const Links = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 700;
    font-size: 17px;
`