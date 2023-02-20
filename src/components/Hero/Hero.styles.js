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
`