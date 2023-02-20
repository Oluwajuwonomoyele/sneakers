import { HeroSection, HeroContainer, Slider, HeroContent, Next, Prev } from './Hero.styles';
import img1 from '../../images/image-product-1.jpg';
import prev from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';

const Hero = () => {
  return ( 
    <HeroSection>
      <HeroContainer>
        <Slider>
          <img src={img1} alt="image-1" />
          <Prev>
            <img src={prev} alt="prev" />
          </Prev>
          <Next>
            <img src={next} alt="next" />
          </Next>
        </Slider>

        <HeroContent>

        </HeroContent>

      </HeroContainer>
    </HeroSection>
  );
}
 
export default Hero;