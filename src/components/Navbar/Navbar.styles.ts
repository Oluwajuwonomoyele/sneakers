import styled from 'styled-components'

export const Nav = styled.nav`
    height: 70px;
    width: 100%;

    @media screen and (min-width: 1300px) {
        height: auto;
    }
`
export const NavContainer = styled.section`
    padding: 0 1rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;

    @media screen and (min-width: 1300px) {
        padding: 0;
        border-bottom: 1px solid ${props => props.theme.colors.neutral.grayishBlue};
    }
`
export const Left = styled.div`
    display: flex;
    gap: 0.9rem;
    align-items: center;

    @media screen and (min-width: 1300px) {
        gap: 3rem;
    }
`
export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width: 1299px) {
        display: none;
    }
`
export const Link = styled.p`
    font-weight: 500;
    color: ${props => props.theme.colors.neutral.darkGrayishBlue};
    cursor: pointer;
    transition: color 1s linear;
    padding: 2rem 0;
    border-bottom: 3px solid transparent;

    &:hover {
        color: ${props => props.theme.colors.neutral.veryDarkBlue};
        border-bottom: 3px solid ${props => props.theme.colors.primary.orange};
    }
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media screen and (min-width: 1300px) {
        gap: 2rem;
    }

`
export const Menu = styled.img`
    cursor: pointer;

    @media screen and (min-width: 1300px) {
        display: none;
    }

`
export const Logo = styled.img`
    cursor: pointer;
`
export const CartToast = styled.div`
    cursor: pointer;
    position: relative;

    svg {
        fill: #69707D;

        @media screen and (min-width: 1300px) {
            &:hover {
                fill: ${props => props.theme.colors.neutral.veryDarkBlue};
            }   
        }
    }
`
export const Toast = styled.div`
    background-color: ${props => props.theme.colors.primary.orange};
    color: white;
    font-size: 10px;
    position: absolute;
    top: -20%;
    right: -23%;
    padding: 0 7px;
    border-radius: 40%;
`
export const Avatar = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: 50%;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    @media screen and (min-width: 1300px) {
        width: 45px;
        height: 45px;
    }
  
    &:hover {
        border-color: ${props => props.theme.colors.primary.orange};
    }
`