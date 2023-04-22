import styled from "styled-components";

type CartStyles = {
    isCartOpen: boolean
}

export const CartSection = styled.section<CartStyles>`
    position: absolute;
    display: ${props => props.isCartOpen ? 'block': 'none'};
    width: 95vw;
    top: 11%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.neutral.white};
    margin: 0 auto;
    border-radius: 5px;

    @media screen and (min-width: 1300px) {
        width: 350px;
        margin: 0;
        left: auto;
        right: 7%;
        top: 9%;
        box-shadow: -2px 6px 22px -5px ${props => props.theme.colors.neutral.darkGrayishBlue};
    }
`
export const CartContainer = styled.div`
    
    h1 {
        padding: 1rem;
        font-size: 16px;
        font-weight: 700;
    }
`
export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.neutral.grayishBlue};
    opacity: 0.4;
`
export const CartContent = styled.div`
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const Empty = styled.div`
    font-weight: 700;
    color: ${props => props.theme.colors.neutral.darkGrayishBlue};
    text-align: center;
    margin: 3rem 0;
`
export const CheckOut = styled.button`
    width: 100%;
    padding: 1rem 0;
    background-color: ${props => props.theme.colors.primary.orange};
    outline: none;
    border: none;
    color: white;
    border-radius: 8px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;

    &:hover {
        opacity: 60%
    }
`
export const Item = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
    padding: 0 0.5rem;
`
export const ItemImgDiv = styled.div`
    max-width: 3rem;
    overflow: hidden;
    border-radius: 5px;

    img {
        width: 100%;
    }

    @media screen and (min-width: 1300px) {
      display: flex;
      justify-content: space-between
      max-width: auto;
      width: 100%;
    }
`
export const ItemDets = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.neutral.darkGrayishBlue};
    justify-content: space-between;
    width: 100%;

    h3 {
        font-size: 15px;
        font-weight: normal;
    }

    p {
        font-size: 15px;

        span {
            font-weight: bold;
            color: black;
        }
    }
`
export const Remove = styled.img`
    cursor: pointer;
    transform: scale(1.1)
`