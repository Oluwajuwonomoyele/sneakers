import styled from "styled-components";

export const HeroSection = styled.section`

`

export const HeroContainer = styled.div`
`
export const Slider = styled.div`
    height: 35vh;
    position: relative;

    img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const Prev = styled.div`
    background-color: ${props => props.theme.colors.neutral.white};
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40%;
    margin-left: 1rem;
    cursor: pointer;

    img {
        transform: scale(0.4);
    }

`

export const Next = styled.div`
    background-color: ${props => props.theme.colors.neutral.white};
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40%;
    right: 0;
    margin-right: 1rem;
    cursor: pointer;

    img {
        transform: scale(0.4);
    }
`

export const HeroContent = styled.div`
    padding: 1rem;

    h1 {
        padding: 0.5rem 0;
    }
    p {
        color: ${props => props.theme.colors.neutral.darkGrayishBlue};
        font-size: 15px;
        line-height: 25px;
    }
`
export const ContentHeader = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary.orange};
`
export const Counter = styled.div`
`
export const Pricing = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;

    p {
        font-weight: 700;
        text-decoration: line-through;
        color: ${props => props.theme.colors.neutral.grayishBlue};
    }
`
export const Price = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`
export const Span1 = styled.span`
    font-weight: 700;
    font-size: 25px;
`
export const Span2 = styled.span`
    font-weight: 700;
    color: ${props => props.theme.colors.primary.orange};
    background-color: ${props => props.theme.colors.primary.paleOrange};
    padding: 0.4rem;
    border-radius: 5px;
`
export const Count = styled.div`
    background-color: ${props => props.theme.colors.neutral.lightGrayishBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 1rem;
    border-radius: 5px;

    span {
        font-weight: 700;
    }
`
export const Minus = styled.img`
    cursor: pointer;
`
export const Plus = styled.img`
    cursor: pointer;
`
export const CartButton = styled.button`
    width: 100%;
    padding: 1rem 0;
    background-color: ${props => props.theme.colors.primary.orange};
    outline: none;
    border: none;
    margin-top: 0.7rem;
    border-radius: 8px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;

    img {
        max-width: 18px;
    }
    p {
        color: ${props => props.theme.colors.neutral.white};
    }


`