import { HeroSection, HeroContainer, Slider, HeroContent, Next, Prev, ContentHeader, Counter, Pricing, Price, Span1, Span2, Count, Minus, Plus, CartButton } from './Hero.styles';
import img1 from '../../images/image-product-1.jpg';
import prev from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';
import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';
import cart from '../../images/icon-cart.svg';

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
          <ContentHeader>SNEAKER COMPANY</ContentHeader>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect causal wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

          <Counter>
            <Pricing>
                <Price><Span1>$125.00</Span1> <Span2>50%</Span2></Price>
                <p>$250.00</p>
            </Pricing>

            <Count>
              <Minus src={minus} alt='minus' />
              <span>0</span>
              <Plus src={plus} alt='plus'/>
            </Count>

            <CartButton><img src={cart} alt="cart" />  <p>Add to cart</p></CartButton>
          </Counter>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}
 
export default Hero;