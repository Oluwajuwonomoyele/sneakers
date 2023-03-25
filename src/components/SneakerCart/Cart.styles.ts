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
    height: 2px;
    background-color: ${props => props.theme.colors.neutral.lightGrayishBlue};
`

export const CartContent = styled.div`
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    
    /* p {
        font-weight: 700;
        color: ${props => props.theme.colors.neutral.darkGrayishBlue};
        text-align: center;
        margin-top: 4rem;
    } */
`

export const CheckOut = styled.button`
    width: 100%;
    padding: 1rem 0;
    background-color: ${props => props.theme.colors.primary.orange};
    outline: none;
    border: none;
    color: white;
    margin-top: 0.7rem;
    border-radius: 8px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
`
export const Item = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export const ItemImgDiv = styled.div`
    max-width: 3rem;
    overflow: hidden;
    border-radius: 5px;

    img {
        width: 100%;
    }
`

export const ItemDets = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.neutral.darkGrayishBlue};
    gap: 1rem;

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

export const Remove = styled.img``