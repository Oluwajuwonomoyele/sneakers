import styled from "styled-components";

export const CartSection = styled.section`
    position: absolute;
    display: none;
    width: 95vw;
    min-height: 230px;
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

    
    p {
        font-weight: 700;
        color: ${props => props.theme.colors.neutral.darkGrayishBlue};
        text-align: center;
        margin-top: 4rem;
    }
`