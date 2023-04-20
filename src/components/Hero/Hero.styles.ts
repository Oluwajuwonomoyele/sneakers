import styled from "styled-components";

export const HeroSection = styled.section`

`
export const HeroContainer = styled.div`
    max-width: 1300px;
    margin: 0 auto;

    @media screen and (min-width: 1300px) {
        height: 88vh;
        max-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6rem;
        padding: 0 5rem;
    }

`
export const SliderContainer = styled.div`

@media screen and (min-width: 1300px) {
       display: none;
    }
    
`
export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 1299px) {
        display: none;
    }

`
export const DisplayImg = styled.div`
    width: 450px;
    border-radius: 10px;
    overflow: hidden;

    img {
        width: 100%;
    }

`
export const Shoes = styled.div`
    display: flex;
    gap: 1rem;
`
export const Shoe = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    vertical-align: middle;
    border: 2px solid transparent;

    img {
        width: 100%;
        height: 100%;
        
    }

    &:hover {
        opacity: 60%
    }

    &.active {
        border-color: ${props => props.theme.colors.primary.orange};
    }
    &.active::after {
        content: '';
        width: 100%;
        height: 100%;
        positiion: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: green;
        z-index: 100
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

    @media screen and (min-width: 1300px) {
       h1 {
        font-size: 45px;
       }
       p {
        font-size: 16px;
        margin: 1rem 0;
       }
    }
`
export const ContentHeader = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary.orange};

    @media screen and (min-width: 1300px) {
      font-size: 16px;
    }
`
export const Counter = styled.div`
`
export const CountandButton = styled.div`

    @media screen and (min-width: 1300px) {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
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

    @media screen and (min-width: 425px) {
        margin-top: 0.5rem;
    }

    @media screen and (min-width: 1300px) {
       flex-direction: column;
       align-items: flex-start;
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

    @media screen and (min-width: 425px) {
        margin-top: 0.5rem;
    }

    @media screen and (min-width: 1300px) {
       display: inline-flex;
       width: 15rem;
       height: 3.5rem;
       margin-top: 0;
       padding: 0 1rem;
       border-radius: 8px;
    }
`
export const Minus = styled.img`
    cursor: pointer;

    &:hover {
        opacity: 60%
    }
`
export const Plus = styled.img`
    cursor: pointer;

    &:hover {
        opacity: 60%
    }
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

    &:hover {
        opacity: 60%
    }

    @media screen and (min-width: 425px) {
        margin-top: 1rem;
    }
    @media screen and (min-width: 1300px) {
       display: inline-flex;
       width: 19rem;
       margin-top: 0;
       padding: 0;
       height: 3.5rem;
    }

`