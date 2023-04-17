import styled from "styled-components";

type SliderStyles = {
    position: string
}

export const SliderSection = styled.section`
    position: relative;
    height: 35vh;
    display: flex;
    overflow: hidden;
    transition: all 0.3s ease;

    @media screen and (min-width: 360px) {
        height: 41vh; 
    }

    @media screen and (min-width: 768px) {
        height: 45vh;
    }

    @media screen and (min-width: 1300px) {
        display: none;
    }
`
export const SliderImg = styled.img<SliderStyles>`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    object-fit: cover;
    opacity: ${props => props.position === 'activeSlide' ? '1' : 0};
    transform: ${props => props.position === 'activeSlide' ? 'translateX(0)' : props.position === 'lastSlide' ? 'translateX(-100%)' : props.position === 'nextSlide' ? 'translateX(100%)' : ''};
    transition: all 0.3s ease;
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
        transform: scale(0.7);
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
        transform: scale(0.7);
    }
`