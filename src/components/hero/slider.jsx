import previous from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';
import { useState } from 'react';

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    if(slides.length <= 0){
        return null;
    }
    
    const handlePrev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    const handleNext = () => {
        setCurrent( current === length - 1 ? 0 : current + 1)
    };

    return (  
        <section className='overflow-hidden mb-4 relative w-full'>
            <div className='absolute top-[40%] bg-white left-0 h-8 w-8 flex items-center justify-center rounded-full ml-4 z-10' onClick={handlePrev}>
                <img className='mr-1' src={previous} alt="previous" />
            </div>
            <div className='flex top-0 left-0'>
                { slides.map((slide, index) => {
                    return (
                        <div className={current === index ? 'active slide': 'slide'} key={index}>
                            { current === index && ( <img  src={slide.largeImage} alt={slide.alt} />)}
                        </div>
                    )
                })}
            </div>
            <div className='absolute top-[40%] right-0 bg-white h-8 w-8 flex items-center justify-center rounded-full mr-4' onClick={handleNext}>
                <img className='ml-1' src={next} alt="next" />
            </div>
        </section>
    );
}
 
export default Slider;