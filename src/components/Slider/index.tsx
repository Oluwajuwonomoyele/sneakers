import {useState, useEffect} from 'react';
import sliderData from './sliderData';
import { SliderSection, SliderImg, Prev, Next } from './slider.styles';
import prev from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const lastIndex = sliderData.length -1

    console.log(index)

    useEffect(() => {
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    }, [index, lastIndex])

    return (  
        <SliderSection>
            {sliderData.map((item, indexSlide) => {
                const { id, imgSrc, alt } = item
                let position = 'nextSlide'
                if(indexSlide === index){
                    position = 'activeSlide'
                    console.log(position)
                }
                if(indexSlide === index - 1 || (index === 0 && indexSlide === sliderData.length -1)){
                    position = 'lastSlide'
                }

                return (
                    <SliderImg src={imgSrc} alt={alt} key={id} position={position} />
                )
            })}
            <Prev onClick={() => setIndex(index - 1)}>
                <img src={prev} alt="prev" />
            </Prev>
            <Next onClick={() => setIndex(index + 1)}>
                <img src={next} alt="next" />
            </Next>
        </SliderSection>
    );
}
 
export default ImageSlider;