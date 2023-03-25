import styled from 'styled-components'

export const Nav = styled.nav`
    height: 70px;
    width: 100%;
`
export const NavContainer = styled.section`
    padding: 0 1rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Left = styled.div`
    display: flex;
    gap: 0.9rem;
    align-items: center;

`
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

`
export const Menu = styled.img`
    cursor: pointer;

`
export const Logo = styled.img`
    cursor: pointer;

`
export const CartToast = styled.div`
    cursor: pointer;
    position: relative;
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
    img {
        width: 30px;
    }

`